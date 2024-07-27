import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFinalesComponent } from './crear-finales.component';

describe('CrearFinalesComponent', () => {
  let component: CrearFinalesComponent;
  let fixture: ComponentFixture<CrearFinalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearFinalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearFinalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
