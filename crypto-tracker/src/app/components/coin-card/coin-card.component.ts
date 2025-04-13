import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Coin } from '../../models/coin.model';
import { CommonModule } from '@angular/common';
import { MatButton} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-coin-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButton],
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss']
})
export class CoinCardComponent {
  @Input() coin!: Coin; // A coin adat
  @Output() addToWatchlist = new EventEmitter<Coin>();

  onAddToWatchlist() {
    this.addToWatchlist.emit(this.coin);
  }
}
