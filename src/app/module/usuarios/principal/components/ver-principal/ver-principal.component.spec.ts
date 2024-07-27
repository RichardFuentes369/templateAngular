import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPrincipalComponent } from './ver-principal.component';

describe('VerPrincipalComponent', () => {
  let component: VerPrincipalComponent;
  let fixture: ComponentFixture<VerPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
