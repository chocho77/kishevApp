import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorkNestSwing125GiantComponent } from './stork-nest-swing125-giant.component';

describe('StorkNestSwing125GiantComponent', () => {
  let component: StorkNestSwing125GiantComponent;
  let fixture: ComponentFixture<StorkNestSwing125GiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorkNestSwing125GiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorkNestSwing125GiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
