import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = function(){
      // console.log();
      if(window.pageYOffset > 50){
        document.getElementById("navbarSupportedContent").classList.remove("show");
        document.getElementById("navbarSupportedContent").classList.add("hide");
        console.log("scrolling");
      }
    }
  }

}
