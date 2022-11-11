import Container from "../components/container/container";
import InputPanel from "../components/input-panel/input-panel";
import Dictionary from "../components/dictionary/dictionary";
import SearchDictionaryContainer from "../containers/search-dictionary-container";

const DictionaryPage = () => {
    return (
        <Container>
            <SearchDictionaryContainer/>
            <Dictionary/>
        </Container>
    )
}

export default DictionaryPage;