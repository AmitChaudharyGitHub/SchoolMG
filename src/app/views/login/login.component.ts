import { Component,OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { MyserviceService } from '../../myservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit { 
  model: any = {};
  constructor(private router:Router,private regService: MyserviceService) { }


  ngOnInit(): void {
  }
  onLogin(){        
    this.regService.Login(this.model).subscribe(data => {
      console.log(data);
      this.router.navigate(['dashboard']);

    });
  }
  Login() {
    

  }


}


