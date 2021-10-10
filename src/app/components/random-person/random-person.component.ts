import { Component, OnInit,  OnChanges,
  ChangeDetectorRef,
 } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-random-person',
  templateUrl: './random-person.component.html',
  styleUrls: ['./random-person.component.css'],
})
export class RandomPersonComponent implements OnInit, OnChanges {
  user: any;
  constructor(private userService: UserService, private ref : ChangeDetectorRef) {}

  newUser(){
    return this.userService.getUser().subscribe(
      (data) => {
        console.log('hello');
        console.log(data);
        this.user = data.results[0];
        console.log("this.user");
        console.log(this.user);
        console.log(this.user.name.first);
    this.ref.detectChanges();

      },
      (err) => {
        console.log('OOPS!!!! ERROR : ' + err.status);
      }
    );
  }

  ngOnInit() {
    this.newUser();
  }

  ngOnChanges(){

  }



}
