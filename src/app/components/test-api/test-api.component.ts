import { Component, OnInit } from '@angular/core';
import { TestApiService } from 'src/app/services/testapi/test-api.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {
  result: string;
  location: string;
  keyword: string;
  constructor(private apiService: TestApiService) { }

  ngOnInit() {
  }

  //This is using an arrow function because otherwise lexical context is lost. 
  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => this.location = position.coords.latitude + "," + position.coords.longitude);
  }

  getStuff() {
    this.getLocation();
    this.apiService.getData(this.location, this.keyword).subscribe(
      resp => {
        if(resp != null) {
          this.result = resp;
          console.log(resp);
        }
      }
    );
  }


}
