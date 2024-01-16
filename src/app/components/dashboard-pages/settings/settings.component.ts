import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SettingServiceService } from './settingService/setting-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
  providers:[SettingServiceService]
})
export class SettingsComponent implements OnInit {
settingData!: FormGroup ;
constructor(
  private fb:FormBuilder,
  private settingService :SettingServiceService
){}
// httpClient = inject(HttpClient)

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
    this.settingService.postuserSettingData(settingDataValue).subscribe((value)=>{
      console.log(value);
    })
   }
   else{}
  }


}
