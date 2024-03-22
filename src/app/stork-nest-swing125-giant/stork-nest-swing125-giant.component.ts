import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-stork-nest-swing125-giant',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './stork-nest-swing125-giant.component.html',
  styleUrl: './stork-nest-swing125-giant.component.css'
})
export class StorkNestSwing125GiantComponent {
  storkNestSwing125GiantUrl = "assets/imgswings/storkNestSwing125Giant/storkNestSwing125Giant.jpg";
  storkNestSwingCoWOutNetUrl = "assets/imgswings/storkNestSwing60CoWOutNet/storkNestSwingCoWOutNet.jpg";
  storkNestSwing60CoWithNetUrl = "assets/imgswings/storkNestSwing60CoWithNet/storkNestSwing60CoWithNet.jpg";
  storkNestSwing90CoWOutNetUrl = "assets/imgswings/storkNestSwing90CoWOutNet/storkNestSwing90CoWOutNet.jpg";
  storkNestSwing90CoWithNetUrl = "assets/imgswings/storkNestSwing90CoWithNet/storkNestSwing90CoWithNet.jpg";

}
