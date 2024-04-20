import {Component, Type} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgComponentOutlet} from "@angular/common";
import {NinjaComponent} from "./components/ninja.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgComponentOutlet, NinjaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public ninja!: Type<any>;
  accepted = false;

  accept(): void {
       this.accepted = true;
  }
}

