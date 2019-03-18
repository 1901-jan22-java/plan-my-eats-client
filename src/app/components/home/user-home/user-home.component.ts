import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { Preference } from 'src/app/models/preference.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: User = new User();
  tableColumns: string[] = [
    'prefs',
  ];
  dataSource: MatTableDataSource<Preference> = new MatTableDataSource<Preference>(this.user.preferences);

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.userService.user$.subscribe(resp => {
      console.log(resp);
      this.user = resp;
      this.dataSource = new MatTableDataSource<Preference>(resp.preferences);
    });
  }

  public eatIn() {
    this.router.navigate(['eat-in']);
  }

  public eatOut() {
    this.router.navigate(['eat-out']);
  }

}
