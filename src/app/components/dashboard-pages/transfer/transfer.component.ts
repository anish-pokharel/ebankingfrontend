import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent implements OnInit{
formData!: FormGroup;
constructor( private fb:FormBuilder){}
  ngOnInit(): void {
    this,this.transferMoney()
  
}
sendMoney(){
console.log("button is clicked");
if(this.formData.valid){
  const transferData= this.formData.value;
  console.log(transferData);
}
else{}
}
shareIban(){
  alert('hello')
}
transferMoney(){
  this.formData=this.fb.group({
    beneficiary:['',Validators.required],
    amount:['',Validators.required],
    date:['',Validators.required],
    transferPurpose:['',Validators.required],
    beneficiaryName:['',Validators.required],
    beneficiaryEmail:['',Validators.required],
    payersReference:['',Validators.required],
    beneficiaryInfo:['',Validators.required]

  })
}

}
