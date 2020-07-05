import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  artist = [];
  displayForm = true;
  private httpOptions: any;
  book: {
    name: string;
    mobile: string;
    email: string;
    date: string;
    time:string;
    description:string;
    promoter:string;
    venue:string;
    capacity: number;
    attendance:number;
    type:string;
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public http: HttpClient) { 
    this.book = {
      name: "",
      mobile: "",
      email: "",
      date: "",
      time:"",
      description:"",
      promoter:"",
      venue:"",
      capacity: 0,
      attendance:0,
      type:"",
    };
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
  ngOnInit(): void {
    console.log(this.data.artist_name);
    if(this.data.artist_name == "Thuli"){
      var Thuli = {
        twitter:"https://twitter.com/thuli_grey",
        insta:"https://www.instagram.com/thuli_grey/",
        facebook:"https://www.facebook.com/thuli.grey.12",
        soundcloud:"https://soundcloud.com/thuli-grey-789271398",
        youtube:"https://www.youtube.com/channel/UC2WPbq6O7pFsWVlFc7PQ0Rw",
        img:"assets/images/Thuli.jpg",
        artist_name:"Thuli Grey", 

      }
      this.artist.push(Thuli)
    }else{
      var Besa = {
        feature:"www.mag.pxy.co.za/besa-pharaoh-w-o-f-m-s/",
        twitter:"https://twitter.com/BesaPharaoh",
        insta:"https://www.instagram.com/besapharaoh/",
        facebook:"https://www.facebook.com/besa.k.chungu",
        soundcloud:"https://soundcloud.com/besapharaoh",
        youtube:"https://www.youtube.com/channel/UCNx4NhCAHJT1hkGWk607ESw",
        img:"assets/images/besa_img.jpg",
        artist_name:"Besa Pharaoh", 
      }
      this.artist.push(Besa)
    }
  }

  submit(){
    console.group("form input")
    console.log("name ",this.book.name);
    console.log("mobile ", this.book.mobile);
    console.log("email ",this.book.email);
    console.log("promoter ", this.book.promoter);
    console.log("date ", this.book.date);
    console.log("time ", this.book.time);
    console.log("performance type ", this.book.type);
    console.log("Venue ", this.book.venue);
    console.log("expected attendence ", this.book.attendance);
    console.log("Capacity ", this.book.capacity);
    console.log("description ", this.book.description);
    console.groupEnd();
    this.http.get('https://homepowerapp.herokuapp.com/mil/mil/',{params:{
      name:this.book.name,
      mobile:this.book.mobile,
      email:this.book.email ,
      date:this.book.date ,
      time:this.book.time,
      description:this.book.description,
      promoter:this.book.promoter,
      venue:this.book.venue,
      capacity:this.book.capacity.toString(),
      attendence:this.book.attendance.toString(),
      performance:this.book.type,
      booked:this.data.artist_name
    }}).subscribe(re=>{
      console.log(re);
      if(re["re"] == "sent"){
        this.displayForm = false;
      }
    });
  }
}
