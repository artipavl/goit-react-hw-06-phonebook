import { createSlice} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  value: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFiltre(state, action) {
      state.value = action.payload;
    }
  },
});

const persistConfig = {
  key: 'filter',
  storage,
};

export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);

export const { changeFiltre } = filterSlice.actions;
