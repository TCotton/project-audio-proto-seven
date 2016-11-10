import {
	FETCH_USERS
} from '../actions/types';

export default function(state = false, action = null) {

	switch (action.type) {

		case FETCH_USERS:
			return [...state, ...action.payload];
			break;

		default:
			return state;
			break;

	}


}