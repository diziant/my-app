import React from 'react';
import './List.css';

const List = props => (
            <ol className="todo-list">
                { 
		 props.items.map((item, index) => <li className="todo-list__item" onClick={() => props.removeItem(index)} key={item}>{ item }</li>)
                }
            </ol>
        );

export default List;