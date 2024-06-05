import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducers/UserReducer';
import sessionStorage from 'redux-persist/es/storage/session';
import persistReducer from 'redux-persist/es/persistReducer';
import LoadingReducer from './reducers/LoadingReducer';

const reducers = combineReducers({
    user: UserReducer,
    loading: LoadingReducer
});

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export default store;