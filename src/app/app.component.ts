import { Component } from '@angular/core';
import { Beer } from './models/beer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name: string = 'Beer';

  beers: Beer[]=[
    new Beer('IceHouse', 'Miller', 4.62, 1.2),
    new Beer('Sea Witch', 'Sea Pine', 5.3, 2.9),
    new Beer('Fremont IPA', 'Fremont', 7.1, 2.7)
  ]
  lowKegs: Beer[] = [];
  selectedBeer = null;

  pourPint(clickedBeer){
    if (0 >= clickedBeer.keg) {
      alert("THIS KEG IS TAPPED")
    } else if (clickedBeer < 10) {
      clickedBeer.keg --;
      // lowKegs.push(clickedBeer);
    } else {
      clickedBeer.keg --;
    }
  }
  updatePour(pourAmt){
    if (pourAmt.keg <= 10){
      console.log("your keg is low on beer");
      return "bg-warning";
    }
  }

  editBeer(clickedBeer){
    this.selectedBeer = clickedBeer;

  }
  endUpdate() {
    this.selectedBeer = null;
  }

}
