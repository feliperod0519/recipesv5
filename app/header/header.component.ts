import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() thingSelected= new EventEmitter<string>();

  onSelect(thing:string){
    this.thingSelected.emit(thing);
  }
}
