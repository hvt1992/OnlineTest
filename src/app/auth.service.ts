import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


  
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  visible: boolean;
  private result :any =[];
  
  constructor() { this.visible = false; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

 
  public content = new BehaviorSubject<any>(this.result);
  public share = this.content.asObservable();
  getLatestValue(data :any) {    
    debugger;    
    this.content.next(data);    
  }    

}
