import { Component } from '@angular/core';

@Component({

  selector: 'my-app',
  template: `
<nav class="navbar navbar-inverse">
    <style>
    .navbar{
    margin-bottom: 0px;
    border-radius: 0px;
    right: auto;
    }
    .container{
    margin-right: 10px;
    text-decoration-color: white;
    }
    </style>
    <div class="navbar-header">
      <a class="navbar-brand">{{name}}</a>
    </div>
    <div class="container">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
</nav>
   
<div class="alert alert-info alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Info! </strong>To reach in bets, you must be connected.
</div>
<router-outlet></router-outlet>
`,
})
export class AppComponent  { name = 'SaweSport'; }
