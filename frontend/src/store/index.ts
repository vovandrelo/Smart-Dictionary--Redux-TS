//<============================================ ИМПОРТ НЕОБХОДИМЫХ БИБЛИОТЕК ============================================>\\

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from './modules/auth';

//<=========================================== ФОРМИРОВАНИЕ НЕОБХОДИМЫХ ТИПОВ ===========================================>\\

export type AppDispatch = typeof store.dispatch;            // Тип dispatch-а
export type RootState = ReturnType<typeof store.getState>;  // Тип ГС
export type AppThunk<ReturnType = void> = ThunkAction<      // Тип Thunk-и
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

//<=========================================== СОЗДАНИЕ ГЛОБАЛЬНОГО СОСТОЯНИЯ ===========================================>\\
const rootReducer = {
    auth: authReducer,
}

//<================================================ КОНФИГУРАЦИЯ STOR-А =================================================>\\
export const store = configureStore({
    reducer: rootReducer,                                           // Подключение ГС
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),   // Подключение thun-ок
    devTools: true,                                                 // Подключение devtools-ов
});