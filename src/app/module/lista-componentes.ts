import { CrearUsuariosComponent } from './usuarios/components/crear-usuarios/crear-usuarios.component';
import { EditarUsuariosComponent } from "./usuarios/components/editar-usuarios/editar-usuarios.component";
import { VerUsuariosComponent } from "./usuarios/components/ver-usuarios/ver-usuarios.component";

export class ListaComponentes {
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
    console.log(this.componentes.find(comp => comp.name === nombre))
    return this.componentes.find(comp => comp.name === nombre);
  }
}
