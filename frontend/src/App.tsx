import { BrowserRouter, Routes, Route } from "react-router-dom";
import DictionaryPage from "./pages/dictionary-page";
import AuthPage from "./pages/auth-page";
import Header from "./components/header/header";
import ModalBg from "./components/modal-bg/modal-bg";
import ModalDictionaryContainer from "./containers/dictionary/modal-dictionary-container";
import LearnPage from "./pages/learn-page";

const App = () => {
    return (
        <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/learn" element={<LearnPage/>} />
                    <Route path="/dictionary" element={<DictionaryPage/>}>
                        <Route path="create" element={<ModalBg><ModalDictionaryContainer/></ModalBg>}/>
                        <Route path="edit/:id" element={<ModalBg><ModalDictionaryContainer/></ModalBg>}/>
                    </Route>
                    <Route path="/auth" element={<AuthPage/>} />
                </Routes>
        </BrowserRouter>
   )
}

export default App;