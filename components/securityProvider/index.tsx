import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../service/firebase/config";
import { useRouter } from "next/router";

interface IProps {
  children: JSX.Element;
}

export const SecurityProvider = ({ children }: IProps) => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) return router.push("/");
      router.push("/login");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};
