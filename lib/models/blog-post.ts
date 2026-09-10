import mongoose, { Schema } from "mongoose";

const BlogPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    excerpt: {
      type: String,
      trim: true,
    },
    content: {
      type: Schema.Types.Mixed,
      required: true,
    },
    coverImage: {
      type: String,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export const BlogPost =
  mongoose.models.BlogPost ||
  mongoose.model("BlogPost", BlogPostSchema);