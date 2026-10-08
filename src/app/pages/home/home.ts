import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  name: string = "Malcolm Todd"

  nationality: string = "Estadounidense"

  age: number = 23

  single: boolean = true 

  height: number = 1.93

}
