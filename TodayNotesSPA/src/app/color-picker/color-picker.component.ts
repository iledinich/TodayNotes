import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  @Output() changeColorEmmiter = new EventEmitter();
  @Input() noteColor: string;
  colors: string[] = ['dodgerblue', 'violet', 'salmon', 'navajowhite', 'white'];
  selectedColor: string;
  constructor() { }

  ngOnInit() {
    this.selectedColor = this.noteColor != null ? this.noteColor : 'white';
  }

  changeColor(color: string) {
    this.selectedColor = color;
    this.changeColorEmmiter.emit(color);
  }
}
