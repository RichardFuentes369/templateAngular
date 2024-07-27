import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFinalesComponent } from './ver-finales.component';

describe('VerFinalesComponent', () => {
  let component: VerFinalesComponent;
  let fixture: ComponentFixture<VerFinalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerFinalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerFinalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
