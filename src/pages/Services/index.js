import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { doc, getDoc } from 'firebase/firestore';
import { store } from "../../firebase-config";

import './style.css';
const getService = async (id) => {
  const docRef = doc(store, "retink_services", id);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    return null;
  }
  return docSnap.data();
};

const Services = () => {
  const { id } = useParams();
  const { isLoading, data, isError, error } = useQuery(
    ['services', id],
    async () => await getService(id),
    { retry: false }
  );

  return (
    <div className="service">
      <div className="container">
        <div className="service__content">
          {isLoading && <div className="loading" />}
          {isError && error?.code === 'permission-denied' ?
            <div className="error">
              <Link to="/auth" className="link-button">Please login to continue</Link>
            </div> :
            <div className="error">{error?.message}</div>
          }
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

export default Services;
