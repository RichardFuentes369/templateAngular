import { CrearUsuariosComponent } from './users/components/crear-usuarios/crear-usuarios.component';
import { EditarUsuariosComponent } from "./users/components/editar-usuarios/editar-usuarios.component";
import { VerUsuariosComponent } from "./users/components/ver-usuarios/ver-usuarios.component";

export class ListaComponentes {

  /*
  * Componentes forzados a cargar en los modals
  */
  componentes: any[] = [
    {
      name: 'CrearUsuariosComponent',
      componente: CrearUsuariosComponent
    },
    {
      name: 'VerUsuariosComponent',
      componente: VerUsuariosComponent
    },
    {
      name: 'EditarUsuariosComponent',
      componente: EditarUsuariosComponent
    }
  ];

  obtenerComponentePorNombre(nombre: string) {
    return this.componentes.find(comp => comp.name === nombre);
  }
}
