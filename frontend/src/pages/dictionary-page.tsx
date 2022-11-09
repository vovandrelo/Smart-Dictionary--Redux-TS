import Container from "../components/container/container";
import InputPanel from "../components/input-panel/input-panel";
import Dictionary from "../components/dictionary/dictionary";


const DictionaryPage = () => {
    return (
        <Container>
            <InputPanel placeholder="Поиск слов..."/>
            <Dictionary/>
        </Container>
    )
}

export default DictionaryPage;