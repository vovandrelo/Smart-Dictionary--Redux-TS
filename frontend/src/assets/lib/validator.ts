interface ValidatorType {
    emailIsCorrect: (email: string) => boolean;
    loginIsCorrect: (login: string) => boolean;
    passIsCorrect: (pass: string) => boolean;
    passMatching: (passMain: string, passSec: string) => boolean;
}

class Validator implements ValidatorType {
    // Проверка на корректность email:
    emailIsCorrect = (email: string) => {
        // Ошибка при валидации возникнет, если email не будет удовлетворять заданному шаблону:
        // "@<хотя бы одна любая буква или число>.<хотя бы одна любая буква или число>"
        const reg = /@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
        const isErrorCheck = !reg.test(email);

        // Если email по какой-то причине не был передан
        // Или длина email меньше 7 символов
        // Или возникла ошибка валидации, то:
        if (!email || email.length < 7 || isErrorCheck) {
            // Возвращаем информацию о том, что email не корректный:
            return false;
        // Если ошибок при проверке email выявлено не было, то:
        } else {
            // Возвращаем информацию о том, что email корректный:
            return true;
        }
    }
    // Проверка на корректность логина пользователя:
    loginIsCorrect = (login: string) => {
        // Ошибка при валидации возникнет в случае, если выполнится хотя бы одно условие:
        // Условие №1 - Первым символом будет любой символ кроме буквы: (^[^a-zA-Z]);
        // Условие №2 - Будут использоваться символы кроме буквы, чисел и "-": ([^a-zA-Z0-9-];
        // Условие №3 - Будет использован символ "--": (--)
        // Условие №4 - Последним символом будет любом символ кроме буквы: ([^a-zA-Z]$)
        const reg = /(^[^a-zA-Z])|([^a-zA-Z0-9-])|(--)|([^a-zA-Z]$)/;
        const isErrorCheck = reg.test(login);

        // Если логин по какой-то причине не был передан
        // Или длина логина меньше 5 символов
        // Или возникла ошибка валидации, то:
        if (!login || login.length < 5 || isErrorCheck) {
            // Возвращаем информацию о том, что login не корректный:
            return false;
        // Если ошибок при проверке логина выявлено не было, то:
        } else {
            // Возвращаем информацию о том, что login корректный:
            return true;
        }
    }
    // Проверка на корректность пароля:
    passIsCorrect = (pass: string) => {
        // Ошибка при валидации возникнет в случае, если будут использованы запрещённые символы.
        // Доступными являются символы: любая буква, любое число, символ "-".
        const reg = /[^a-zA-Z0-9-]/;
        const isErrorCheck = reg.test(pass);

        // Если пароль по какой-то причине не был передан
        // Или длина пароля меньше 8 символов
        // Или возникла ошибка валидации, то:
        if (!pass || pass.length < 8 || isErrorCheck) {
            // Возвращаем информацию о том, что пароль не корректный:
            return false;
        // Если ошибок при проверке пароля выявлено не было, то:
        } else {
            // Возвращаем информацию о том, что пароль корректный:
            return true;
        }
    }
    // Проверка на соответствие паролей:
    passMatching = (passMain: string, passSec: string) => passMain === passSec ? true : false; 
}

export default new Validator();