import { createClient } from "@supabase/supabase-js";

// The anon key is a public, client-shipped key by design — access is
// controlled by Row Level Security policies in the database.
const SUPABASE_URL = "https://vzcbrvxwuzmoiulupvjq.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6Y2Jydnh3dXptb2l1bHVwdmpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1MzM5MzAsImV4cCI6MjEwMjEwOTkzMH0.v8v1a-UYEOV19nmYW_q38JLmJR4Q5W6koqwbgp7pM64";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export type Job = {
  id: string;
  slug: string;
  title: string;
  type: string;
  location: string;
  tags: string[];
  summary: string;
  details: string;
  active: boolean;
  created_at: string;
};

export type Application = {
  id: string;
  job_id: string | null;
  job_title: string;
  name: string;
  email: string;
  phone: string;
  portfolio: string;
  message: string;
  created_at: string;
};
