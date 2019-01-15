import { IToDoObject } from '../models/i-toDoObject.interface';

import { Priority } from '../models/priority.enum';

import * as ToDoActions from '../actions/toDo.actions';

const initialState: IToDoObject = {
	[Priority.important]: [	],
	[Priority.regular]: [ ],
	[Priority.notImportant]: [ ]
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
		case ToDoActions.FETCH_TODOS_SUCCESS:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
}
