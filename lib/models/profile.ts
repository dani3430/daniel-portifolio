import mongoose, { Schema } from "mongoose";

const ProfileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      required: true,
      trim: true,
    },
    education: {
      type: String,
      trim: true,
    },
    profileImage: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Profile =
  mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);