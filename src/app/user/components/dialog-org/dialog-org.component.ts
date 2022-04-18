
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dialog-org',
  templateUrl: './dialog-org.component.html',
  styleUrls: ['./dialog-org.component.css']
})
export class DialogOrgComponent implements OnInit {

@Output() oragizationData  = new EventEmitter()

  organization = new FormGroup({
    organizationName : new FormControl(''),
    joiningDate : new FormControl(''),
    relievingDate : new FormControl(''),
    relievingLetter : new FormControl(''),
    offerLetter : new FormControl(''),
    payslip : new FormControl(''),
    noticePeriodEndDate : new FormControl('')

  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.organization.value)
  }

  addOrganization(){
    
  }

}
