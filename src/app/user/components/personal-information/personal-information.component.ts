import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  genders = ['Male', 'Female', 'Others'];
  cities = ['Bangalore', 'Chennai', 'Hyderabad'];
  states = ['Karnataka', 'TamilNadu', 'AndraPredesh'];
  countries = ['Inida', 'Sweden', 'Ukraine'];


  personalInformation = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    dob : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    alternatePhone : new FormControl(''),
    gender : new FormControl(''),
    photo : new FormControl(''),
    houseNo : new FormControl(''),
    street : new FormControl(''),
    locality : new FormControl(''),
    city: new FormControl(''),
    state : new FormControl(''),
    country : new FormControl(''),
    pincode : new FormControl(''),
    houseNo2 : new FormControl(''),
    street2 : new FormControl(''),
    locality2 : new FormControl(''),
    city2: new FormControl(''),
    state2 : new FormControl(''),
    country2 : new FormControl(''),
    pincode2 : new FormControl(''),
  })

  constructor(private router: Router) {}

  next(){
    this.router.navigateByUrl('/user/details/educational-qualification');
  }


  onSubmit(){
   console.log(this.personalInformation.value)
  }

  ngOnInit(): void {}

 
}
