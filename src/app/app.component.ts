import { Component, OnInit } from '@angular/core';
import { aluno } from './pages/interfaces/aluno_int';
import { professor } from './pages/interfaces/professor_int';
import { turmas } from './pages/interfaces/turmas_int';

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

  private predefinidos() {
    var usuarios: { alunos: aluno[], professores: professor[] } = {
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
            tipo: 2,
          },
          {
            usuario: 'julio_andrade',
            nome: 'Julio',
            matricula: 1,
            email: 'Julio98@gmail.com',
            senha: '123456',
            tipo: 2,
          }
        ]
    }
    for(let professor of usuarios['professores']){
      this.turmas_from_localStorage(professor.matricula)
    }
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

  }

  private turmas_from_localStorage(matricula: Number) {
    // retorna todas as turmas do localStorage.
    var turmas_localStorage: turmas[] = JSON.parse(localStorage.getItem('turmas'))

    if (turmas_localStorage == null) {
      // se a chave no localStorage nem existe, o professor então terá uma turma vazia
      // e será gerado uma lista com inicialmente a turma desse professor para
      // então ser colocado no localStorage.
      let turmas_pr = this.turma_vazia(matricula)
      localStorage.setItem('turmas', JSON.stringify([turmas_pr]))
    }
    else {
      // se a chave ao menos existe, procure pela existência das turmas desse professor.
      let turmas_pr = turmas_localStorage.find(id => id.prof_matricula == matricula)
      if (turmas_pr == null) {
        // se o objeto com as turmas desse professor não existir, crie uma vazia para
        // o mesmo de acordo com sua matrícula, 
        // empurre para a lista já existente e coloque no localStorage.
        turmas_pr = this.turma_vazia(matricula)
        turmas_localStorage.push(Object.assign({}, turmas_pr))
        localStorage.setItem('turmas', JSON.stringify(turmas_localStorage))
      }
    }
  }

  private turma_vazia(matricula: Number): turmas {
    // gerando uma turma vazia.
    return { prof_matricula: matricula, prof_turmas: [] }
  }

}