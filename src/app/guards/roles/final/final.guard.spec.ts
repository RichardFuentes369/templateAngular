import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { finalGuard } from './final.guard';

describe('finalGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => finalGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
