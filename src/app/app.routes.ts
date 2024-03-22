import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SwingsComponent } from './swings/swings.component';
import { ConsumableswingsComponent } from './consumableswings/consumableswings.component';
import { Nestswing125giantComponent } from './nestswing125giant/nestswing125giant.component';
import { StorkNestSwing125GiantComponent } from './stork-nest-swing125-giant/stork-nest-swing125-giant.component';
import { StorkNestSwing60CoWOutNetComponent } from './stork-nest-swing60-co-wout-net/stork-nest-swing60-co-wout-net.component';
import { StorkNestSwing60CoWithNetComponent } from './stork-nest-swing60-co-with-net/stork-nest-swing60-co-with-net.component';
import { StorkNestSwing90CoWOutNetComponent } from './stork-nest-swing90-co-wout-net/stork-nest-swing90-co-wout-net.component';
import { StorkNestSwing90CoWithNetComponent } from './stork-nest-swing90-co-with-net/stork-nest-swing90-co-with-net.component';
import { StorkNestSwing90CoFineMeshComponent } from './stork-nest-swing90-co-fine-mesh/stork-nest-swing90-co-fine-mesh.component';
import { StorkNestSwing90CoFineMeshRainbowComponent } from './stork-nest-swing90-co-fine-mesh-rainbow/stork-nest-swing90-co-fine-mesh-rainbow.component';


export const routes: Routes = [
    {'path': '', component:HomeComponent},
    {'path': 'about', component:AboutComponent},
    {'path': 'contact',component:ContactComponent},
    {'path': 'swings', component:SwingsComponent},
    {'path': 'consumable', component:ConsumableswingsComponent},
    {'path': 'nestswing125giant', component:Nestswing125giantComponent},
    {'path': 'storkNestSwing125Giant', component:StorkNestSwing125GiantComponent},
    {'path': 'storkNestSwing60CoWOutNet', component:StorkNestSwing60CoWOutNetComponent},
    {'path': 'storkNestSwing60CoWithNet', component:StorkNestSwing60CoWithNetComponent},
    {'path': 'storkNestSwing90CoWOutNet', component:StorkNestSwing90CoWOutNetComponent},
    {'path': 'storkNestSwing90CoWithNet', component:StorkNestSwing90CoWithNetComponent},
    {'path': 'storkNestSwing90CoFineMesh', component:StorkNestSwing90CoFineMeshComponent},
    {'path': 'storkNestSwing90CoFineMeshRainbow', component:StorkNestSwing90CoFineMeshRainbowComponent}
    
];
