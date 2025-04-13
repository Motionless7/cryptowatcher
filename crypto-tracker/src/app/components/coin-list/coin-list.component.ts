import { Component } from '@angular/core';
import { Coin } from '../../models/coin.model';
import { CoinCardComponent } from '../coin-card/coin-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coin-list',
  standalone: true,
  imports: [CommonModule, CoinCardComponent],
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent {
  coins: Coin[] = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', priceUsd: 50000, logoUrl: 'bitcoin-logo.png' },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', priceUsd: 3000, logoUrl: 'ethereum-logo.png' }
    // További coinok...
  ];

  watchlist: Coin[] = [];

  onAddToWatchlist(coin: Coin) {
    this.watchlist.push(coin);
  }
}
