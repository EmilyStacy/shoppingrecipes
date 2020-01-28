import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingrecipe';
  loadedfeature = 'recipe';
  

  // onNavigate(feature:string){

  //   this.loadedfeature = feature;

  // }

}
