import React, {Component} from 'react';
import TodoListTemplate from "./component/TodoListTemplate";
import Form from "./component/Form";
import TodoItemList from "./component/TodoItemList";

class App extends Component {
	id = 3;

	state = {
		input: '',
		todos: [
			{id: 0, text: 'React Study', checked: false},
			{id: 1, text: 'Java Study', checked: false},
			{id: 2, text: 'refactoring Study', checked: true}
		]
	}

	handleChange = (e) => {
		this.setState({
			input: e.target.value
		});
	}

	handleCreate = () => {
		const { input, todos } = this.state;
		this.setState({
			input: '',
			todos: todos.concat({
				id: this.id++,
				text: input,
				checked: false
			})
		});
	}

	handleKeyPress = (e) => {
		if(e.key == 'Enter') {
			this.handleCreate();
		}
	}

	// 체크 On/Off
	handleToggle = (id) => {
		const { todos } = this.state;

		// 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾기
		const index = todos.findIndex(todo => todo.id === id);
		const selected = todos[index]; // 선택한 객체

		const nextTodos = [...todos]; // 배열을 복사

		// 기존값 복사, checked 값 덮어쓰기
		nextTodos[index] = {
			...selected,
			checked: !selected.checked
		};

		this.setState({
			todos: nextTodos
		});
	}

	// 아이템 삭제
	handleRemove = (id) => {
		const { todos } = this.state;
		this.setState({
			// 자바스크립트 배열 내장함수 filter 사용, id를 갖고있지 않은 새로운 배열 생성
			todos: todos.filter(todo => todo.id !== id)
		});
	}

	render() {
		const { input, todos } = this.state;
		const {
			handleChange,
			handleCreate,
			handleKeyPress,
			handleToggle,
			handleRemove
		} = this;

		return (
			<TodoListTemplate form={(
				<Form value={input}
				      onKeyPress={handleKeyPress}
				      onChange={handleChange}
				      onCreate={handleCreate} />
			)}>
				<TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
			</TodoListTemplate>
		);
	}
}

export default App;
