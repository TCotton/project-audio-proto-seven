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
				<p className="card-text">Cheese Factory</p>
				<p><a className="btn btn-primary">Email</a></p>
			</div>

		)
	}

	renderUsers() {
		return this.props.users.map(this.renderUser);
	}

	render() {
		return (
			<div>
				{this.renderUsers()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {users: state.users}
}

export default connect(mapStateToProps, actions)(UserList);