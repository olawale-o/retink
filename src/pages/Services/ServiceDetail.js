import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { doc, getDoc } from 'firebase/firestore';
import { store } from "../../firebase-config";

import './style.css';
const getSevice = async (id) => {
  const docRef = doc(store, "retink_services", id);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    return null;
  }
  return docSnap.data();
};

const ServiceDetail = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery(['services', id], async () => {
    const data = await getSevice(id);
    return data;
  });

  return (
    <div className="service">
      <div className="container">
        <div className="service__content">
          {isLoading && <div className="loading" />}
          {data && (
            <>
              <div className="service__img-box">
                <img src={data.img} alt="service" className="service__img" />
              </div>
              <div className="details">
                <h6 className="service__title">{data.name}</h6>
                <p className="description">{data.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );    
};

export default ServiceDetail;
