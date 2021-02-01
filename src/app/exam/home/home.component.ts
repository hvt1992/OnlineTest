
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AuthService } from 'src/app/auth.service';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public result :any =[]
  public companies: any = [];
  public showWebcam = true;
  public count = 14;
  public sec= 59;
  public onCam = false;
  constructor(public auth : AuthService, private route : Router) { }
  

  ngOnInit(): void {
    if(localStorage.getItem("username")) {
      this.auth.hide();
    }else {
      this.route.navigateByUrl('/signIn');
      localStorage.removeItem("username")
    }

    this.companies= [
      { 
        "ques" : "Motion of the pendulum is",
        "Ans":[
          {"ANS" : "Linear" ,"result" : false},
          {"ANS" : "Oscillatory" ,"result" : true},
          {"ANS" : "Rotational" ,"result" : false},
          {"ANS" : "Circular" ,"result" : false}
        ]
       },
       { 
        "ques" : "The SI unit of length is",
        "Ans":[
          {"ANS" : "kelvin" ,"result" : false},
          {"ANS" : "ohm" ,"result" : false},
          {"ANS" : "metre" ,"result" : true},
          {"ANS" : "centimetre" ,"result" : false}
        ]
       },
       { 
        "ques" : "What is the correct ascending order ?",
        "Ans":[
          {"ANS" : "1cm, 1dm, 1m, 1dam" ,"result" : true},
          {"ANS" : "1cm, 1dam, 1m, 1dm" ,"result" : false},
          {"ANS" : "1cm, 1dam, 1dm, 1m" ,"result" : false},
          {"ANS" : "1m, 1dm, 1cm,1dam" ,"result" : false}
        ]
       },
       { 
        "ques" : "Motion of the stone dropped under gravity",
        "Ans":[
          {"ANS" : "Circular" ,"result" : false},
          {"ANS" : "Linear" ,"result" : true},
          {"ANS" : "Rotational" ,"result" : false},
          {"ANS" : "Vibrational" ,"result" : false}
        ]
       },
       { 
        "ques" : "Motion of the point on blade of a moving fan",
        "Ans":[
          {"ANS" : "None of these" ,"result" : false},
          {"ANS" : "Oscillatory" ,"result" : false},
          {"ANS" : "Circular" ,"result" : true},
          {"ANS" : "Vibrational" ,"result" : false}
        ]
       },
       { 
        "ques" : "1 dm is equal to",
        "Ans":[
          {"ANS" : "1/100 m" ,"result" : false},
          {"ANS" : "100 m" ,"result" : false},
          {"ANS" : "1/10 m" ,"result" : true},
          {"ANS" : "none of these" ,"result" : false}
        ]
       },
       { 
        "ques" : "Speedometer measures",
        "Ans":[
          {"ANS" : "instantaneous velocity" ,"result" : false},
          {"ANS" : "instantaneous speed" ,"result" : true},
          {"ANS" : "average speed" ,"result" : false},
          {"ANS" : "speed" ,"result" : false}
        ]
       },
       { 
        "ques" : "Motion which repeats itself after a regular interval of time",
        "Ans":[
          {"ANS" : "Vibrational" ,"result" : false},
          {"ANS" : "Rotational" ,"result" : false},
          {"ANS" : "Non Periodic" ,"result" : false},
          {"ANS" : "Periodic" ,"result" : true}
        ]
       },
       { 
        "ques" : "The area of rectangle is given as the product of length",
        "Ans":[
          {"ANS" : "volume" ,"result" : false},
          {"ANS" : "side" ,"result" : false},
          {"ANS" : "none of these" ,"result" : false},
          {"ANS" : "breadth" ,"result" : true}
        ]
       },
       { 
        "ques" : "The S.I. unit of length is",
        "Ans":[
          {"ANS" : "Km" ,"result" : false},
          {"ANS" : "cm" ,"result" : false},
          {"ANS" : "Meter" ,"result" : false},
          {"ANS" : "mm" ,"result" : true}
        ]
       },
       { 
        "ques" : "Some kind of change in the position of an object is called",
        "Ans":[
          {"ANS" : "Motion" ,"result" : false},
          {"ANS" : "Gravity" ,"result" : false},
          {"ANS" : "Movement" ,"result" : false},
          {"ANS" : "Storm" ,"result" : true}
        ]
       },
       { 
        "ques" : "The system of units now used is known as",
        "Ans":[
          {"ANS" : "American system of units" ,"result" : false},
          {"ANS" : "International system of units." ,"result" : true},
          {"ANS" : "Indian system of units" ,"result" : false},
          {"ANS" : "Russian system of units" ,"result" : false}
        ]
       },
       { 
        "ques" : "In 1790, the French created a standard unit measurement called",
        "Ans":[
          {"ANS" : "the metric system" ,"result" : true},
          {"ANS" : "the cubic system" ,"result" : false },
          {"ANS" : "the electrified system" ,"result" : false},
          {"ANS" : "the unit system" ,"result" : false}
        ]
       }
       ,
       { 
        "ques" : "The reading of the scale at one end is 3..0 cm and at the other end is 33.1 cm the",
        "Ans":[
          {"ANS" : "3 mm" ,"result" : false},
          {"ANS" : "40.69cm" ,"result" : false },
          {"ANS" : "0.0cm" ,"result" : false},
          {"ANS" : "30.1cm" ,"result" : true}
        ]
       }
       ,
       { 
        "ques" : "In periodic motion, the objects repeat itself after",
        "Ans":[
          {"ANS" : "Very small period of time" ,"result" : false},
          {"ANS" : "Infinite period of time" ,"result" : false },
          {"ANS" : "Same period of time" ,"result" : true},
          {"ANS" : "A large period of time" ,"result" : false}
        ]
       }
  
  ];

    
    var timer = setInterval(()=> {
      this.sec --;
      if (this.sec === 0) {
        stopInterval()
      }
    }, 1000);

    var stopInterval =  () => {
     this.count--;
     this.sec = 59;
      if( this.count == 0) {
        this.submit();
        clearInterval(timer);
      }
    }
  }


  handleChange(que : string ,ans:boolean) {
    if(this.result.length>0) {
      this.result.forEach((res: { Question: string; Ans: boolean; }) => {
        if(res.Question == que ) {
          res.Ans = ans;
        }else {
          let obj =  {
            "Question":que,
            "Ans" : ans
          }
          this.result.push(obj);
        }
      });
    }else {
    let obj =  {
        "Question":que,
        "Ans" : ans
      }
      this.result.push(obj);
    }
    this.auth.getLatestValue(this.getUniqueListBy(this.result ,"Question"));
  }

  submit(){
    let uniQueArray = this.getUniqueListBy(this.result ,"Question");
    let noFQuestionAttemp =  uniQueArray.length - 15;
    alert('Are You sure you want to submit the test')
    this.route.navigateByUrl('/Result')
    // if(noFQuestionAttemp == 0) {
    //   this.route.navigateByUrl('/Result');
    // }else {
    //   noFQuestionAttemp = Math.abs(noFQuestionAttemp)
    //   alert(`Please Attempted Remaining ${noFQuestionAttemp} Questions `)
    // }
  }
  getUniqueListBy(arr : any, key : string) {
    return [...new Map(arr.map((item: { [x: string]: any; }) => [item[key], item])).values()]
}


}
