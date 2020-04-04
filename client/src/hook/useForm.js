import { useState, useEffect } from 'react';

export const useForm = initValue => {
  const [values, setValues] = useState(initValue);
  const [err, setErr] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  };

  return {
    values,
    setValues,
    err,
    setErr,
    handleChange
  };
};