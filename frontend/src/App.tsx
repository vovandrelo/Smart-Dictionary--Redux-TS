import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/container/container";
import DictionaryPage from "./pages/dictionary-page";
import MainPage from "./pages/main-page";
import AuthPage from "./pages/auth-page";
import Header from "./components/header/header";

const App = () => {
    return (
        <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/auth" element={<AuthPage/>} />
                    <Route path="/dictionary" element={<DictionaryPage/>} />
                </Routes>
        </BrowserRouter>
   )
}

export default App;