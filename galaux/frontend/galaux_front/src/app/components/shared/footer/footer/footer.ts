import { Component } from '@angular/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-footer',
  imports: [ToggleSwitchModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
