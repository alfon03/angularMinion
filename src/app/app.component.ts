import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MinionCardComponent } from './minions/minions.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, MinionCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'myFirstAngularApp';
  search: string = '';

  updateSearch(search: string) {
    this.search = search;
  }

}