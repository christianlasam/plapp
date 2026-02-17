"use server";
import {createClient} from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";

export async function verify_create(prevState: any, form: FormData){
    const supabase = await createClient();
    const username = form.get("username") as string;
    const password = form.get("password") as string;
    const confirm_password = form.get("confirm_password") as string;
    if (password !== confirm_password) {
        return "Passwords do not match";
    }
    const {data, error} = await supabase.auth.signUp({
        email: username,
        password: password,
    });
    if (error) {
        return error.message;
    }
    redirect("/login");
};