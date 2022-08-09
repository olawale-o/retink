import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { setDoc, doc } from 'firebase/firestore';
import { store } from "../../firebase-config";
import { axiosPrivate } from '../../api/axios';
import './newServiceForm.css';

const NewService = () => {
  const [signatureResponse, setSignatureResponse] = React.useState({});
  const [values, setValues] = React.useState({});
  const [imgUrl, setImgUrl] = React.useState('');

  const queryClient = useQueryClient();
  React.useEffect(() => {
    let isMounted = true;
    const getSignature = async () => {
      axiosPrivate.get('/token/get-media-upload-signature', {})
      .then((response) => {
        console.log(response.data);
        isMounted && setSignatureResponse(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
    getSignature();
    const setSignatureInterval = setInterval(() => {
      getSignature();
    }, 60 * 60 * 60);
    return () => {
      isMounted = false;
      clearInterval(setSignatureInterval);
    }
  }, []);

  const addService = async () => {
    await setDoc(doc(store, "retink_services", values.title), {
      name: values.title,
      description: values.description,
      img_url: imgUrl,
      img: imgUrl,
    });
    return true;
  };
  const { mutate, isLoading } = useMutation(addService, {
    onSuccess: data => {
      console.log(data);
      const message = "success"
      alert(message)
    },
    onError: () => {
      alert("there was an error")
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    }
  });
  async function handleSubmit(e) {
    e.preventDefault();
    mutate();
  }
  function handleFileUpload(file) {
    // e.preventDefault();
    // const files = e.target.file.files;
    const url = "https://api.cloudinary.com/v1_1/" + process.env.REACT_APP_CLOUDINARY_CLOUD_NAME + "/auto/upload";
    
    const formData = new FormData();
    //for (let i = 0; i < files.length; i++) {
      // let file = files[i];
      formData.append('file', file);
      formData.append('signature', signatureResponse.signature);
      formData.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY);
      formData.append('timestamp', signatureResponse.timestamp);
      axiosPrivate.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: false,
        onUploadProgress: (progressEvent) => {
          console.log((progressEvent.loaded / progressEvent.total) * 100);
        }
      }
     ).then((response) => {
        console.log(response.data);
        const photoData = {
          public_id: response.data.public_id,
          version: response.data.version,
          signature: response.data.signature,
          asset_id: response.data.asset_id,
          format: response.data.format,
          original_name: response.data.original_name,
          resource_type: response.data.resource_type,
          url: response.data.url,
          secure_url: response.data.secure_url,
        }
        console.log(photoData);
        setImgUrl(photoData.secure_url);
        // make post request to server with photo data
      })
      .catch((error) => {
        console.log(error);
      })
    // }
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div className="new-service">
      <div className="service-form">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input type="text" className="input" name="title" onChange={handleChange} />
          </div>
          <div className="field">
            <textarea name="description" className="textarea" onChange={handleChange} />
          </div>
          <div className="field">
            <input type="file" id="img" multiple onChange={(e) => {
                handleFileUpload(e.target.files[0]);
            } } />
          </div>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  )
};

export default NewService;
