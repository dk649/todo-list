"use client";
import { createTask } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import toast, { Toaster } from "react-hot-toast";

import React, { useEffect } from "react";

const initialState = {
  message: null,
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-accent join-item"
      disabled={pending}
    >
      {pending ? "creating..." : "Add todo"}
    </button>
  );
};

const TodoForm = () => {
  const [state, formAction] = useFormState(createTask, initialState);

  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    } else if (state.message) {
      toast.success("Task created successfully");
    }
  }, [state]);
  return (
    <form action={formAction}>
      <div className="join w-full mb-8">
        <input
          type="text"
          className="input input-bordered join-item w-full focus:outline-none"
          placeholder="add todo"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};
export default TodoForm;
