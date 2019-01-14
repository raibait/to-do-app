import { Action } from '@ngrx/store';
import { ITodo } from '../models/i-toDo.interface';

export const ADD_TODO = '[TODO] Add';
export const REMOVE_TODO = '[TODO] Remove';
export const TOGGLE_TODO = '[TODO] Toggle';
export const MOVE_TO_IMPORTANT = '[TODO] Move_To_Important';
export const MOVE_TO_REGULAR = '[TODO] Move_To_Regular';
export const MOVE_TO_NOT_IMPORTANT = '[TODO] Move_To_Not_Important';

export class AddToDo implements Action {
	readonly type = ADD_TODO;

	constructor(public payload: ITodo) { }
}

export class RemoveToDo implements Action {
	readonly type = REMOVE_TODO;

	constructor(public payload: number) { }
}

export class ToggleToDo implements Action {
	readonly type = TOGGLE_TODO;

	constructor(public payload: number) { }
}

export class MoveToImportant implements Action {
	readonly type = MOVE_TO_IMPORTANT;

	constructor(public payload: ITodo) { }
}

export class MoveToRegular implements Action {
	readonly type = MOVE_TO_REGULAR;

	constructor(public payload: ITodo) { }
}

export class MoveToNotImportant implements Action {
	readonly type = MOVE_TO_NOT_IMPORTANT;

	constructor(public payload: ITodo) { }
}

export type Actions = AddToDo | RemoveToDo | ToggleToDo | MoveToImportant| MoveToRegular | MoveToNotImportant;
