import { Input } from "../components/shared/input/Input";
import { Button } from "../components/shared/button/Button";
import { useGetSelf, useUpdateSelf } from "../api/useSelf";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";

const validationSchema = Yup.object().shape({
  intro: Yup.string().required("Intro is required"),
  experience: Yup.string().required("Experience is required"),
});

const Intro = () => {
  const { mutate } = useUpdateSelf();
  const { data } = useGetSelf();
  const formik = useFormik({
    initialValues: {
      intro: "",
      experience: "",
    },
    onSubmit: (values) => {
      mutate(values);
    },
    validationSchema: validationSchema,
  });
  return (
    <form>
      <div className="project-page-form-wrapper">
        <Input
          name="intro"
          id="intro"
          placeholder={data?.intro}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.intro}
        />
        {formik.touched.intro && formik.errors.intro ? (
          <p className="text-red-500">{formik.errors.intro}</p>
        ) : null}
        <Input
          name="experience"
          id="experience"
          placeholder={data?.experience}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.experience}
        />
        {formik.touched.experience && formik.errors.experience ? (
          <p className="text-red-500">{formik.errors.experience}</p>
        ) : null}
        <Button type="primary" size="large" onClick={formik.handleSubmit}>
          Submit Intro
        </Button>
      </div>
    </form>
  );
};

export default Intro;
