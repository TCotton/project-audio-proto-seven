import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {

	componentWillMount() {
		this.props.fetchUsers();
	}

	renderUser(user) {
		return (

			<div className="card card-block" key={user.name}>
				<h4 className="card-title">{user.name} Here</h4>
				<p className="card-text">{user.company.name}</p>
				<p><a className="btn btn-primary" href={`http://` + user.website}>Website</a></p>
			</div>

		)
	}

	renderUsers() {
		return this.props.users.map(this.renderUser);
	}

	render() {
		return (
			<div className="user-list">
				{this.renderUsers()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {users: state.users}
}

export default connect(mapStateToProps, actions)(UserList);