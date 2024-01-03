import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService]  // Provide the service here

})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private loginService :LoginService,
    private router:Router
    ) { }
  userForm!: FormGroup ;
  userValue:{}={}
userValueApi:any[]=[]

  httpClient = inject(HttpClient)
 
  ngOnInit(): void {
    this.createUser();
    this.apiMethod()
  }
  createUser() {
    this.userForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
    })
    console.log(this.userForm);
  }
  loginButton() {
    console.log("button is clicked");
    
    console.log(this.userForm);

    if (this.userForm.valid) {
      const formData= this.userForm.value;
      console.log(formData);

      const user =this.userValueApi.find((userVal)=>
        userVal.phoneNumber===formData.phoneNumber && userVal.password===formData.password
      )
      if(user){
        this.router.navigate(['verify'])
      }
      else{}

    }
    else {
      console.log("object");
    }
  }
  apiMethod(){
    this.loginService.getuserDataApi().subscribe((result)=>{
      console.log(result);
      this.userValueApi=result
    

    })
  }
}
































// this.httpClient.get('http://localhost:3000/getUserData').subscribe((data)=>{
// console.log(data);
//     })