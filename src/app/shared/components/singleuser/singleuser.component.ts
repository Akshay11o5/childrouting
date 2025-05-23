import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RemoverComponent } from '../remover/remover.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.scss'],
})
export class SingleuserComponent implements OnInit {
  userArr!: Array<Iuser>;
  uid!: string;
  userObj!: Iuser;

  constructor(
    private _userservice: UserService,
    private _activatedroute: ActivatedRoute,
    private _route: Router,
    private _matdilog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getsingleuser();
  }

  getsingleuser() {
    this._activatedroute.params.subscribe((res) => {
      this.uid = res['userId'];

      // console.log(this.uid);

      this.userObj = this._userservice.getsingleobjectfind(this.uid);

      // console.log(this.userObj);
    });
  }

  removeuser() {
    let matref = new MatDialogConfig();
    matref.data = `are you sure you want to remove ${this.userObj.userName} this user`;

    let res = this._matdilog.open(RemoverComponent, matref);

    res.afterClosed().subscribe((res) => {
      if (res) {
        this._userservice.onremoveuser(this.userObj);
        this._route.navigate(['users']);
      }
    });
  }
}
