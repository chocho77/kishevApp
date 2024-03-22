import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorkNestSwing90CoFineMeshComponent } from './stork-nest-swing90-co-fine-mesh.component';

describe('StorkNestSwing90CoFineMeshComponent', () => {
  let component: StorkNestSwing90CoFineMeshComponent;
  let fixture: ComponentFixture<StorkNestSwing90CoFineMeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorkNestSwing90CoFineMeshComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorkNestSwing90CoFineMeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
