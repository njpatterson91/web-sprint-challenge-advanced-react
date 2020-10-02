// write your custom hook here to control your checkout form
import { useState, useEffect } from "react";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

function useFormState() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [
    showSuccessMessage,
    setShowSuccessMessage,
    values,
    setValues,
    handleChanges,
    handleSubmit,
  ];
}

export default useFormState;
