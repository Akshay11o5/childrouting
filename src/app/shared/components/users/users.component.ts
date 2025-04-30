import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userArr!: Array<Iuser>;

  constructor(private _userservice: UserService) {}

  ngOnInit(): void {
    this.userArr = this._userservice.fetchAlldata();
  }
}
