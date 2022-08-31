import React, { useState } from "react";
import FormSignupDr from "../utils/FormSignupDr";
import FormSuccess from "../utils/FormSuccess";

const FormDoc = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left-Dr">
          <img className="form-img" src="img/img-Dr.svg" alt="imagen Pactora" />
        </div>
        {!isSubmitted ? (
          <FormSignupDr submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default FormDoc;
