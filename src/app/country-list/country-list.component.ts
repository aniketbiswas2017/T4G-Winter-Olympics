import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { OlympicService } from '../olympic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns = ['flag', 'name', 'medals', 'silver', 'bronze', 'total', 'actions'];
  dataSource;
  public showMessage = false;
  public fMessage = true;
  public msgDupl = false;

  constructor(private _olympicService: OlympicService, private router: Router) {
  }

  onAddFav(row: any) {
    const a = JSON.parse(localStorage.getItem('fav'))
    if (a && row) {
      let c = a.filter((country) => country.name === row.name)
      if (c.length === 0) {
        a.push(row)
        localStorage.setItem('fav', JSON.stringify(a))
        setTimeout(() => {
          this.showMessage = true;
          this.fMessage = false;
          this.msgDupl = false;
        }, 500)
      }
      else {
        this.showMessage = false;
        this.msgDupl = true;
        this.fMessage = false;
      }
    } else {
      let x = []
      x.push(row)
      localStorage.setItem('fav', JSON.stringify(x))
      setTimeout(() => {
        this.showMessage = true;
        this.fMessage = false;
        this.msgDupl = false;
      }, 500)
    }
  }

  onClose() {
    this.showMessage = false;
    this.fMessage = true;
    this.msgDupl = false;
  }

  ngOnInit() {
    this._olympicService.getTable().subscribe(results => {
      if (!results) {
        return;
      }
      else if (results == undefined || results == null) { return; }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    })
  }
}