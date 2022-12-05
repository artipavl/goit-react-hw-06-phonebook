import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';


const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getContacts(state) {
      return state;
    },
    addContacts(state, action) {},
    removeContacts(state, action) {
      
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedContactsSlice = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { getContacts, addContacts, removeContacts } = contactsSlice.actions;
export default persistedContactsSlice;
