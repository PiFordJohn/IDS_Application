import { logFailedAttempt } from './logService';
import { supabase } from './supabaseClient';

// Sign Up
export const signUpUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) throw new Error(error.message);
  return data;
};

// Login
export const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.log("Login failed");
    await logFailedAttempt(email);
    await checkSuspiciousActivity(email);
    throw new Error(error.message);
  }

  return data;
};
function checkSuspiciousActivity(email: string) {
    throw new Error('Function not implemented.');
}

