import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coin } from '../models/coin.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() {}

  getCoins(): Observable<Coin[]> {
    const coins: Coin[] = [
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        priceUsd: 64120.25,
        logoUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
      },
      {
        id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        priceUsd: 3120.55,
        logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
      },
      {
        id: 'dogecoin',
        name: 'Dogecoin',
        symbol: 'DOGE',
        priceUsd: 0.125,
        logoUrl: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png'
      }
    ];
    return of(coins);
  }
}
