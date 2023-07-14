import { useState } from "react";

const useBtnValidate = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });


  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const isValid = () => {
    const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i;

    if (
      form.name.length > 2 &&
      form.phone.length > 5 &&
      regex.test(form.email) &&
      form.subject.length > 5 &&
      form.message.length > 10) {
      return true;
    }

    return false;
  }

  return { form, handleChange, isValid };
}


export default useBtnValidate;