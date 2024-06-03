import axios from "axios";
import { useMutation } from "react-query";

type TValues = {
  file: string;
};
const uploadPic = async (values: TValues) => {
  const formData = new FormData();
  formData.append("file", values.file!);
  try {
    const response = await axios.post("http://localhost:3001/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("File uploaded successfully", response.data);
  } catch (error) {
    console.error("Error uploading file", error);
  }
};

export const useUploadPic = () => {
  const mutation = useMutation(uploadPic);
  return mutation;
};
