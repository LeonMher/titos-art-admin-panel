import { useQuery } from 'react-query';
import axios from 'axios';

const useProject = () => {
  const { data, isLoading, isError, error } = useQuery('data', async () => {
    const response = await axios.get('http://localhost:3000/projects');
    return response.data;
  });

  return { data, isLoading, isError, error };
};

export default useProject;