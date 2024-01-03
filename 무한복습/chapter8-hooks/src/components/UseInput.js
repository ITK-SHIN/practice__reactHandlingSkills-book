import { useState } from "react";

export function UseInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue("");
    submitAction(inputValue);
  };

  return [inputValue, handleChange, handleSubmit];
}
