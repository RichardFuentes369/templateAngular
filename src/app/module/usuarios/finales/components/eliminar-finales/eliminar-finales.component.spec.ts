import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarFinalesComponent } from './eliminar-finales.component';

describe('EliminarFinalesComponent', () => {
  let component: EliminarFinalesComponent;
  let fixture: ComponentFixture<EliminarFinalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarFinalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarFinalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
