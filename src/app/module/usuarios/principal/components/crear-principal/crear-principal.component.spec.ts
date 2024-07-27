import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPrincipalComponent } from './crear-principal.component';

describe('CrearPrincipalComponent', () => {
  let component: CrearPrincipalComponent;
  let fixture: ComponentFixture<CrearPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
