import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imeisa';
}
