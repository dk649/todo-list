import React from "react";

import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/actions";

const Todos = async () => {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks found</h2>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center px-6 py-4 mb-4 border border-zinc-300 rounded-lg shadow-lg hover:bg-orange-300"
        >
          <h2
            className={`text-lg capitalize ${
              task.completed ? "line-through" : ""
            }`}
          >
            {task.content}
          </h2>
          <div className="flex gap-2 items-center">
            <Link href={`/todos/${task.id}`} className="btn btn-accent btn-xs">
              Edit
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
