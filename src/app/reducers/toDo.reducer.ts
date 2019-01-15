import { IToDo } from '../models/i-toDo.interface';
import { IToDoObject } from '../models/i-toDoObject.interface';

import { Priority } from '../models/priority.enum';

import * as ToDoActions from '../actions/toDo.actions';

const initialState: IToDoObject = {
	[Priority.important]: [
		{
			title: 'Walk a dog',
			comment: 'Fluffy needs a walk.',
			checked: true
		},
		{
			title: 'Do the dishes',
			comment: 'Remember to clean the dishes',
			checked: false
		}
	],
	[Priority.regular]: [
		{
			title: 'Do the laundry',
			comment: 'Fresh clothes needed',
			checked: true
		},
		{
			title: 'Call mom',
			comment: 'She is always worrying',
			checked: false
		}
	],
	[Priority.notImportant]: [
		{
			title: 'Check an email',
			comment: 'Still awaiting for that important mail',
			checked: false,
		},
		{
			title: 'Pay the bills',
			comment: 'Or they will cut the electricity off!!',
			checked: false
		}
	]
};

export function toDoReducer(state: IToDoObject = initialState, action: ToDoActions.Actions) {

	switch (action.type) {
		case ToDoActions.UPDATE_TODO_OBJECT:
			return {
				...state,
				...action.payload
			};
		case ToDoActions.ADD_TODO:
			return {
				...state,
				[action.payload.priority]: [...state[action.payload.priority], action.payload.toDo]
			};
		case ToDoActions.REMOVE_TODO:
			return {
				...state,
				[action.payload.priority]: [...state[action.payload.priority]].filter((val) => val !== action.payload.toDo)
			};
		case ToDoActions.TOGGLE_TODO:
			return {
				...state,
				[action.payload.priority]: state[action.payload.priority].map((val) =>
					val === action.payload.toDo ? { ...val, checked: !val.checked } : val
				)
			};
		default:
			return state;
	}
}
