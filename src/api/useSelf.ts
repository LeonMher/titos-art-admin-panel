import { useQuery, useMutation } from "react-query";
import axios from "axios";

type TValues = {
  intro?: string;
  experience?: string;
};

const fetchSelf = async () => {
  const response = await axios.get("http://localhost:3001/self");
  return response.data;
};

const updateSelf = async (values: TValues) => {
  const response = await axios.patch("http://localhost:3001/self", values);
  return response.data;
};

export const useGetSelf = () => {
  const { data, isLoading, isError, error } = useQuery("data", fetchSelf);

  return { data, isLoading, isError, error };
};

export const useUpdateSelf = () => {
  const mutation = useMutation(updateSelf);
  return mutation;
};
