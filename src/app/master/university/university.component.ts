import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MyserviceService } from '../../myservice.service';

export class University {
  universityName: any;
  univerityShortName: any;
  address: any;
  isActive: any;
  id: any;
  constructor() { }
}
//import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  model: any = {};
  DataList: any;
  univer: any;
  p: number = 1;
  collection: any[];
  edit = false;
  SearchText = '';
  constructor(private router: Router, private Myser: MyserviceService, private toastr: ToastrService) {
    this.univer = new University();
    //this.SearchText='';
  }

  Edit(id) {
    this.Myser.GetUniversityById(id).subscribe(data => {
      console.log(data);

      this.edit = true;
      this.univer = data
      // this.DataList=data;

    });
  }

  add() {
    this.Myser.AddUniverSity(this.univer).subscribe(data => {
      $('#exampleModal').modal('hide');
      this.toastr.success('Save Data Successfully..!',);
      this.get();
      this.univer = new University();

    }, errr => {
      this.toastr.error('Some error..!', errr);
    });
  }

  update(id) {
    id = this.univer.id
    this.Myser.UpdateUniversity(id, this.univer).subscribe(data => {
      this.get();
      this.univer = new University();
      $('#exampleModal').modal('hide');
      this.toastr.success('Update Data Successfully..!',);
    }, errr => {
      this.toastr.error('Some error..!', errr);
    });
  }
  get() {
    //console.log(val);

    this.Myser.GetUniversitywithu().subscribe(data => {
      console.log(data);
      this.DataList = data;
    });
  }
  modelChangeFn(value) {
    if (value == '') {
      this.get();
    }
    else {
      console.log(value);       
      this.Myser.GetUniversity('?SearchText=' + value).subscribe(data => {
        console.log(data);
        this.DataList = data;
      });
    }    
  }

  Delete(id) {    
    if (confirm("Are you sure to delete " + id)) {
      this.Myser.DeleteUniversity(id).subscribe(data => {
        this.get();
      });
    }
  }

  ngOnInit(): void {
    //this.toastr.success('Hello world!', 'Toastr fun!');

    this.get();
    //this.SearchText();
  }




}
