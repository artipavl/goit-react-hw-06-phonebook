import { useMemo, useState } from 'react';

import { Section } from 'components/Section/Section';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { ContactList } from 'components/Contacts/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';

export function App() {
  const [filter, setfilter] = useState('');


  const contacts = useSelector(state => state.contacts.value);

  // const contactsFil = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filter.toLowerCase())
  // );

  const contactsFil = useMemo(() => contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
  , [contacts, filter]);

  return (
    <div>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter change={setfilter} value={filter} />
        <ContactList contacts={contactsFil} />
      </Section>
    </div>
  );
}

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
