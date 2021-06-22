import { Router } from '@angular/router';
import { CommonServiceService } from './../common-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  forms: FormGroup;
  isLoginError: boolean = false;
  selected:any;
  accessKey:any;

  constructor(private http: HttpClient,private service: CommonServiceService,private router:Router ) { }

  ngOnInit(): void {

  }


  submit() {
    console.log(this.accessKey);
    if(this.accessKey!=null)
    {

     // if(String(this.forms.controls.email.value).includes("admin"))
      //{
        this.service.userAuthentication(this.accessKey,this.selected).subscribe((data: any)=> {
          localStorage.setItem('userToken',this.accessKey);
          this.service.loggedIn.next(true);
          this.router.navigate(['/'])
        },
        (error: HttpErrorResponse)=>{
          this.isLoginError=true;
          alert("Access Key Denied");
        });
     // }
/*     else{
      this.service.userAuthentication(this.forms.getRawValue(),this.selected).subscribe((data: any)=> {
        localStorage.setItem('userToken',data.access_token);
        this.service.loggedIn.next(true);
        this.router.navigate(['/'])
      },
      (error: HttpErrorResponse)=>{
        this.isLoginError=true;
      });
    } */
    }
  }
}
