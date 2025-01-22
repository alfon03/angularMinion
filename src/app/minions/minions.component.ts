import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { FormsModule } from '@angular/forms';
import { MinionService } from '../services/minion.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-minion-card',
  imports: [FormsModule, RouterLink],
  templateUrl: './minions.component.html'
})

export class MinionCardComponent implements OnChanges, OnInit {
  constructor(private minionService: MinionService) { };

  minions !: Minion[];
  displayMinions!: Minion[];
  @Input() search: string = '';

  ngOnInit(): void {
    this.minionService.getMinions()
      .subscribe({
        next: minions => {
          this.minions = minions;
          this.displayMinions = minions
        }, 
        error: error => console.log("Se ha producido un error", error)
      });
    this.displayMinions = this.minions;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.filter();
  }

  onInputChange(event: Event): void {
    this.search = (event.target as HTMLInputElement).value.toLowerCase();
  }

  // filter() {
  //   this.displayMinions = this.minionService.filterMinions(this.search);
  // }
}
