import { TestBed } from '@angular/core/testing';

import { ModulosService } from './modulos.service';

describe('ModulosService', () => {
  let service: ModulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
