import { Component, OnInit } from '@angular/core';
import { usuario } from './pages/interfaces/usuario_int';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.predefinidos()
  }

  private predefinidos(){
    const usuarios: { alunos: usuario[], professores: usuario[] } = {
      alunos:
        [
          {
            usuario: "mario_maia",
            nome: "Mario",
            matricula: 0,
            email: "mario345@gmail.com",
            senha: '123456',
            tipo: 3
          },
          {
            usuario: 'marcos_santos',
            nome: "Marcos",
            matricula: 1,
            email: "marcos345@gmail.com",
            senha: '123456',
            tipo: 3
          }
        ],
      professores:
        [
          {
            usuario: 'carla_silva',
            nome: "Carla",
            matricula: 0,
            email: 'carla00@gmail.com',
            senha: '123456',
            tipo: 2
          },
          {
            usuario: 'julio_andrade',
            nome: 'Julio',
            matricula: 1,
            email: 'Julio98@gmail.com',
            senha: '123456',
            tipo: 2
          }
        ]
    }
    localStorage.setItem('users', JSON.stringify(usuarios))
  }
}