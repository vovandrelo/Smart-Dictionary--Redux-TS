import { BrowserRouter, Routes, Route } from "react-router-dom";
import DictionaryPage from "./pages/dictionary-page";
import AuthPage from "./pages/auth-page";
import Header from "./components/header/header";
import ModalBg from "./components/modal-bg/modal-bg";
import AddWordContainer from "./containers/dictionary/dictionary-modal-containers/add-word-conrainer";
import EditWordContainer from "./containers/dictionary/dictionary-modal-containers/edit-word-container";
import LearnPage from "./pages/learn-page";

const App = () => {
    return (
        <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/learn" element={<LearnPage/>} />
                    <Route path="/dictionary" element={<DictionaryPage/>}>
                        <Route path="create" element={<ModalBg><AddWordContainer/></ModalBg>}/>
                        <Route path="edit/:id" element={<ModalBg>{/* <EditWordContainer/> */}</ModalBg>}/>
                    </Route>
                    <Route path="/auth" element={<AuthPage/>} />
                </Routes>
        </BrowserRouter>
   )
}

export default App;