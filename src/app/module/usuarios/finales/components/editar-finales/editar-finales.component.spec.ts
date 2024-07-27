import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFinalesComponent } from './editar-finales.component';

describe('EditarFinalesComponent', () => {
  let component: EditarFinalesComponent;
  let fixture: ComponentFixture<EditarFinalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarFinalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarFinalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
