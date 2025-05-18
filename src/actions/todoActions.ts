'use server';

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTodo(id: string) {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath('/todos');
}

export async function updateTodo(id: string, isCompleted: boolean) {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      isCompleted,
    },
  });
  revalidatePath('/todos');
}

export async function addTodo(title: string) {
  await prisma.todo.create({
    data: {
      title,
    },
  });
  revalidatePath('/todos');
} 