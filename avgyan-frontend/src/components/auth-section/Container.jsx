import { useState } from "react";
import FormSection from "./form-section/FormSection";

const Container = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="authSection">
      <FormSection setIsSignIn={setIsSignIn} isSignIn={isSignIn} />
    </div>
  );
};

export default Container;
