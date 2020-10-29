import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {

  @Output() notes = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  title: string;
  description: string
    constructor() { }

  ngOnInit() {}

  validate() {
    this.notes.emit({title :this.title, description :this.description});
    this.close.emit(true);
  }

}
