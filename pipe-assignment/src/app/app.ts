import { Component } from '@angular/core';
import { PipeDemo } from './pipe-demo/pipe-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PipeDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}