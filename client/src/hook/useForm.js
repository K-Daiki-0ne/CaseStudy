import { useState, useEffect } from 'react';

export const useForm = initValue => {
  const [values, setValues] = useState(initValue);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...value,
      [name]: value
    })
  };

  return {
    values,
    setValues,
    handleChange
  };
};