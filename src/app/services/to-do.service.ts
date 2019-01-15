import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IToDoObject } from '../models/i-toDoObject.interface';
import { Priority } from '../models/priority.enum';

@Injectable({
	providedIn: 'root'
})
export class ToDoService {

	constructor() { }

	getTodos(): Observable<IToDoObject> {
		return of(
			{
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
			}
		);
	}
}
