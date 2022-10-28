
import style from "./style-footer.module.sass";


const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.company}><span>W</span>- Production</div>
            <div className={style.contacts}>tg: vovandrelo</div>
        </footer>
    )
}

export default Footer;