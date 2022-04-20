import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

const ELEMENT_DATA = [
  { name: 'xyz', phoneno: '9845639021',doj:'2020-02-02',status:'' },
  { name: 'abc', phoneno: '9845639021',doj:'2020-02-02',status:'' }
 ];
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = ['name', 'phoneno', 'doj','status','action'];
  dataSource = ELEMENT_DATA;
  display=''
  
  
  // to open dialogue box
  openDiag()
  {
    this.display='block'
  }
  //to close dialogue box
  close()
  {
    this.display='none'
  }
  
  //on yes route to desired page
  deleteEmp()
  {
    this.router.navigate(["../registerStatus"],{relativeTo:this.route})
  }
  
  //on view 
  openDetails(id:any){
    console.log(id)
    this.router.navigate(["../viewEmployee"],{relativeTo:this.route})
  }
  editPage(){
    this.router.navigate(["../editEmployee"],{relativeTo:this.route})
  }
}
