// Importa hooks e componentes do React e bibliotecas externas.
import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import QRCodeGenerator from "./components/QRCodeGenarator";
import IPAddressFinder from "./components/IPAddressFinder";
import MovieSearchEngine from "./components/MovieSearchEngine";
import TodoApp from "./components/TodoApp";
import QuizApp from "./components/QuizApp";
import LanguageTranslator from "./components/LanguageTranslator";
import Login from "./components/Login";
import Footer from "./components/Footer";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { decodeFakeJwt } from "./utils/fakeJwt";
import NavBar from "./components/Navbar";
import CarouselMultiApp from "./components/CarouselMultiApp";

// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Estiliza o conteúdo principal do aplicativo.
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

// Estiliza o botão de retorno.
const ReturnButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Define o componente principal do aplicativo.
const App = () => {
  // Cria estados para autenticação, visibilidade da barra de navegação, componente atual, e índice do carrossel.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate(); // Hook para navegação.

  // Efeito colateral que redireciona para a página de login se não estiver autenticado.
  /*useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);*/

   // Efeito colateral que redireciona para a página de login se não estiver autenticado.
   useEffect(() => {
    const token = localStorage.getItem('token');
    decodeFakeJwt(token);
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Função para simular login e redirecionar para o gerador de QR code.
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/qrcode-generator");
  };

  // Função para simular logout e redirecionar para a página de login.
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  // Função para definir o componente atual a ser exibido e atualizar o índice do carrossel.
  const handleAccess = (index, component) => {
    setCarouselIndex(index);
    setCurrentComponent(component);
  };

  // Função para retornar ao carrossel principal.
  const handleReturn = () => {
    setCurrentComponent(null);
  };

  // Função para renderizar o componente atual com base no estado.
  const renderComponent = () => {
    switch (currentComponent) {
      case "QRCodeGenerator":
        return <QRCodeGenerator />;
      case "IPAddressFinder":
        return <IPAddressFinder />;
      case "MovieSearchEngine":
        return <MovieSearchEngine />;
      case "TodoApp":
        return <TodoApp />;
      case "QuizApp":
        return <QuizApp />;
      case "LanguageTranslator":
        return <LanguageTranslator />;
      default:
        return null;
    }
  };

  // Renderiza o componente principal.
  return (
    <AppContainer>
      {!isAuthenticated ? (
        <MainContent>
          <Login onLogin={handleLogin} />
        </MainContent>
      ) : (
        <>
          <NavBar handleAccess={handleAccess} handleLogout={handleLogout}/>
          <MainContent>
            {currentComponent ? (
              <>
                {renderComponent()}
                <ReturnButton onClick={handleReturn}>
                  <FaArrowLeft /> Return
                </ReturnButton>
              </>
            ) : (
              <CarouselMultiApp carouselIndex={carouselIndex} handleAccess={handleAccess}/>
            )}
            <Footer>© 2024 Your Company | All rights reserved</Footer>
          </MainContent>
        </>
      )}
    </AppContainer>
  );
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
