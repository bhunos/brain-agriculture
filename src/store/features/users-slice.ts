import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { mockUsers } from '@/mocks';
import { UserState } from '@/types';

const initialState: UserState[] = mockUsers;

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<UserState>) => {
      const ids = state
        .map(user => user.id)
        .filter(id => typeof id === 'number') as number[];

      const maxId = Math.max(...ids, 0);
      const newUser: UserState = {
        id: maxId + 1,
        ...action.payload
      };

      return [...state, newUser];
    },
    updateUser: (state, action: PayloadAction<UserState>) => {
      const { id, ...updatedUser } = action.payload;
      return state.map(user =>
        user.id === id ? { ...user, ...updatedUser } : user
      );
    },
    deleteUser: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      return state.filter(user => user.id !== id);
    }
  }
});

export const { reducer: userReducer, actions } = usersSlice;
