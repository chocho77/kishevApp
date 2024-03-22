import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorkNestSwing90CoFineMeshRainbowComponent } from './stork-nest-swing90-co-fine-mesh-rainbow.component';

describe('StorkNestSwing90CoFineMeshRainbowComponent', () => {
  let component: StorkNestSwing90CoFineMeshRainbowComponent;
  let fixture: ComponentFixture<StorkNestSwing90CoFineMeshRainbowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorkNestSwing90CoFineMeshRainbowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorkNestSwing90CoFineMeshRainbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
