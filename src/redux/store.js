import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import contactsSlice from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: '',
  },
});


export const persisStore = persistStore(store);