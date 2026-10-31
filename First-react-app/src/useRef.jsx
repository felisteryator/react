import { useRef } from "react";

export default function FocusInput() {
  const inputElement = useRef(null);

  const focusTextBox = () => {
    inputElement.current.focus;
  };
  return (
    <div>
      <input ref={inputElement} type="text" placeholder="Type here..." />
      <button onClick={focusTextBox}>Click to type</button>
    </div>
  );
}
