import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private router : Router) { }
  count = 0;
  percentage = 5;
  ngOnInit(): void {
  }

  ngAfterViewInit(){
    var timeIntervale = setInterval(()=>{
      this.count++;
      this.percentage+=30;
      console.log(this.count);
      if(this.count == 3 || this.count > 3){
        this.count = 0;
        this.percentage = 100;
        console.log();
        clearInterval(timeIntervale);
      }
      if(this.percentage == 100){
        this.router.navigate(['/home']);
      }
    },1000)
  }

}
