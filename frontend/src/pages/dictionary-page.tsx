import Container from "../components/container/container";
import Dictionary from "../components/dictionary/dictionary";
import { Outlet } from "react-router-dom";
import DictionaryContainer from "../containers/dictionary/dictionary-container";
import SearchDictionaryContainer from "../containers/dictionary/search-dictionary-container";

const DictionaryPage = () => {
    return (
        <Container>
            <SearchDictionaryContainer/>
            <DictionaryContainer/>
            <Outlet/>
        </Container>
    )
}

export default DictionaryPage;