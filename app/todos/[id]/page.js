import React from "react";
import { getTask } from "@/utils/actions";
import Link from "next/link";
import EditForm from "@/components/EditForm";

const todoEditPage = async ({ params }) => {
  const task = await getTask(params.id);
  // console.log(task);
  return (
    <>
      <div className="mb-16">
        <Link href="/" className="btn btn-link">
          Back
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default todoEditPage;
