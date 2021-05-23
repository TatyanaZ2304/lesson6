import React from 'react';
import css from './NameForm.module.css';

class FormTask3 extends React.Component {
  constructor(props) {
    super(props);
    const name = props.name;
    const isValid = this.validate(name);
    this.state = {
      name: name,
      isValid: isValid
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  validate(name) {
    return name.length > 3;
  }


  handleChange(e) {
    const val = e.target.value;
    const valid = this.validate(val);
    this.setState({
      name: val,
      nameValid: valid
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.nameValid === true) {
      alert("Submit success!    Name:" + this.state.name);
    }
  }


  render() {
    const borderName = this.state.nameValid === true ? "black" : "red";

    return (
      <form className={css.container} onSubmit={this.handleSubmit}>
        <div className={css.div_container}>
          <label>Имя:</label>

          <input style={{ borderColor: borderName }} type="text" name="name" value={this.state.name} onChange={this.handleChange} />

          <button className={css.btn_container} type="submit">Submit</button>
        </div>
      </form>);
  }
}


export default FormTask3;



















