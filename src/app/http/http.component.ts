import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response) => {
        console.log('response', response);
      },
      () => {
        console.log('error', error);
      },
      () => {
        console.log('complete');
      }
    );
  }

}
