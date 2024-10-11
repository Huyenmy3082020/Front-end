// src/redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slides/userSlide'; // Đảm bảo đường dẫn đúng
import orderReducer from './slides/OrderSlide'; // Đảm bảo đường dẫn đúng
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Cấu hình persist
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

// Kết hợp các reducers
const rootReducer = combineReducers({
    user: userReducer,
    order: orderReducer,
});

// Tạo persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Tạo persistor
export const persistor = persistStore(store);
