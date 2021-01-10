import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public result: any = []
  public companies: any = [];
  public score: any = [];
  constructor(public auth: AuthService, private route: Router) { }


  ngOnInit(): void {
    if (localStorage.getItem("username")) {
      this.auth.hide();
    } else {
      this.route.navigateByUrl('/signIn');
      localStorage.removeItem("username")
    }

    this.auth.share.subscribe(res =>
      this.score = res.filter((x: { Ans: boolean; }) => x.Ans == true)
    );

    console.log(this.score)
  }


}
