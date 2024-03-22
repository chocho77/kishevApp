import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorkNestSwing90CoWOutNetComponent } from './stork-nest-swing90-co-wout-net.component';

describe('StorkNestSwing90CoWOutNetComponent', () => {
  let component: StorkNestSwing90CoWOutNetComponent;
  let fixture: ComponentFixture<StorkNestSwing90CoWOutNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorkNestSwing90CoWOutNetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorkNestSwing90CoWOutNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
