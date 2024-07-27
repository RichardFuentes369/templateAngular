import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPrincipalComponent } from './eliminar-principal.component';

describe('EliminarPrincipalComponent', () => {
  let component: EliminarPrincipalComponent;
  let fixture: ComponentFixture<EliminarPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
