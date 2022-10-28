import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/container/container";
import MainPage from "./pages/main-page";
import AuthPage from "./pages/auth-page";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/auth" element={<AuthPage/>} />
                </Routes>
                <Footer/>
            </Container>
        </BrowserRouter>
   )
}

export default App;