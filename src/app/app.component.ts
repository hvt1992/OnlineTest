import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'onlineTest';
  public isLogin: boolean;
  public user  :any;
  constructor(private route :Router , public auth : AuthService) {
    this.isLogin = false;
  }
  ngOnInit(): void {
    
    setInterval(()=>{ 
      this.isLogin = this.auth.visible; 
      this.user  = localStorage.getItem("username");
    }, 1000);
    if(!this.user) {
      this.auth.show();
    }
    
  }
  logOut() {
    localStorage.removeItem('username');
    this.route.navigateByUrl("/signIn");
    this.auth.show();
  }

  
}
