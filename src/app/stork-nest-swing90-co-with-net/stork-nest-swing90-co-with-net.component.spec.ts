import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorkNestSwing90CoWithNetComponent } from './stork-nest-swing90-co-with-net.component';

describe('StorkNestSwing90CoWithNetComponent', () => {
  let component: StorkNestSwing90CoWithNetComponent;
  let fixture: ComponentFixture<StorkNestSwing90CoWithNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorkNestSwing90CoWithNetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorkNestSwing90CoWithNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
