/*
* Metodo para quitar
* la parte oscura del modal
*/
export function ocultarModalOscura(): void {
  const modal = document.getElementById('staticBackdrop') as HTMLButtonElement
  modal.style.display = 'none'

  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';

    setTimeout(() => {
      modal.classList.remove('show');
      modal.setAttribute('style', 'display: none;');
      document.body.classList.remove('modal-open');

      modal.removeAttribute('aria-modal');
      modal.removeAttribute('role');
      modal.setAttribute('aria-hidden', 'true')

      const backdrop = document.querySelector('.modal-backdrop');
      backdrop?.parentNode?.removeChild(backdrop);
    }, 100);
  }
}

/*
* Metodo para filtrar a los permisos
* Modulo y Submodulo
*/
export function Permisos(permisos: any, nombreModulo: string, nombreSubmodulo: string): Array<any>{
  if(nombreSubmodulo == ''){
    return permisos.data.find((e: any) => e.permiso_nombre_permiso == nombreModulo).permisosSubmodulos
  }else{
    return permisos.data.find(
      (e: any) => e.permiso_nombre_permiso == nombreModulo
      ).permisosSubmodulos.find((l: any) => l.nombre_permiso == nombreSubmodulo).permisosAcciones
  }
}

