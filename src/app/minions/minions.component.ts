import { Component, EventEmitter, Input, OnInit, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionService } from '../services/minion.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-minion-card',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './minions.component.html'
})

export class MinionCardComponent implements OnInit {
  minions!: Minion[];
  displayMinions!: Minion[];
  
  // Search term that will be bound to the input field
  @Input() search: string = '';

  constructor(private minionService: MinionService) { }

  ngOnInit(): void {
    // Fetch minions from the service when the component is initialized
    this.minionService.getMinions()
      .subscribe({
        next: minions => {
          this.minions = minions;
          this.displayMinions = minions;  // Initially display all minions
        },
        error: error => console.log("Se ha producido un error", error)
      });
  }

  // Detect changes in the search term and update the display list
  onInputChange(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.search = searchTerm;
    this.filterMinions();
  }

  // Filter the minions based on the search term
  filterMinions(): void {
    if (this.search.trim() === '') {
      this.displayMinions = this.minions;  // Show all minions if no search term
    } else {
      this.displayMinions = this.minions.filter(minion => 
        minion.name.toLowerCase().includes(this.search) || 
        minion.bio.toLowerCase().includes(this.search)
      );
    }
  }
}
