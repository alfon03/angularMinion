import { Component, Input, OnInit } from '@angular/core';
import { MinionService } from '../services/minion.service';
import { Minion } from '../interfaces/minion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-minions-info',
  imports: [RouterLink],
  templateUrl: './minions-info.component.html'
})


export class MinionsInfoComponent implements OnInit {
  constructor(private MinionService: MinionService){};
  
  minions !: Minion[];
  minion !: Minion|undefined;
  
  @Input('id') id?: string;


  ngOnInit(): void {
    console.log(this.id)
    this.MinionService.getMinions().subscribe({next: minions => {
      this.minions = minions;
      this.minion = this.minions.find(minion => minion.id == this.id);

    },
    error: error => console.log("Se ha producido un error", error)
  });
    
  }
}
