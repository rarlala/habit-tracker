import React, { PureComponent } from 'react'

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  
  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    this.props.onAdd(name);
    this.inputRef.current.value = "";
  }
  
  render() {
    return (
      <form 
        className="add-form"
        onSubmit={this.onSubmit}
      >
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="enter habit" 
        />
        <button
          className="add-button"
        >
          Add
        </button>
      </form>
    )
  }
}

export default HabitAddForm;