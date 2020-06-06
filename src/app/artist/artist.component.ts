import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  artist = [];
  ngOnInit(): void {
    console.log(this.data.artist_name);
    if(this.data.artist_name == "Thuli"){
      var Thuli = {
        twitter:"https://twitter.com/thuli_grey",
        insta:"https://www.instagram.com/thuli_grey/",
        facebook:"https://www.facebook.com/thuli.grey.12",
        soundcloud:"https://soundcloud.com/thuli-grey-789271398",
        youtube:"https://www.youtube.com/channel/UC2WPbq6O7pFsWVlFc7PQ0Rw",
        img:"../assets/images/Thuli.jpg",
        artist_name:"Thuli Grey", 
        parag1:"Thuli’s music background started when she was doing grade 10 at Suiderlig Hoerskool. This is when she joined the school choir and at same time joined another choir that was external to the school. She grew into the love for music by having after school choir practices with a few friends that were also part of the school choir. The experience at the time was raw, because there weren't any solo performances that took place due to efforts of also trying to build a career in the corporate world Besides having to join two choirs at the same, other activities like studio hopping and open mic sessions that would take place from time to time at different occasions also form part of the learning and growing process in her music career. After completing matric in 2011, college was next, and then came entrance into a university, where she is currently pursuing a National Diploma in Human Resources Management.",
        paragr2:"As a growing artist in the music industry, Thuli Grey envisions a very long journey that requires a lot of attention, hard work, determination, discipline and other norms that she believes will guide her through her music career. She describes music as a lyrical science that forms a language that allows for communication between a sender and a listener. Within the language is a message constructed by the sender which creates a sense of emotion that both the sender and listener can relate to. Since she is a versatile female vocalist, her inspiration for music comes from a variety of genres like Alternative rock, dub step, drum and bass, deep house, electro house, jazz- infused house, afro pop, hip hop, reggae and dancehall, these genres create the artist/ character in Thuli Grey and this is how she would like to communicate with her audience.",
        parag3:"Her music aims to be soulful, so that she can connect with individual souls to form collective souls that relate with the music. She is driven mostly by family, daily life experiences, nature and its laws, healing, inspiring, and motivating others, how people perceive the world and how this puts impact in their lives She has the dream of having the power to communicate an inspirational and motivational message with a number of individuals all over the world at the same time. Thuli Grey's image is neutrally dark because it is based on dark art concepts and African concepts, with a touch of simplicity. She appreciates piercings with regard to her historical culture. She believes that without knowledge of darkness, knowledge of light can never be attained; this message also serves as a guide to her wardrobe.",
        parag4:"Other than music, Thuli grey likes to jump on a skateboard and ride her lungs out, freestyle a few lines, research musical information on the net, communicate with other artists, attend music shows and social events, read informative books, make leather chokers since it’s also part of her image, getting to know new or other places and creating food recipes. Her first project involves new entrance into a group by the name '6pack Bastards', members are Besa Pharaoh and Flexx. Currently in progress is a track that still needs to be recorded that includes Thuli Grey, Flexx and Besa Pharaoh.",
      }
      this.artist.push(Thuli)
    }else{
      var Besa = {
        feature:"http://www.mag.pxy.co.za/besa-pharaoh-w-o-f-m-s/",
        twitter:"https://twitter.com/BesaPharaoh",
        insta:"https://www.instagram.com/besapharaoh/",
        facebook:"https://www.facebook.com/besa.k.chungu",
        soundcloud:"https://soundcloud.com/besapharaoh",
        youtube:"https://www.youtube.com/channel/UCNx4NhCAHJT1hkGWk607ESw",
        img:"../assets/images/besa_img.jpg",
        artist_name:"Besa Pharaoh", 
        parag1:"Besa Chungu, better known as ‘Besa Pharaoh’, is a Hip Hop musician based in South Africa. Besa Pharaoh provides a combination of eccentric, yet nostalgic street sound. This nostalgic street element is also seen in his stage image yet also being influenced by Caribbean clothing and jewelry, African patterns and other sources of inspiration.",
        paragr2:"Besa Pharaoh officially began making music in the year 2013 and has since then performed on several stages across the East Rand opening for well-known artists such as Ricky Rick, Shimza and Ms Cosmo. In early 2020 he appeared on ‘Mzansi Insider’ to speak on the effects of social media on the youth, along with Africa’s biggest battle rap show, One Mic, which both play one SABC1 2020. On the 16 January 2016 Besa Pharaoh released a mixtape titled W.O.F.M (Working On Finding Myself), containing 6 songs and has since worked on several features with artists in the East Rand while perfecting his music.",
        parag3:"What makes him different from other artists is that not only does he rap, but his versatility makes him very artistic in sound and lyrics. Having experienced both fortunate and less fortunate lifestyles has helped him witness the economic separation in society and helps him speak on this like many of his heroes. Besa Pharaoh has a vision of where his music is going as an artist and as a story teller. This would catapult this young talent to a position of a dynamic and sincere leader, with a strong voice for the youth.",
        parag4:"Besa Pharaoh keys his reading and constant learning to have shaped his particular style of music. He also includes conversation to be the greatest source of inspiration.",
      }
      this.artist.push(Besa)
    }
  }



}
