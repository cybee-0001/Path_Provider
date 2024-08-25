import { useEffect } from "react";
import Container from "../../components/auth-section/Container";
import "./style.css";
import useAuth from "../../hooks/userAuth.hook";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const authCheck = setInterval(() => {
      if (auth?.accessToken) {
        alert("You are already logged in");
        navigate("/");
      }
    }, 2000);

    return () => {
      clearInterval(authCheck);
    };
  }, [auth?.accessToken, navigate]);
  return (
    <main>
      <Container />
    </main>
  );
};

export default Page;
