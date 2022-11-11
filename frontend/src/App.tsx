import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/container/container";
import DictionaryPage from "./pages/dictionary-page";
import MainPage from "./pages/main-page";
import AuthPage from "./pages/auth-page";
import Header from "./components/header/header";
import ModalBg from "./components/modal-bg/modal-bg";
import ModalDictionary from "./components/modal-dictionary/modal-dictionary";

const App = () => {
    return (
        <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/auth" element={<AuthPage/>} />
                    <Route path="/dictionary" element={<DictionaryPage/>}>
                        <Route path="create" element={<ModalBg><ModalDictionary/></ModalBg>}/>
                        {/* <Route path="edit/:id" element={<ModalBg><EditPostContainer/></ModalBg>}/> */}
                    </Route>
                </Routes>
        </BrowserRouter>
   )
}

export default App;