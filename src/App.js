import React, { Component } from 'react';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    this.removeItem = this.removeItem.bind(this);
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

  removeItem = index => {
        
        const { items } = this.state;
        const newItems = items.filter((item, i) => i !== index);
        this.setState({ items: newItems});

    }
 

  render() {
    return (
      <div className="container">
	  <h1 className="todo-title" >Задачи</h1>
        <form className="todo-form" onSubmit={this.onSubmit}>
          <input className="todo-form__input" placeholder="Добавьте задачу" value={this.state.term} onChange={this.onChange} />
          <button className="todo-form__button">Запись</button>
        </form>
        <TodoList items={this.state.items} removeItem={this.removeItem}/>
      </div>
    );
  }
}


class TodoList extends Component {
    render() {
        return(
            <ol className="todo-list">
                { this.props.items.map((item, index) => {
                    return <li className="todo-list__item" onClick={() => this.props.removeItem(index)} key={item}>{ item }</li>
                })}
            </ol>
        );
    }
}
