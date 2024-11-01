import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
