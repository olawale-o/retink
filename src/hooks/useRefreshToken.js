import useAuth from './useAuth';
import api from '../api/axios';

const useRefreshToken = () => {
  const { setUser } = useAuth();
  const refresh = async () => {
    const response = await api.get('token/refresh', { withCredentials: true });
    setUser((prev) => ({ ...prev, accessToken: response.data.accessToken }));
    return response.data.accessToken;
  }
  return refresh;
};

export default useRefreshToken;
