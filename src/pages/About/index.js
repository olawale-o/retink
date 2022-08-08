import { useEffect, useState } from "react";
import { useAxiosPrivate, useAuth } from "../../hooks";
import { useNavigate, useLocation } from "react-router-dom";

const About = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const axiosPrivate = useAxiosPrivate();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getMessage = async () => {
      try {
        const response = await axiosPrivate.get('', {
          signal: controller.signal
        });
        console.log(response.data);
        isMounted && setMessage(response.data?.message);
        isMounted && setIsLoading(false);
      } catch (err) {
        console.error(err);
        setUser(null);
        navigate('/auth', { state: { from: location }, replace: true });
      }
    }
    getMessage();
    return () => {
      isMounted = false;
      controller.abort();
    }
  }, []);
  return (
    <>
      {isLoading ? (<h1>About isLoading.....</h1>) : (<h1>About us {message}</h1>)}
    </>
  );
};

export default About;
