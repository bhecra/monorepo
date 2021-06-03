import { Component } from '@angular/core';
import { greet, sum } from "@trucos/utils";
import { Author } from "@trucos/models";

@Component({
  selector: 'trucos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-app';

  greeting = greet('Christian');
  author: Author[] = [];
}
