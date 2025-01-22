import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  title = 'secondProyect';
  search: string = '';

  @Output() searchEvent = new EventEmitter<string>();


  emitSearch(event: Event) {
    this.search = (event.target as HTMLInputElement).value;
    this.searchEvent.emit(this.search);
  }

  
}
