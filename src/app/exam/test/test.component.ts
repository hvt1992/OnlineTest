import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public auth : AuthService, private route : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("username")) {
      this.auth.hide();
    }else {
      this.route.navigateByUrl('/signIn');
      localStorage.removeItem("username")
    }
  }

  attempTest() {
    this.route.navigateByUrl('/home');
  }
}
