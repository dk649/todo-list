import { editTask } from "@/utils/actions";
import React from "react";

const EditForm = ({ task }) => {
  console.log(task);

  const { id, content, completed } = task;
  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-md"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="content"
        defaultValue={content}
        required
        className="input input-border w-full"
      />

      <div className="form-control my-4">
        <label className="label curse-pointer htmlFor='completed">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox-primary checkbox checkbox-sm"
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-outline btn-accent btn-block btn-sm"
      >
        Edit
      </button>
    </form>
  );
};

export default EditForm;
