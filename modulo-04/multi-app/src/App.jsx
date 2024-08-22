// Importa hooks e componentes do React e bibliotecas externas.
import { useEffect } from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { decodeFakeJwt } from "./utils/fakeJwt";
import Main from "./components/Main";
import Login from "./components/Login";

// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
  justify-content: center;
`;

// Define o componente principal do aplicativo.
const App = () => {
  const navigate = useNavigate(); // Hook para navegação.

  useEffect(() => {
    const token = localStorage.getItem("token"); // pega o token do localStorage

    if(!token){ // Verifica se não existe token
      navigate("/");
    }else{
      const decoded_token = decodeFakeJwt(token); // Decodifica o token
      const isExpired = decoded_token.exp < (Date.now() / 1000); // Valida se o token ainda não expirou
      if(isExpired){
        navigate("/")
      }
    }
  }, [navigate]);

  // Renderiza o componente principal.
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/main" element={localStorage.getItem("token") ? <Main/> : <Login />} />
      </Routes>
    </AppContainer>
  );
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
