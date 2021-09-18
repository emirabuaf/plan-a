import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { DataList } from "./components/DataList";

const initialValues = {
  country: null,
  product: null,
  startDate: null,
  endDate: null,
};

function App() {
  const [values, setValues] = useState(initialValues);
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <div>
      <Form
        values={values}
        setValues={setValues}
        setData={setData}
        setShow={setShow}
      />
      {show ? <DataList data={data} /> : null}
    </div>
  );
}

export default App;
