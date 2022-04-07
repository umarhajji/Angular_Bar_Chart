import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';
import { PopulationService } from 'src/app/Services/population.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  result: any;
  state_name: any;
  male_pop: any
  female_pop: any

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Population Data Per State',
      },
    },
  };
        data:any;
        barchart:any;
      

  constructor(private popService: PopulationService) {
    
   }

  ngOnInit(): void {
    this.popService.getAllData().subscribe({
      next:(res)=>{
          this.result = res;
          console.log(this.result)
          this.state_name = this.result.map((pop: any)=> pop.state_name )
          this.male_pop = this.result.map((pop: any)=> pop.male_pop )
          this.female_pop = this.result.map((pop: any)=> pop.female_pop )

    
     

               this.data = {
                 labels: this.state_name,
                 datasets: [{
                  label: "Male Data",
                  data: this.male_pop,
                  backgroundColor: "#f38b4a",
                  },{
                    label: "Female",
                    data: this.female_pop,
                    backgroundColor: "#6970d5"
                  },
                  {
                    label: "Total",
                    data: this.result.map((pop: any)=> pop.total_pop),
                    backgroundColor: "#6948da"
                  }
                ] 
               }
        }
       
      
    })
  }

}
