import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myData: Object[];
  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
        .subscribe(
            res => {
                this.myData = _.take(res, 10);
                console.log(this.myData);
            }
        );
  }
}
