import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPrincipalComponent } from './asignar-principal.component';

describe('AsignarPrincipalComponent', () => {
  let component: AsignarPrincipalComponent;
  let fixture: ComponentFixture<AsignarPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignarPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignarPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
