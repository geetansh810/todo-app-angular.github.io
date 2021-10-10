import {
  Component,
  Input,
  OnInit,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css'],
})
export class PersonCardComponent implements OnInit, OnChanges {
  @Input() data;
  @Input() userNew;

  tempObj: any = {};

  constructor(
    private userService: UserService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked this.data");
  //   console.log(this.data);
  //   console.log("PersonCardComponent2 this.data");
  // }

  ngOnChanges(): void {
    this.tempObj = this.data;
    console.log('PersonCardComponent this.data');
    console.log(this.data);
    this.ref.detectChanges();
  }
}
