import React from 'react';
import styles from './NameForm.module.scss';

class FormTask2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("firstName: " + this.state.firstName + "lastName: " + this.state.lastName + "comment: " + this.state.comment);
  }

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input className={styles.inp_name1} type="text" name="firstName" onChange={this.handleChange} placeholder="firstName" />
          </div>

          <div>
            <input className={styles.inp_name2} type="text" name="lastName" onChange={this.handleChange} placeholder="lastName" />
          </div>

          <div >
            <textarea className={styles.t_name} name="comment" onChange={this.handleChange} placeholder="firstName" placeholder="comment" />
          </div>

          <button className={styles.submitBtn}>Submit </button>
        </form>
      </div>);
  }
}



export default FormTask2;