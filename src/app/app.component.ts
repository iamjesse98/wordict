import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lookup = '';
  tags = [];
  lists = [];
  boo:boolean = false
  find(w) {
  	this.lookup = w
  	//console.log(this.lookup)
  	fetch('http://api.urbandictionary.com/v0/define?term=' + w).then( r => r.json()).then(r => {
  		this.boo = true
  		this.tags = r['tags']
  		this.lists = r['list']
  	})
  }
}
