import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPrincipalComponent } from './editar-principal.component';

describe('EditarPrincipalComponent', () => {
  let component: EditarPrincipalComponent;
  let fixture: ComponentFixture<EditarPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
