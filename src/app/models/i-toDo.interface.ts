export enum Priority {'regular' , 'important' , 'notImportant' }

export interface ITodo {
	id?: number;
	title: string;
	comment: string;
	checked: boolean;
	priority: Priority;
}
