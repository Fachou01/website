import React, { useEffect } from "react";
import Logo from "../shared/Logo";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const Home = () => {
  const router = useRouter();
  const token = cookie.get("token");
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <Logo />
    </div>
  );
};

export default Home;
