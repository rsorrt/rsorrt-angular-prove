import { Component, NgModule} from '@angular/core';
import { User } from '../../model/user.model';


@Component({
  selector: 'app-sharing-data',
  templateUrl: './sharing-data.component.html',
  styleUrls: ['./sharing-data.component.css']
})


export class SharingDataComponent  {

  msgFromChild:string;

  userFromParent: User = {username: 'rob', name: 'h027702'};
  

  onMsgFromChild(message : string) {
    this.msgFromChild = message;
  }
    
}


