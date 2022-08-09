import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth, useRefreshToken } from "../../hooks";

const PersistAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { user, setUser } = useAuth();
  useEffect(() => {
    let isMounted = true;
  
    const verifyRefreshToken = async () => {
      console.log('verifyRefreshToken');
      try {
        await refresh();
      }
      catch (err) {
        console.error(err);
        setUser(null);
      }
      finally {
        isMounted && setIsLoading(false);
      }
    }
  
   !user?.accessToken ? verifyRefreshToken() : setIsLoading(false);
   return () => isMounted = false;
  }, []);

  return (
    <>
      {isLoading ? (<h1>isLoading.....</h1>) : <Outlet />}
    </>
  );
};

export default PersistAuth;
