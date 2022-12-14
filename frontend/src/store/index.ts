//<============================================ ИМПОРТ НЕОБХОДИМЫХ БИБЛИОТЕК ============================================>\\

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { loginReducer } from './modules/login';
import { registrReducer } from './modules/registr';
import { dictionaryReducer } from './modules/dictionary';
import { AnyAction } from 'redux';
import { learnReducer } from './modules/learn';


//<=========================================== ФОРМИРОВАНИЕ НЕОБХОДИМЫХ ТИПОВ ===========================================>\\

export type AppDispatch = typeof store.dispatch;            // Тип dispatch-а
export type RootState = ReturnType<typeof store.getState>;  // Тип ГС
export type AppThunk<ReturnType = void> = ThunkAction<      // Тип Thunk-и
    ReturnType,
    RootState,
    unknown,
    Action<string>
    // AnyAction, - Такой тип в доке по чистому Redux
>;

//<=========================================== СОЗДАНИЕ ГЛОБАЛЬНОГО СОСТОЯНИЯ ===========================================>\\
const rootReducer = {
    login: loginReducer,
    registr: registrReducer,
    dictionary: dictionaryReducer,
    learn: learnReducer,
}

//<================================================ КОНФИГУРАЦИЯ STOR-А =================================================>\\
export const store = configureStore({
    reducer: rootReducer,                                           // Подключение ГС
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),   // Подключение thun-ок
    devTools: true,                                                 // Подключение devtools-ов
});