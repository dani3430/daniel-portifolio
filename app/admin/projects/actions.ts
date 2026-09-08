"use server";

import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { Project } from "@/lib/models/project";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const technologiesValue = String(
    formData.get("technologies") ?? "",
  ).trim();
  const liveUrl = String(formData.get("liveUrl") ?? "").trim();
  const githubUrl = String(formData.get("githubUrl") ?? "").trim();
  const status = String(formData.get("status") ?? "completed");
  const orderValue = String(formData.get("order") ?? "0").trim();
  const featured = formData.get("featured") === "on";

  if (!title) throw new Error("Project title is required.");
  if (!description) throw new Error("Project description is required.");

  if (status !== "completed" && status !== "ongoing") {
    throw new Error("Invalid project status.");
  }

  const order = Number(orderValue);

  if (!Number.isInteger(order) || order < 0) {
    throw new Error("Display order must be a non-negative integer.");
  }

  const technologies = technologiesValue
    .split(",")
    .map((technology) => technology.trim())
    .filter(Boolean);

  await connectToDatabase();

  await Project.create({
    title,
    description,
    technologies,
    liveUrl: liveUrl || undefined,
    githubUrl: githubUrl || undefined,
    status,
    featured,
    order,
  });

  revalidatePath("/admin/projects");
  revalidatePath("/");
}

export async function updateProject(
  projectId: string,
  formData: FormData,
) {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const technologiesValue = String(
    formData.get("technologies") ?? "",
  ).trim();
  const liveUrl = String(formData.get("liveUrl") ?? "").trim();
  const githubUrl = String(formData.get("githubUrl") ?? "").trim();
  const status = String(formData.get("status") ?? "completed");
  const orderValue = String(formData.get("order") ?? "0").trim();
  const featured = formData.get("featured") === "on";

  if (!title) throw new Error("Project title is required.");
  if (!description) throw new Error("Project description is required.");

  if (status !== "completed" && status !== "ongoing") {
    throw new Error("Invalid project status.");
  }

  const order = Number(orderValue);

  if (!Number.isInteger(order) || order < 0) {
    throw new Error("Display order must be a non-negative integer.");
  }

  const technologies = technologiesValue
    .split(",")
    .map((technology) => technology.trim())
    .filter(Boolean);

  await connectToDatabase();

  const project = await Project.findByIdAndUpdate(
    projectId,
    {
      title,
      description,
      technologies,
      liveUrl: liveUrl || undefined,
      githubUrl: githubUrl || undefined,
      status,
      featured,
      order,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!project) {
    throw new Error("Project not found.");
  }

  revalidatePath("/admin/projects");
  revalidatePath(`/admin/projects/${projectId}/edit`);
  revalidatePath("/");
}
export async function deleteProject(projectId: string) {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  await connectToDatabase();

  const project = await Project.findByIdAndDelete(projectId);

  if (!project) {
    throw new Error("Project not found.");
  }

  revalidatePath("/admin/projects");
  revalidatePath("/");
}