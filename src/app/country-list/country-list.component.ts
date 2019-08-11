import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableModule, MatSortModule, MatSort, MatTableDataSource } from '@angular/material';
import { OlympicService } from '../olympic.service';
import {Sort} from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { Router, NavigationStart} from '@angular/router';
import { local } from 'd3';


@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns = ['flag','name','medals','silver','bronze','total', 'actions'];
  dataSource;
  public showMessage = false;
  public fMessage = true;
  public msgDupl = false;

  constructor(private _olympicService: OlympicService, private router: Router) { 
  }

  onAddFav(row: any){
    console.log(JSON.stringify(row));
    const a = JSON.parse(localStorage.getItem('fav'))
    if (a && row) {
      let c = a.filter((country) => country.name === row.name)
      if (c.length === 0)  {
        a.push(row)
        localStorage.setItem('fav', JSON.stringify(a))
        setTimeout(() => {
          this.showMessage = true
          this.fMessage = false 
          this.msgDupl = false;
        }, 500)
      }
      else {
        this.showMessage = false
        this.msgDupl = true;
        this.fMessage = false
      }
    } else {
      let x = []
      x.push(row)
      localStorage.setItem('fav',JSON.stringify(x))
      setTimeout(() => {
        this.showMessage = true
        this.fMessage = false 
        this.msgDupl = false;
      }, 500)
    }
    //this._olympicService.dataFav = row;
   // this.router.navigate(['/favorites'])
  }

  onClose() {
    this.showMessage = false;
    this.fMessage = true;
    this.msgDupl = false
  }

  ngOnInit() {
  this._olympicService.getTable().subscribe(results =>{
    if(!results) {
      return;
    }
    else if (results == undefined || results == null) {return;}
    this.dataSource = new MatTableDataSource(results);
    this.dataSource.sort = this.sort;
  })
}
}