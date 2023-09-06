import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFields = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        {/** Bem Convention in css input__box  " __ " **/}
        <input
          ref={inputRef}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="input__box"
          placeholder="Enter a Task"
        />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </>
  );
};

export default InputFields;
