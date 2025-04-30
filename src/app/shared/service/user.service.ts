import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { MatsnakbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersArr: Array<Iuser> = [
    { userName: 'John', userId: '123', userRole: 'candidate' },
    { userName: 'Emma', userId: '124', userRole: 'admin' },
    { userName: 'Liam', userId: '125', userRole: 'superadmin' },
    { userName: 'Olivia', userId: '126', userRole: 'candidate' },
    { userName: 'Noah', userId: '127', userRole: 'admin' },
    { userName: 'Ava', userId: '128', userRole: 'superadmin' },
    { userName: 'William', userId: '129', userRole: 'candidate' },
    { userName: 'Sophia', userId: '130', userRole: 'admin' },
    { userName: 'James', userId: '131', userRole: 'superadmin' },
    { userName: 'Isabella', userId: '132', userRole: 'candidate' },
  ];

  constructor(private _matsnackbar: MatsnakbarService) {}

  fetchAlldata() {
    return this.usersArr;
  }

  getsingleobjectfind(uid: string) {
    return this.usersArr.find((p) => p.userId === uid)!;
  }

  addNewprod(user: Iuser) {
    this.usersArr.push(user);
    this._matsnackbar.opensnackbar(`${user.userName} is added successfully!!!`);
  }

  addUpdateduser(user: Iuser) {
    let findindex = this.usersArr.findIndex((p) => p.userId == user.userId);
    this.usersArr[findindex] = user;

    this._matsnackbar.opensnackbar(
      `${user.userName} is updated successfully!!!`
    );
  }

  onremoveuser(user: Iuser) {
    let findindex = this.usersArr.findIndex((p) => p.userId == user.userId);
    this.usersArr.splice(findindex, 1);
    this._matsnackbar.opensnackbar(
      `${user.userName} is removed successfully!!!`
    );
  }
}
