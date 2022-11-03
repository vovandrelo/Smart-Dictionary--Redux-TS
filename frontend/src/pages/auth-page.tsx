import AuthContainer from "../containers/auth-container";
import Container from "../components/container/container";
import style from "./style-pages.module.sass";

const AuthPage = () => {
    return (
        <Container>
            <AuthContainer/>
        </Container>
    )
}

export default AuthPage;