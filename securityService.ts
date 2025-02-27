export const checkSuspiciousActivity = async (email: string) => {
    const { data, error } = await supabase
      .from('failed_logins')
      .select('*')
      .eq('email', email)
      .gte('attempt_time', new Date(Date.now() - 10 * 60 * 1000).toISOString());
  
    if (error) {
      console.error('Error checking activity:', error);
      return;
    }
  
    if (data.length >= 5) {
      alert("⚠️ Warning: Suspicious login attempts detected!");
      await sendSecurityAlert(email);
    }
  };
  