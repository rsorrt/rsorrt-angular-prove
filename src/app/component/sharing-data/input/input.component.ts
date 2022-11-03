import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import MyUtilObject from '../../../commons/util-object';


import { User } from '../../../model/user.model';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  

  @Input() msgFromParent: string;
  @Input() userFromParent: User;


  @Output() msgFromChild : EventEmitter<string> = new EventEmitter<string>();
  
  userJson:string;
  userFromJson: User;

  constructor() { 

    this.userJson = '{ "username": "rob", "name": "h027702" }';

    this.userFromJson = MyUtilObject.deserializeFromJson<User>(this.userJson);
    
    console.log(this.userFromJson);
  }

  /*
  deserialize(input: any) {
    let user:User = new User();
    Object.assign(user, input);
    return user;
}  
*/

  ngOnInit() {
    this.msgFromChild.next("ciao sono msg from child");
  }

}