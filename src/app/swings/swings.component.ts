import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-swings',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './swings.component.html',
  styleUrl: './swings.component.css'
})
export class SwingsComponent {
  nestswing125GiantUrl = "assets/imgswings/nestswing125Giant/nestswing125Giant.jpg";
  storkNestSwing125GiantUrl = "assets/imgswings/storkNestSwing125Giant/storkNestSwing125Giant.jpg";
  storkNestSwingCoWOutNetUrl = "assets/imgswings/storkNestSwing60CoWOutNet/storkNestSwingCoWOutNet.jpg";
  storkNestSwing60CoWithNetUrl = "assets/imgswings/storkNestSwing60CoWithNet/storkNestSwing60CoWithNet.jpg";
  storkNestSwing90CoWOutNetUrl = "assets/imgswings/storkNestSwing90CoWOutNet/storkNestSwing90CoWOutNet.jpg";
  storkNestSwing90CoWithNetUrl = "assets/imgswings/storkNestSwing90CoWithNet/storkNestSwing90CoWithNet.jpg";
  storkNestSwing90CoFineMeshUrl = "assets/imgswings/storkNestSwing90CoFineMesh/storkNestSwing90CoFineMesh.jpg";
  storkNestSwing90CoFineMeshRainbowUrl = "assets/imgswings/storkNestSwing90CoFineMeshRainbow/storkNestSwing90CoFineMeshRainbow.jpg";

}
