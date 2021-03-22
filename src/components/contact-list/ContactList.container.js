import { connect } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import ContactList from './ContactList';
import { handleInput } from '../../redux/contacts/contacts-actions';

const getFilteredContacts = state => {
  const { filter, items } = state.contacts;

  if (state.contacts.items >= 2) {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  } else {
    return state.contacts.items;
  }
  // const { contacts } = this.state;
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return {
    contacts: getFilteredContacts(state),
  };
};

const mapDispatchToProps = {
  fetchContacts,
  handleInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
