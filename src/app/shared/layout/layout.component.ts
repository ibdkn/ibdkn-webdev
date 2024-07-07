import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "./footer/footer.component";
import {MainComponent} from "../../views/main/main.component";
import {SocialsComponent} from "../../views/pages/socials/socials.component";
import {QuoteComponent} from "../../views/pages/quote/quote.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    MainComponent,
    SocialsComponent,
    QuoteComponent
  ],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

}
