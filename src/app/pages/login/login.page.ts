import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { usuario } from '../interfaces/usuario_int';

// import api from '../../../Api.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }
  // actionLoginGoogle = async () => {
  //   let result = api.googleLogar();
  // }
  acesso: any = {
    login: '',
    senha: null
  }

  pessoaL: usuario
  matricula = null //variavel que recebe a matricula do usuario para enviar pra o menu
  verificaLogin = true; //variavel que recebe o valor do ion-toglle

  ngOnInit() {
  }

  login_in() { //funçao que o botao login chama 
    let usuarios = JSON.parse(localStorage.getItem('users'))

    const alunos: usuario[] = usuarios['alunos'];
    const professores: usuario[] = usuarios['professores']
    var encontrado = false

    if (this.verificaLogin == false) {//se ion-toggle não estiver ativado faça:
      for (var pessoa of alunos) {
        if (this.acesso.login == pessoa.usuario && this.acesso.senha == pessoa.senha) {
          alert("Oh ainda nao possuimos sua tela de acesso!")
        } else { alert("Não possuimos seu cadastro") }
      }
    } else {
      // console.log(this.verificaLogin)
      if (this.verificaLogin == true) { //se ion-toggle estiver ativado faça:
        for (let pessoa of professores) { //para cada pessoa dentro de professores faça:
          if (this.acesso.login == pessoa.usuario && this.acesso.senha == pessoa.senha && encontrado == false) {
            // console.log(pessoa)

            //passando dados do usuario para o objeto global
            this.pessoaL = {
              nome: pessoa.nome,
              senha: pessoa.senha,
              email: pessoa.email,
              matricula: pessoa.matricula,
              tipo: pessoa.tipo,
              usuario: pessoa.usuario
            }
            encontrado = true //enviando confirmaçao de usuario encontrado
            this.enviaTelaProf();
            break

          } else {
            encontrado = false
          }


        }
        if (encontrado = false) {
          alert("Error")
        }
      }
    }
  }


  enviaTelaProf() {
    let navigationExtras: NavigationExtras = {
      state: {
        pessoa: this.pessoaL
      }
    }
    this.router.navigate(["menu"], navigationExtras)
  }
}


