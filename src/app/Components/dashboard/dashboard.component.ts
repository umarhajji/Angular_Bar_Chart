import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Population } from 'src/app/Population';
import { PopulationService } from 'src/app/Services/population.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'state_name', 'male_pop', 'female_pop', 'total_pop']
  dataSource!: MatTableDataSource<Population>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)  sort!: MatSort;

  constructor(private popService: PopulationService) { }


  getRecords(){
    this.popService.getAllData().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Error while Fetching Data")
      }
    })
  }
  ngOnInit(): void {
    this.getRecords();
  }

}
