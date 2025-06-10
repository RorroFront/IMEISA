import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OurservicesComponent } from "./ourservices/ourservices.component";
import { UsComponent } from "./us/us.component";
import { ClientsComponent } from "./clients/clients.component";
import { ContactComponent } from "./contact/contact.component";
import { NgOptimizedImage } from '@angular/common';
import Swiper from 'swiper';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

Swiper.use([Navigation, Pagination, Keyboard  ]);




interface trademarks {
  img: string;
  title: string;
  id:number
}	

@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    NgOptimizedImage,
    OurservicesComponent,
    UsComponent,
    ClientsComponent,
    ContactComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit, AfterViewInit {

  hilti:string = '/assets/machinery-logos/HILTI_LOGO.png';
  harrington:string = '/assets/machinery-logos/harrington_logo.png';
  hbc:string = '/assets/machinery-logos/HBC_LOGO.png';
  eepos:string = '/assets/machinery-logos/eepos_logo.png';

  trademarks: trademarks[] = [];
  

constructor(@Inject(PLATFORM_ID) private platformId: Object){}


ngOnInit(): void {
  

  this.trademarks = [
  
    {
      img:this.hilti,
      title:'hilti',
      id:0
    },
    {
      img:this.harrington,
      title:'harrington',
      id:1
    },
    {
      img:this.hbc,
      title:'hbc',
      id:2
    },
    {
      img:this.eepos,
      title:'eepos',
      id:3
    }
  
  ];

}




ngAfterViewInit(): void {


  if (isPlatformBrowser(this.platformId)) {
    import('swiper').then(({ default: Swiper }) => {
      const swiper = new Swiper(`#swiper-trademarks`, {
        slidesPerView: 1,
        loop: true, // Solo activa loop si hay más de 1 imagen
        effect: 'fade',
        speed: 800,
        centeredSlides: true,
        spaceBetween: 0, // <-- Aquí defines el espacio en píxeles entre slides
        navigation: {
          nextEl: `.swiper-button-next`,
          prevEl: `.swiper-button-prev`
        },
        pagination: {
          el: `.swiper-pagination`,
          clickable: true
        },
        autoplay: false
      });
    });
  }


  // new Swiper(`#swiper-trademarks`, {
  //   slidesPerView: 2,
  //   loop: true, // Solo activa loop si hay más de 1 imagen
  //   effect: 'fade',
  //   speed: 800,
  //   navigation: {
  //     nextEl: `.swiper-button-next`,
  //     prevEl: `.swiper-button-prev`
  //   },
  //   pagination: {
  //     el: `.swiper-pagination`,
  //     clickable: true
  //   },
  //   autoplay: false
  // });

  
}





}
