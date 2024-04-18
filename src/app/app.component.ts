import {Component, Type} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgComponentOutlet} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
//hello
  public ninja!: Type<any>;

  async accept(): Promise<void> {
       const { NinjaComponent } = await import('./components/ninja.component');
      this.ninja = NinjaComponent;
  }
}

