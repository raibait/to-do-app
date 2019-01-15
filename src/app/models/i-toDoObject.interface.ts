import { IToDo } from './i-toDo.interface';
import { Priority } from './priority.enum';

export interface IToDoObject {
	[Priority.notImportant]: IToDo[];
	[Priority.regular]: IToDo[];
	[Priority.important]:  IToDo[];
}
