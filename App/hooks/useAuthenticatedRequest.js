// useAuthenticatedRequest.js
import { useAuth } from '@clerk/nextjs';

const useAuthenticatedRequest = () => {
  const { getToken } = useAuth();

  const authenticatedFetch = async (url, options) => {
    const token = await getToken();

    const headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };

    const updatedOptions = {
      ...options,
      headers,
    };

    return fetch(url, updatedOptions).then((res) => res.json());
  };

  return authenticatedFetch;
};

export default useAuthenticatedRequest;
