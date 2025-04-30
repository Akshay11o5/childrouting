import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from '../../models/iuser';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UuidService } from '../../service/uuid.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})
export class UserformComponent implements OnInit {
  Isineditmode: boolean = false;

  Isdiabled: boolean = false;

  userform!: FormGroup;

  userid!: string;
  usereobj!: Iuser;

  constructor(
    private _userservice: UserService,
    private _route: Router,
    private _activaterouter: ActivatedRoute,
    private _uuid: UuidService
  ) {}

  ngOnInit(): void {
    this.createform();
    this._activaterouter.params.subscribe((res) => {
      this.userid = res['userId'];
      if (this.userid) {
        this.Isineditmode = true;
        this.usereobj = this._userservice.getsingleobjectfind(this.userid);
        this.userform.patchValue(this.usereobj);

        this._activaterouter.queryParams.subscribe((res) => {
          if (res['userRole'] == 'candidate') {
            this.userform.disable();
            this.Isdiabled = true;
          }
        });
      }
    });
  }

  createform() {
    this.userform = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userRole: new FormControl('', [Validators.required]),
    });
  }

  onsubmit() {
    if (this.userform.valid) {
      if (!this.Isineditmode) {
        let addnewobj = {
          ...this.userform.value,
          userId: this._uuid.generateUuid(),
        };

        this._userservice.addNewprod(addnewobj);
      } else {
        {
          let updatedObj = {
            ...this.userform.value,
            userId: this.userid,
          };

          console.log(this.Isineditmode);

          this._userservice.addUpdateduser(updatedObj);
        }
      }
    }

    this._route.navigate(['users']);
  }
}
