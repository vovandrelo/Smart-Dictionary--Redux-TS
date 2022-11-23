import Container from "../components/container/container";
import Dictionary from "../components/dictionary/dictionary";
import { Outlet } from "react-router-dom";
import SearchDictionary from "../components/search-dictionary/search-dictionary";
import DictionaryContainer from "../containers/dictionary-container";

const DictionaryPage = () => {
    return (
        <Container>
            <SearchDictionary/>
            <DictionaryContainer/>
            <Outlet/>
        </Container>
    )
}

export default DictionaryPage;