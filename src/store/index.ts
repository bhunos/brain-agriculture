import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/store/features/users-slice';

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
