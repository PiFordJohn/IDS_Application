import { supabase } from "./supabaseClient";

const getUserIP = async () => {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  };
  
  export const logFailedAttempt = async (email: string) => {
    const ip = await getUserIP();
  
    await supabase.from('failed_logins').insert([{ email, ip_address: ip }]);
  };
  