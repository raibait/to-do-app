import { ITodo } from '../models/i-toDo.interface';
import { Priority } from '../models/i-toDo.interface';

import * as ToDoActions from '../actions/toDo.actions';

const initialState: ITodo[] = [
	{
		id: 0,
		title: 'Do sth1',
		comment: 'Do something1 please , quick!',
		checked: true,
		priority: Priority.important
	},
	{
		id: 1,
		title: 'Do sth2',
		comment: 'Do something2 please , quick!',
		checked: false,
		priority: Priority.important
	},
	{
		id: 2,
		title: 'Do sth3',
		comment: 'Do something3 please , quick!',
		checked: true,
		priority: Priority.regular
	},
	{
		id: 3,
		title: 'Do sth4',
		comment: 'Do something4 please , quick!',
		checked: false,
		priority: Priority.regular
	},
	{
		id: 4,
		title: 'Do sth5',
		comment: 'Do something5 please , quick!',
		checked: true,
		priority: Priority.notImportant
	},
	{
		id: 5,
		title: 'Do sth6',
		comment: 'Do something6 please , quick!',
		checked: false,
		priority: Priority.notImportant
	}
];

export function toDoReducer(state: ITodo[] = initialState, action: ToDoActions.Actions) {

	switch (action.type) {
		case ToDoActions.ADD_TODO:
			return [
				...state,
				{
					...action.payload,
					id: state[state.length - 1].id + 1
				}
			];
		case ToDoActions.REMOVE_TODO:
			return state.filter((val) => val.id !== action.payload);
		case ToDoActions.TOGGLE_TODO:
			return state.map((val) => val.id === action.payload ? {...val , checked: ! val.checked} : val);
		case ToDoActions.MOVE_TO_IMPORTANT:
			return state.map((val) => val.id === action.payload.id ? {...val , priority: Priority.important} : val);
		case ToDoActions.MOVE_TO_REGULAR:
			return state.map((val) => val.id === action.payload.id ? {...val , priority: Priority.regular} : val);
		case ToDoActions.MOVE_TO_NOT_IMPORTANT:
			return state.map((val) => val.id === action.payload.id ? {...val , priority: Priority.notImportant} : val);
		default:
			return state;
	}
}
