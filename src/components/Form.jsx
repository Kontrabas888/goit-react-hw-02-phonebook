import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button } from 'components/Button';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class Form extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit({
      id: nanoid(),
      name,
      number,
    });

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit} autoComplete="off">
        <div className="mb-10 grid gap-5">
          <label className="label">
            <span className="label-text">Name</span>
            <input
              type="text"
              className="input"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className="label">
            <span className="label-text">Number</span>
            <input
              type="tel"
              className="input"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>

        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}
