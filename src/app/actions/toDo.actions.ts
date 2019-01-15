import { Action } from '@ngrx/store';
import { IToDo } from '../models/i-toDo.interface';
import { IToDoObject } from '../models/i-toDoObject.interface';
import { Priority } from '../models/priority.enum';

export const UPDATE_TODO_OBJECT = '[TODO] Update_Todo_Object';
export const ADD_TODO = '[TODO] Add';
export const REMOVE_TODO = '[TODO] Remove';
export const TOGGLE_TODO = '[TODO] Toggle';

export class UpdateTodoObject implements Action {
	readonly type = UPDATE_TODO_OBJECT;

	constructor(public payload: IToDoObject) { }
}

export class AddToDo implements Action {
	readonly type = ADD_TODO;

	constructor(public payload: {
		toDo: IToDo,
		priority: Priority
	}) { }
}

export class RemoveToDo implements Action {
	readonly type = REMOVE_TODO;

	constructor(public payload: {
		toDo: IToDo,
		priority: Priority
	}) { }
}

export class ToggleToDo implements Action {
	readonly type = TOGGLE_TODO;

	constructor(public payload: {
		toDo: IToDo,
		priority: Priority
	}) { }
}


export type Actions = UpdateTodoObject | AddToDo | RemoveToDo | ToggleToDo;
