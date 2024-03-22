import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorkNestSwing60CoWithNetComponent } from './stork-nest-swing60-co-with-net.component';

describe('StorkNestSwing60CoWithNetComponent', () => {
  let component: StorkNestSwing60CoWithNetComponent;
  let fixture: ComponentFixture<StorkNestSwing60CoWithNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorkNestSwing60CoWithNetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorkNestSwing60CoWithNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
