import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  
  genders = ['Male','Female','Others'];
  cities = ['Bangalore','Chennai','Hyderabad'];
  states = ['Karnataka','TamilNadu','AndraPredesh'];
  countries = ['Inida','Sweden','Ukraine']
  constructor() { }

  ngOnInit(): void {
  }

}
