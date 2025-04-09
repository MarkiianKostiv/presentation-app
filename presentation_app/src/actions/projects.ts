"use server";
import { onAuthenticateUser } from "./user";
import { client } from "@/lib/prisma";

export const getAllProjects = async () => {
  try {
    const checkUser = await onAuthenticateUser();

    if (!checkUser || checkUser.status !== 200) {
      return { status: 403, error: "User not authenticated" };
    }

    const projects = await client.project.findMany({
      where: {
        id: checkUser.user?.id,
        isDeleted: false,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!projects) {
      return { status: 404, error: "No projects found" };
    }

    return {
      status: 200,
      projects: projects,
    };
  } catch (error) {
    console.log("Error", error);
    return { status: 500 };
  }
};

export const getResentProjects = async () => {
  try {
    const checkUser = await onAuthenticateUser();

    if (!checkUser || checkUser.status !== 200) {
      return { status: 403, error: "User not authenticated" };
    }

    const projects = await client.project.findMany({
      where: {
        id: checkUser.user?.id,
        isDeleted: false,
      },
      orderBy: {
        updatedAt: "desc",
      },
      take: 5,
    });

    if (!projects) {
      return { status: 404, error: "No resent projects found" };
    }

    return {
      status: 200,
      projects: projects,
    };
  } catch (error) {
    console.log("Error", error);
    return { status: 500 };
  }
};
