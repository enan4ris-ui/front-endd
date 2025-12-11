"use clinet";

import { createContext, useContext, useEffect } from "react";
import { useRouter } from "next/router";

const UserContext = createContext(null);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside <UserProvider>");
  }

  return context;
};

export default function UserProvider({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    setToken(token);

    setLoading(false);
  }, [router]);

  if (loading) return <div>...loading</div>;

  return (
    <UserContext.Provider value={{ token }}>{children}</UserContext.Provider>
  );
}
