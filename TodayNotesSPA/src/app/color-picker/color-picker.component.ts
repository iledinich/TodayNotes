import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  @Output() changeColorEmmiter = new EventEmitter();
  @Input() noteColor: string;
  colors = environment.colors;
  selectedColor: string;

  constructor() { }

  ngOnInit() {
    this.selectedColor = this.noteColor != null ? this.noteColor : this.colors[0];
  }

  changeColor(color: string) {
    this.selectedColor = color;
    this.changeColorEmmiter.emit(color);
  }
}
