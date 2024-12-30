/*
* Metodo para quitar
* la parte oscura del modal
*/
export function ocultarModalOscura(): void {
  const modal = document.getElementById('staticBackdrop') as HTMLDivElement | null;

  if (!modal) {
    console.warn('Modal no encontrado.');
    return;
  }

  const closeButton = document.querySelector('.closeModalButton') as HTMLElement | null;
  if(closeButton){
    closeButton.click()
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

