import { useFormik } from "formik";
import { Button } from "../components/shared/button/Button";
import { useUploadPic } from "../api/useUploadPic";

const ProfilePic = () => {
  const { mutate } = useUploadPic();
  const formik = useFormik({
    initialValues: {
      file: null,
    },
    onSubmit: (values: { file: File }) => {
      mutate(values);
    },
  });
  return (
    <div>
      <form>
        <label htmlFor="file">Upload a profile picture</label>
        <input
          name="file"
          type="file"
          id="file"
          //   value={formik.values.file}
          onChange={(event) => {
            formik.setFieldValue(
              "file",
              event.currentTarget.files?.[0] || null
            );
          }}
        />
        <Button type="primary" size="large" onClick={formik.handleSubmit}>
          Submit Intro
        </Button>
      </form>
    </div>
  );
};

export default ProfilePic;
