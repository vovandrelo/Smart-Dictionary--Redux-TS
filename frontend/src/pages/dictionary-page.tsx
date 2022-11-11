import Container from "../components/container/container";
import InputPanel from "../components/input-panel/input-panel";
import Dictionary from "../components/dictionary/dictionary";
import SearchDictionaryContainer from "../containers/search-dictionary-container";
import { Outlet } from "react-router-dom";

const DictionaryPage = () => {
    return (
        <Container>
            <SearchDictionaryContainer/>
            <Dictionary/>
            <Outlet/>
        </Container>
    )
}

export default DictionaryPage;