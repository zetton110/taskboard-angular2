import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from '../services';

@Component({
    selector: 'app-bar',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <header class="app-bar row middle-xs">
      <span [routerLink]="['']" class="logo col-xs-10">
        BOARD
      </span>
      <nav class="col-xs-2">
        <div class="row middle-xs between-xs">
          <span [routerLink]="['','about']" class="link">About</span>
          <span (click)="signout()" class="link">signout</span>
        </div>
      </nav>
    </header>
    `,
    styles:[`
    .app-bar {
      height: 65px;
      padding: 5px 30px;
      background-color: #00BCD4;
    }
    .logo {
      color: white;
      font-size: 30px;
      font-weight: 300;
      cursor: pointer;
    }
    .link {
      color: white;
      font-size: 24px;
      font-weight: 400;
      cursor: pointer; 
    }
    `]
})
export class AppBar {
  constructor(private authService:AuthService){}

  signout(){
    this.authService.sineout();
  }
}