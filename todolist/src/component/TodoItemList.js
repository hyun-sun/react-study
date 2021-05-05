import React, { Component } from "react";
import TodoItem from './TodoItem'

class TodoItemList extends Component {
	// TodoItemList 컴포넌트 최적화 : todos 값이 바뀔때만 리렌더링
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return this.props.todos !== nextProps.todos;
	}

	render() {
		const { todos, onToggle, onRemove } = this.props;

		const todoList = todos.map(
			({id, text, checked}) => (
				<TodoItem id={id}
				          text={text}
				          checked={checked}
				          onToggle={onToggle}
				          onRemove={onRemove}
				          key={id}
				/>
			)
		);
		return (
			<div>
				{todoList}
			</div>
		);
	}
}

export default TodoItemList;