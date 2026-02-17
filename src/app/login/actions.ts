"use server";
import { createClient } from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";

export async function verify_login(prevState: any, form: FormData) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: form.get("username") as string,
    password: form.get("password") as string,
  }); 
  if (error) {
    return error.message;
  }
  redirect("/dashboard");
}
