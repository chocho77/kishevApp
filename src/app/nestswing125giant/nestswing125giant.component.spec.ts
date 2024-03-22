import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nestswing125giantComponent } from './nestswing125giant.component';

describe('Nestswing125giantComponent', () => {
  let component: Nestswing125giantComponent;
  let fixture: ComponentFixture<Nestswing125giantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nestswing125giantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nestswing125giantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
