import React from "react";
import { useState } from "react";
const AddJournal = ({ onAdd, onClose }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setisValid] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setisValid(false);
      return;
    } else {
      setisValid(true);
    }
    onAdd({ text, description });
    setText("");
    setDescription("");
  };
  return (
    <div className=" modal-box fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50">
      <form
        className="add-form bg-white bg-opacity-100 relative w-full"
        onSubmit={onSubmit}
      >
        <button
          className="font-bold text-lg text-red-600 absolute top-[-5%] right-0"
          onClick={onClose}
        >
          ╳
        </button>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Journal</span>
          </label>
          <input
            type="text"
            className={
              isValid
                ? "input input-bordered"
                : "input input-bordered input-error"
            }
            placeholder="Add Journal"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {!isValid && (
            <label class="label">
              <span class="label-text-alt">Invalid task name</span>
            </label>
          )}
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className={
              "textarea h-12 textarea-bordered" + isValid
                ? "input input-bordered"
                : "input input-bordered input-error"
            }
            placeholder="Add Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input type="submit" value="Save Journal" className="btn btn-block" />
        </div>
      </form>
    </div>
  );
};

export default AddJournal;
