import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../shared/api/baseApi';
import cardReducer from '../widgets/CardList/api/cardSlice';
import modalReducer from '../shared/ui/Modal/api/ModalSlice';

const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    data: cardReducer,
    modal: modalReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMidleware) =>
        getDefaultMidleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
