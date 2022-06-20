import { Component, OnInit } from '@angular/core';
import { aluno } from './pages/interfaces/aluno_int';
import { imagem } from './pages/interfaces/imagem_int';
import { professor } from './pages/interfaces/professor_int';
import { turmas } from './pages/interfaces/turmas_int';
import { blocos } from './pages/interfaces/blocos_int';

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
        [{
          nome: 'undefined',
          usuario: 'undefined',
          email: 'undefined@gmail.com',
          matricula: -1, senha: '', tipo: -1
        },
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
    for (let professor of usuarios['professores']) {
      this.data_from_localStorage(professor.matricula)
    }
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    var imagens: imagem[] = [{
      id: 0,
      image: new URL('https://gstatic.com/classroom/themes/Honors_thumb.jpg')
    },
    {
      id: 1,
      image: new URL('https://gstatic.com/classroom/themes/img_oilchange.jpg')
    },
    {
      id: 2,
      image: new URL('https://gstatic.com/classroom/themes/img_bookclub_thumb.jpg')
    },
    {
      id: 3,
      image: new URL('https://gstatic.com/classroom/themes/img_code_thumb.jpg')
    },
    {
      id: 4,
      image: new URL('https://gstatic.com/classroom/themes/img_read.jpg')
    },
    {
      id: 5,
      image: new URL('https://gstatic.com/classroom/themes/img_athleticsjumping.jpg')
    },
    {
      id: 6,
      image: new URL('https://gstatic.com/classroom/themes/img_breakfast.jpg')
    },
    {
      id: 7,
      image: new URL('https://gstatic.com/classroom/themes/Geography.jpg')
    }]
    localStorage.setItem('imagens', JSON.stringify(imagens))
  }

  private data_from_localStorage(matricula: Number) {
    // retorna todas as turmas do localStorage.
    var turmas_localStorage: turmas[] = JSON.parse(localStorage.getItem('turmas'))

    if (turmas_localStorage == null) {
      // se a chave no localStorage nem existe, o professor então terá uma turma vazia
      // e será gerado uma lista com inicialmente a turma desse professor para
      // então ser colocado no localStorage.
      let turmas_pr = this.turmas_vazias(matricula)
      localStorage.setItem('turmas', JSON.stringify([turmas_pr]))
    }
    else {
      // se a chave ao menos existe, procure pela existência das turmas desse professor.
      let turmas_pr = turmas_localStorage.find(id => id.prof_matricula == matricula)
      if (turmas_pr == null) {
        // se o objeto com as turmas desse professor não existir, crie uma vazia para
        // o mesmo de acordo com sua matrícula, 
        // empurre para a lista já existente e coloque no localStorage.
        turmas_pr = this.turmas_vazias(matricula)
        turmas_localStorage.push(Object.assign({}, turmas_pr))
        localStorage.setItem('turmas', JSON.stringify(turmas_localStorage))
      }
    }
    this.blocos_from_localStorage(matricula)
  }

  private turmas_vazias(matricula: Number): turmas {
    // gerando um objeto para turmas vazio.
    return { prof_matricula: matricula, prof_turmas: [] }
  }

  private blocos_from_localStorage(matricula:Number){
    var blocos_localStorage: blocos[] = JSON.parse(localStorage.getItem('blocos'))

    if (blocos_localStorage == null){
      let blocos_pr = this.blocos_vazios(matricula)
      localStorage.setItem('blocos', JSON.stringify([blocos_pr]))
    }
    else{
      let blocos_pr = blocos_localStorage.find(id => id.prof_matricula == matricula)
      if (blocos_pr == null){
        blocos_pr = this.blocos_vazios(matricula)
        blocos_localStorage.push(Object.assign({}, blocos_pr))
        localStorage.setItem('blocos', JSON.stringify(blocos_localStorage))
      }
    }
  }

  private blocos_vazios(matricula: Number): blocos{
    // gerando um objeto para blocos vazio.
    return { prof_matricula: matricula, prof_blocos: [] }
  }
}