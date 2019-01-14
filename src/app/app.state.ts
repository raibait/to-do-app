import { ITodo } from './models/i-toDo.interface';

export interface AppState {
	readonly todoList: ITodo[];
}
