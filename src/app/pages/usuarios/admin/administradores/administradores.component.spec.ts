import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradoresComponent } from './administradores.component';

describe('AdministradoresComponent', () => {
  let component: AdministradoresComponent;
  let fixture: ComponentFixture<AdministradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministradoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
