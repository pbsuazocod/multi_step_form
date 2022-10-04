import { TextField, Button } from "@mui/material";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import "./App.css";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
});

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: { validationSchema },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className=" flex flex-col items-center justify-center h-screen bg-red-300 w-screen">
      <header className="App-header">
        <form className="" onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <div className="mt-4">
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Submit
            </Button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
