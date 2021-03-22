import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList.container';
import Filter from './filter/Filter';
import Loader from 'react-loader-spinner';
import styles from './App.module.css';
import { handleInput } from '../redux/contacts/contacts-actions';
import contactsSelectors from '../redux/contacts/contacts-selectors';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  render() {
    return (
      <div className={styles.container}>
        <h2>Phonebook</h2>
        <ContactForm />

        {this.props.isLoadingContacts && (
          <Loader type="ThreeDots" color="green" height={80} width={80} />
        )}

        <div className={styles.contacts}>
          <h3 className={styles.contactsTitle}>Contacts</h3>
          <Filter />
          <ContactList handleInput={this.props.handleInput} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  handleInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
