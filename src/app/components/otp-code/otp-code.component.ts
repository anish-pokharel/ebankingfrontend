import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-code',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './otp-code.component.html',
  styleUrl: './otp-code.component.css'
})
export class OtpCodeComponent implements OnInit{
otpCode:string=''

constructor(private router:Router){}


verifyButton(){
  if(this.otpCode=='9840'){
    this.router.navigate(['dashboard'])
  }
  else{
    alert("please pass the right otp")

  }
}
ngOnInit(): void {
  
}

}
