import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  register(e:Event){
    e.preventDefault()
    console.log("s")
    this.router.navigate(["../registerStatus"],{relativeTo:this.route})
  }


  // dialogue code
  display=''
  modal=document.getElementById('modal')
  openDiag(){
   this.display='block'
  }
  close(){
    this.display='none'
  }
  deleteEmp(){
  
    this.router.navigate(["../registerStatus"],{relativeTo:this.route})
  }
}
