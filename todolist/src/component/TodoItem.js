import React, {Component} from "react";
import './TodoItem.css'

class TodoItem extends Component {
	// TodoItem 컴포넌트 최적화 : checked 값이 바뀔때만 리랜더링
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return this.props.checked !== nextProps.checked;
	}

	render() {
		const {text, checked, id, onToggle, onRemove} = this.props;

		return (
			<div className="todo-item" onClick={() => onToggle(id)}>
				<div className="remove" onClick={(e) => {
					e.stopPropagation(); // onToggle 실행 방지
					onRemove(id);
				}}>&times;</div>
				<div className={`todo-text ${checked ? 'checked' : ''}`}>
					<div>{text}</div>
				</div>
				{
					checked && (<div className="check-mark">&#x2713;</div>)
				}
			</div>
		);
	}
}

export default TodoItem;