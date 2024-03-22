import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorkNestSwing60CoWOutNetComponent } from './stork-nest-swing60-co-wout-net.component';

describe('StorkNestSwing60CoWOutNetComponent', () => {
  let component: StorkNestSwing60CoWOutNetComponent;
  let fixture: ComponentFixture<StorkNestSwing60CoWOutNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorkNestSwing60CoWOutNetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorkNestSwing60CoWOutNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
