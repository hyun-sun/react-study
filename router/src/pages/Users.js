import React, {Fragment, Component} from "react"
import { Route } from "react-router-dom"
import UserList from "./Users/UserList"
import UserDetail from "./Users/UserDetail"

class Users extends Component {
	render() {
		let {match} = this.props;
		return (
			<Fragment>
				<h1>Users</h1>
				{/* exact : /users 경로를 정확하게 지정
			    exact 가 없을 경우, /users 로 시작하는 모든 경로가 매칭되어,
			    유저 상세 페이지가 표시될 때, 유저 목록 페이지도 항상 같이 표시되게 됨 */}
				{/* /users/:id 경로에서 :id 부분은 URL 파라미터를 정의할 때 사용하는 React Router 의 문법
			    경로에 이와 같이 URL 파라미터가 포함된 경우, 패턴 매칭이 되어 /users/1, /users/a 등이 모두 매칭이 되며,
			    해당 파라미터는 변수화되어 맵핑된 컴포넌트에서 match.params.id와 같이 읽어올 수 있음. */}
				<Route exact path={match.path} component={UserList}/>
				<Route path={`${match.path}/:id`} component={UserDetail}/>
			</Fragment>
		)
	}
}

export default Users;