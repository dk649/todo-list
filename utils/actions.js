"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

export const createTask = async (prevState, formData) => {
  const content = formData.get("content");

  const Task = z.object({
    content: z.string().min(5).max(35),
  });

  try {
    Task.parse({
      content,
    });
    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath("/");

    return { message: "Success", status: 200 };
  } catch (error) {
    return { message: error.errors[0]?.message || "Error", status: 400 };
  }
};

export const getAllTasks = async () => {
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");

  await prisma.task.delete({
    where: { id: id },
  });

  revalidatePath("/");
};

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id: id,
    },
  });
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      content,
      completed: completed === "on",
    },
  });

  redirect("/");
};
