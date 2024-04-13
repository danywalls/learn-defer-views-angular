import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JumpComponent} from "./components/jump.component";
import {LetterComponent} from "./components/letter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JumpComponent, LetterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'defer_gray';
  jumpAccept: boolean = false;
}
