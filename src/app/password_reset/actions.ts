"use server";
import { createClient } from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";

export async function reset(prevState: any, form: FormData) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.resetPasswordForEmail(form.get("email") as string);
    if (error) {
        return error.message;
    }
    redirect("/login");
}