"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";

type Post = {
  id: number;
  author: string;
  role: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
};

const initialPosts: Post[] = [
  {
    id: 1,
    author: "Daniel Temesgen",
    role: "Full-Stack Software Developer",
    date: "Today",
    title: "Building my journey from self-taught developer to professional developer",
    content:
      "One year ago, I started learning software development on my own. Today, I am continuing that journey through practical training, projects, and real-world development experience.",
    tags: ["Software Development", "Learning", "Career"],
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    author: "Daniel Temesgen",
    role: "Full-Stack Software Developer",
    date: "Recently",
    title: "Technology is a tool for solving real problems",
    content:
      "I believe good software is not simply about using the newest technology. It is about understanding the problem, choosing the right tools, and creating something useful for real people.",
    tags: ["Technology", "Product", "Problem Solving"],
    likes: 8,
    comments: 2,
  },
];

export function Blog() {
  const [posts, setPosts] = useState(initialPosts);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [commentInputs, setCommentInputs] = useState<Record<number, string>>(
    {},
  );
  const [visibleComments, setVisibleComments] = useState<number[]>([]);

  function toggleLike(postId: number) {
    const alreadyLiked = likedPosts.includes(postId);

    setLikedPosts((current) =>
      alreadyLiked
        ? current.filter((id) => id !== postId)
        : [...current, postId],
    );

    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: alreadyLiked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  }

  function toggleComments(postId: number) {
    setVisibleComments((current) =>
      current.includes(postId)
        ? current.filter((id) => id !== postId)
        : [...current, postId],
    );
  }

  function handleComment(postId: number) {
    const comment = commentInputs[postId]?.trim();

    if (!comment) return;

    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments + 1,
            }
          : post,
      ),
    );

    setCommentInputs((current) => ({
      ...current,
      [postId]: "",
    }));
  }

  return (
    <Section id="blog" className="border-t border-border/60">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
            Blog & Insights
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
            Ideas, lessons &{" "}
            <span className="text-primary">things I&apos;m building.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8">
            A personal feed where I share what I&apos;m learning, building,
            discovering, and thinking about technology.
          </p>
        </div>

        {/* Feed */}
        <div className="space-y-8">
          {posts.map((post) => {
            const isLiked = likedPosts.includes(post.id);
            const showComments = visibleComments.includes(post.id);

            return (
              <article
                key={post.id}
                className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Post header */}
                <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                  <div className="flex min-w-0 items-center gap-3">
                    {/* Profile placeholder */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-sm font-bold text-primary">
                      D
                    </div>

                    <div className="min-w-0">
                      <p className="truncate font-semibold text-foreground">
                        {post.author}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-foreground/45 sm:text-sm">
                        <span>{post.role}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label="Post options"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-foreground/40 transition-colors hover:bg-surface-muted hover:text-foreground"
                  >
                    •••
                  </button>
                </div>

                {/* Image placeholder */}
                <div className="relative flex aspect-[16/8] items-center justify-center overflow-hidden bg-surface-muted">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.16),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.10),transparent_35%)]"
                  />

                  <div className="relative text-center">
                    <div className="text-5xl font-bold tracking-tight text-foreground/10 sm:text-7xl">
                      {String(post.id).padStart(2, "0")}
                    </div>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/25 sm:text-xs">
                      Post Image
                    </p>
                  </div>
                </div>

                {/* Post content */}
                <div className="p-5 sm:p-7">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-foreground/65 sm:text-lg sm:leading-8">
                    {post.content}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                      >
                        #{tag.replaceAll(" ", "")}
                      </span>
                    ))}
                  </div>

                  {/* Engagement summary */}
                  <div className="mt-7 flex items-center justify-between border-b border-border pb-4 text-sm text-foreground/45">
                    <span>
                      {post.likes} {post.likes === 1 ? "like" : "likes"}
                    </span>

                    <button
                      type="button"
                      onClick={() => toggleComments(post.id)}
                      className="transition-colors hover:text-primary"
                    >
                      {post.comments}{" "}
                      {post.comments === 1 ? "comment" : "comments"}
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-3">
                    <button
                      type="button"
                      onClick={() => toggleLike(post.id)}
                      className={`flex min-h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors ${
                        isLiked
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/60 hover:bg-surface-muted hover:text-primary"
                      }`}
                    >
                      <span className="text-lg">
                        {isLiked ? "♥" : "♡"}
                      </span>
                      {isLiked ? "Liked" : "Like"}
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleComments(post.id)}
                      className="flex min-h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold text-foreground/60 transition-colors hover:bg-surface-muted hover:text-primary"
                    >
                      <span className="text-lg">◯</span>
                      Comment
                    </button>
                  </div>

                  {/* Comments */}
                  {showComments && (
                    <div className="mt-5 border-t border-border pt-5">
                      <div className="flex gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          Y
                        </div>

                        <div className="flex min-w-0 flex-1 gap-2">
                          <input
                            type="text"
                            value={commentInputs[post.id] ?? ""}
                            onChange={(event) =>
                              setCommentInputs((current) => ({
                                ...current,
                                [post.id]: event.target.value,
                              }))
                            }
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                handleComment(post.id);
                              }
                            }}
                            placeholder="Write a comment..."
                            className="min-w-0 flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />

                          <button
                            type="button"
                            onClick={() => handleComment(post.id)}
                            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary-hover"
                          >
                            Post
                          </button>
                        </div>
                      </div>

                      <div className="mt-5 rounded-xl bg-surface-muted p-4 text-sm text-foreground/50">
                        Comments will become fully persistent when we connect
                        the blog to the database and admin dashboard.
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Coming soon */}
        <div className="mt-10 rounded-[1.5rem] border border-dashed border-primary/30 bg-primary/5 p-6 text-center sm:p-8">
          <p className="text-sm font-semibold text-primary">
            More posts coming soon
          </p>

          <p className="mt-2 text-sm leading-6 text-foreground/55">
            I&apos;ll be sharing development lessons, project breakdowns,
            agritech ideas, SaaS experiments, and things I discover along the
            way.
          </p>
        </div>
      </div>
    </Section>
  );
}