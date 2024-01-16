import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingServiceService {
  private settingData="http://localhost:3000/userSetting"

  constructor(
    private http:HttpClient
  ) { }
  postuserSettingData(data: any):Observable<any>{
    return this.http.post(this.settingData,data)
  }
}
