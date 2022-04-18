import { Component, OnInit } from '@angular/core';
import { DialogOrgComponent } from '../dialog-org/dialog-org.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css'],
})
export class EmploymentDetailsComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) {}

  next() {
    this.router.navigateByUrl('/user/details/other-details');
  }
  back() {
    this.router.navigateByUrl('/user/details/educational-qualification');
  }

  ngOnInit(): void {}

  openDialog() {
    const dialogStyle = {
      height: '90%',
      width: '30%',
    };

    this.dialog.open(DialogOrgComponent, dialogStyle);
  }

 
}
