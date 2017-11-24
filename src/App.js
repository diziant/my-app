import React, { Component } from 'react';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div className="container">
	  <h1 className="todo-title" >Задачи</h1>
        <form className="todo-form" onSubmit={this.onSubmit}>
          <input className="todo-form__input" placeholder="Добавьте задачу" value={this.state.term} onChange={this.onChange} />
          <button className="todo-form__button">Запись</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

const List = props => (
  <ol className="todo-list">
    {
      props.items.map((item, index) => <li onClick={() => alert('Удаляйся')} className="todo-list__item" key={index}>{item}</li>)
    }
  </ol>
);
