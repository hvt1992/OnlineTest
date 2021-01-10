import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public email :string;
  public pwd:any; 
  constructor(private route: Router, public auth :AuthService) {
    this.email ='';
   }
 
  ngOnInit(): void {
  }
   submitUserNamePassword(username : string ,Password : any){
    if(username =='hvt9730@gmail.com' && (Password=='Swarit@2021' || Password =='Rishi@2021')) {
      this.route.navigateByUrl('/Exam');
      let user = Password=='Swarit@2021'? "Swarit Tundalwar" : "Rishikesh Chintawar"
      localStorage.setItem("username" ,user );
      this.auth.hide();
    }else {
      alert('Username or Password Incorrect');
    }
   }
}
