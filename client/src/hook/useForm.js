import React, { useState, useEffect } from 'react';

export const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...value,
      [name]: value
    })
  };


}