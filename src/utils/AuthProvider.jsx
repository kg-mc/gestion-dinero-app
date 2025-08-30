import { useEffect, useState } from "react";
import supabase from "./supabase";
import { AuthContext } from "./useAuth";





export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.subscription.unsubscribe();
  }, []);
  const SignIn = ({email, password}) =>
    supabase.auth.signInWithPassword({ email, password });
  const SignUp = ({email, password, options}) => supabase.auth.signUp({ email, password, options });
  const SignOut = () => supabase.auth.signOut();
  /* 
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
 */
  return (
    <AuthContext.Provider value={{ user, loading, SignIn, SignUp, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
}
