import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

 interface logos {
  logo: string,
  id:number
}

@Component({
  selector: 'app-clients',
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {


  logos:logos[] = [

    {
      logo: "/assets/logos/logo1.png",
      id:0
    },
    {
      logo: "/assets/logos/logox.png",
      id:1
    },
    {
      logo: "/assets/logos/logo3.png",
      id:2
    },
    {
      logo: "/assets/logos/logo4.png",
      id:3
    },
  
    {
      logo: "/assets/logos/logo5.png",
      id:5
    },
    {
      logo: "/assets/logos/logo6.png",
      id:6
    },
    {
      logo: "/assets/logos/logo7.png",
      id:7
    },
    {
      logo: "/assets/logos/logo8.png",
      id:8
    },
    {
      logo: "/assets/logos/logo9.png",
      id:9
    },
 {
      logo: "/assets/logos/logo10.png",
      id: 10
    },
     {
      logo: "/assets/logos/logo11.png",
      id: 11
    },
      {
      logo: "/assets/logos/logo12.png",
      id: 12
    },
       {
      logo: "/assets/logos/logo13.png",
      id: 13
    },
        {
      logo: "/assets/logos/logo14.png",
      id: 14
    }
  ]


}
