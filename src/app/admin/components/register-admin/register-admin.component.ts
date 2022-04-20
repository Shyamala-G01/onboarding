import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  // user:any
  // admin={
  //   name:'',
  // }
  
  constructor(private router:Router,private route:ActivatedRoute) { }
  regForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phoneNumber:new FormControl(''),
    designation:new FormControl(''),

  })
  ngOnInit(): void {
    localStorage.clear();
  }
  register(e:Event){
    e.preventDefault()
    // localStorage.setItem("FormGroup",JSON.stringify(this.regForm.value))
    // this.user = localStorage.getItem('FormGroup');
    // this.admin=JSON.parse(this.user)
    // this.router.navigate(["../registerStatus"],{relativeTo:this.route})
  }
  
}