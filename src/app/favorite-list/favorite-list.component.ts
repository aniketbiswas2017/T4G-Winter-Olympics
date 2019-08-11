import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OlympicService } from '../olympic.service';
import { MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource;
  displayedColumns = ['flag', 'name', 'medals', 'silver', 'bronze', 'total'];
  public saveFav = [];

  @Input()
  public favData;
  public dataRow = [];

  constructor(private _olympicService: OlympicService) {
    const x = JSON.parse(localStorage.getItem('fav'))
    if (x) {
      x.forEach((item) => {
        if (item) this.dataRow.push(item)
      })
    }
  }

  onDelFav(saveFav) {
    const x = this.dataRow.filter((data) => data.name === saveFav.name);
    const index = this.dataRow.indexOf(x[0]);
    this.dataRow.splice(index, 1);
    localStorage.setItem('fav', JSON.stringify(this.dataRow));
  }

  appendCountries(Country: any) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
  }
}
