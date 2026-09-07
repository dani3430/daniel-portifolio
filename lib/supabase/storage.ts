import { createClient } from "./server";

const CV_BUCKET = "cv";

export async function getCVStorage() {
  const supabase = await createClient();

  return {
    supabase,
    bucket: CV_BUCKET,
  };
}