import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import React from "react";

const TodoForm = () => {
  const createTask = async (formData) => {
    "use server";

    const content = formData.get("content");

    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath("/");
  };
  return (
    <form action={createTask}>
      <div className="join w-full mb-8">
        <input
          type="text"
          className="input input-bordered join-item w-full focus:outline-none"
          placeholder="add todo"
          name="content"
          required
        />
        <button type="submit" className="btn btn-accent join-item">
          Add todo
        </button>
      </div>
    </form>
  );
};
export default TodoForm;
