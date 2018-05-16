import { TestBed, inject } from '@angular/core/testing';

import { UsuarioService } from "../../general/usuario.service";

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioService]
    });
  });

  it('should be created', inject([UsuarioService], (service: UsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
