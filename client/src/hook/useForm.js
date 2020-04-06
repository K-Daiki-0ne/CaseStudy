import { useState } from 'react';

export const useForm = (initValue, setCurrentId) => {
  const [values, setValues] = useState(initValue);
  const [err, setErr] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  };

  const resetForm = () => {
    setValues(initValue);
    setErr({});
    setCurrentId(0)
  }

  return {
    values,
    setValues,
    err,
    setErr,
    handleChange,
    resetForm
  };
};