import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
settingData!: FormGroup ;
constructor(
  private fb:FormBuilder
){}

  ngOnInit(): void {
    this.settingDataVal();
    
  }
  settingDataVal(){

    this.settingData=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      phoneNumber:['',Validators.required],
      streetAddress:['',Validators.required],
      zipCode:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required]
    })
    
  }

  settingDataBtn(){
   if(this.settingData.valid){
    const settingDataValue= this.settingData.value;
    console.log(settingDataValue);
   }
   else{}
  }


}
