import Container from "../components/container/container";
import Dictionary from "../components/dictionary/dictionary";
import { Outlet } from "react-router-dom";
import SearchDictionary from "../components/search-dictionary/search-dictionary";

const DictionaryPage = () => {
    return (
        <Container>
            <SearchDictionary/>
            <Dictionary/>
            <Outlet/>
        </Container>
    )
}

export default DictionaryPage;