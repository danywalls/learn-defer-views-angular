import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {LetterComponent} from "./components/letter.component";

import {NgComponentOutlet} from "@angular/common";
import {JumpComponent} from "./components/jump.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LetterComponent, NgComponentOutlet, JumpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'defer_gray';
  accepted = false;

  accept() {
    this.accepted = true;
  }
}

