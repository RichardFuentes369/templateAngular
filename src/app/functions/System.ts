// import $ from 'jquery';
export function openCloseModal(name: string): void {
  const modal = document.getElementById(name);
  if (modal) {
    ($(modal) as any).modal('toggle');
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

