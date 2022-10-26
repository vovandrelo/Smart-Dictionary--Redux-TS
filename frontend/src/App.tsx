import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/test-comp";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Test/>}/>
                <Route path="/auth" element={<h1>Registartion WWW</h1>}/>
            </Routes>
        </BrowserRouter>
   )
}

export default App;