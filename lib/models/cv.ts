import mongoose, { Schema } from "mongoose";

const CVSchema = new Schema(
  {
    fileName: {
      type: String,
      required: true,
      trim: true,
    },
    storagePath: {
      type: String,
      required: true,
      trim: true,
    },
    mimeType: {
      type: String,
      required: true,
      enum: [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/webp",
      ],
    },
    fileSize: {
      type: Number,
      required: true,
      min: 1,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const CV =
  mongoose.models.CV || mongoose.model("CV", CVSchema);