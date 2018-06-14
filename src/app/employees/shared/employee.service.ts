import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Employee} from'./employee.model'

@Injectable()
export class EmployeeService {

  selectedEmployee : Employee;
  employeeList : Employee[];
  constructor(private http : Http) { }

  postEmployee(emp : Employee){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost/api/insert',body,requestOptions).map(x =>{ });
  }



  putEmployee(id, emp) {
    var body = JSON.stringify(emp);
    console.log(body);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost/api/update',
      body,
      requestOptions).map(res => {
        console.log(res);
      });
  }
  getEmployeeList(){
   
    this.http.get('http://localhost/api/employee')
    .map((data : Response) =>{
      return data.json() as Employee[];
    }).toPromise().then(x => {
      this.employeeList = x;
    })
  }

  deleteEmployee(id: number) {
    //return this.http.delete('http://localhost/api/delete').map(res => { });

     return this.http.post("http://localhost/api/delete/",{'EmployeeID':id})
      .map(res => {
        
      });


  }
}
