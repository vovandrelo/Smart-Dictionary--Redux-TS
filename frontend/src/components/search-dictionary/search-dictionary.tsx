import InputPanel from "../input-panel/input-panel";
import Plus from "../icons/plus/plus";
import style from "./style-search-dictionary.module.sass";
import { useNavigate } from "react-router-dom";

interface PropsType {
    addNewWord: () =>  void,
}

const SearchDictionary = (props: PropsType) => {
    const { addNewWord } = props;
    const navigate = useNavigate();
    return (
        <div className={style.root}>
            <InputPanel
                placeholder="Поиск слов..."
                externalStyles={style.search}/>
            <Plus
                externalStyles={style.icon}
                clickHandler={addNewWord}/>
        </div>
    )
}

export default SearchDictionary;