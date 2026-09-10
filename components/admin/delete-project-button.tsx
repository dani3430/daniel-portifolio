"use client";

import { useState } from "react";

type DeleteProjectButtonProps = {
  projectTitle: string;
  deleteAction: () => Promise<void>;
};

export function DeleteProjectButton({
  projectTitle,
  deleteAction,
}: DeleteProjectButtonProps) {
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      `Delete "${projectTitle}"? This action cannot be undone.`,
    );

    if (!confirmed) {
      return;
    }

    setDeleting(true);

    try {
      await deleteAction();
    } finally {
      setDeleting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="rounded-lg border border-red-500/30 px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50 dark:text-red-400"
    >
      {deleting ? "Deleting..." : "Delete"}
    </button>
  );
}