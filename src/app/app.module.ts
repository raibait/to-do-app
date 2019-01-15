import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
	MatCardModule,
	MatButtonModule,
	MatIconModule,
	MatTooltipModule,
	MatCheckboxModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatInputModule,
	MatToolbarModule
} from '@angular/material';


import { StoreModule } from '@ngrx/store';
import { toDoReducer } from './reducers/toDo.reducer';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { AddCardComponent } from './components/to-do-list/to-do-list-cards/add-card/add-card.component';
import { ToDoCardComponent } from './components/to-do-list/to-do-list-cards/to-do-card/to-do-card.component';

@NgModule({
	declarations: [
		AppComponent,
		ToDoListComponent,
		AddCardComponent,
		ToDoCardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatTooltipModule,
		MatCheckboxModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatInputModule,
		MatToolbarModule,
		DragDropModule,
		StoreModule.forRoot({
			toDoObject: toDoReducer
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
