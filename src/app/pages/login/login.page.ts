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
  // pessoaL: any = { //obejto que recebe os dados do usuario
  //   nome: '',
  //   matricula: null,
  //   email: '',
  //   senha: null,
  //   tipo: null,
  //   usuario: '',
  // }

  pessoaL: usuario
  matricula = null //variavel que recebe a matricula do usuario para enviar pra o menu
  verificaLogin = true; //variavel que recebe o valor do ion-toglle
  ngOnInit() {
    this.predefinidos();
  }




  predefinidos() {

    var alunos: any = [
      {
        usuario: "mario_maia",
        nome: "Mario",
        matricula: 0,
        email: "mario345@gmail.com",
        senha: 123456,
        tipo: 3
      },
      {
        usuario: 'marcos_santos',
        nome: "Marcos",
        matricula: 1,
        email: "marcos345@gmail.com",
        senha: 123456,
        tipo: 3
      }
    ]
    localStorage.setItem('alunos', JSON.stringify(alunos));
    var professores: any = [
      {
        usuario: 'carla_silva',
        nome: "Carla",
        id: 0,
        email: 'carla00@gmail.com',
        senha: 123456,
        tipo: 2
      },
      {
        usuario: 'julio_andrade',
        nome: 'Julio',
        id: 1,
        email: 'Julio98@gmail.com',
        senha: 123456,
        tipo: 2
      }
    ];
    localStorage.setItem('professores', JSON.stringify(professores));
    // console.log(localStorage.Usuarios());
    // console.log(this.professores)
  }


  login_in() { //funçao que o botao login chama 
    var alunos = JSON.parse(localStorage.getItem("alunos"))
    var professores = JSON.parse(localStorage.getItem("professores"))
    var encontrado = false
    // console.log(this.acesso)
    if (this.verificaLogin == false) {//se ion-toggle não estiver ativado faça:
      for (var pessoa of alunos) {
        if (this.acesso.login == pessoa.usuario && this.acesso.senha == pessoa.senha) {
          alert("Oh ainda nao possuimos sua tela de acesso!")
        } else { alert("Não possuimos seu cadastro") }
      }
    } else {
      // console.log(this.verificaLogin)
      if (this.verificaLogin == true) { //se ion-toggle estiver ativado faça:
        for (var pessoa of professores) { //para cada pessoa dentro de professores faça:
          if (this.acesso.login == pessoa.usuario && this.acesso.senha == pessoa.senha && encontrado == false) {
            // console.log(pessoa)

            //passando dados do usuario para o objeto global
            this.pessoaL = {
              nome: pessoa.nome, 
              senha: pessoa.senha, 
              email: pessoa.email,
              matricula: pessoa.id,
              tipo: pessoa.tipo,
              usuario: pessoa.usuario
            }
            encontrado = true //enviando confirmaçao de usuario encontrado
            this.enviaTelaProf();

          } else {
            encontrado = false
          }

         
        }
        if(encontrado=false){
          alert("Error")
        }
      }
    }
  }


  enviaTelaProf() {
    console.log('chegou aqui')
    let navigationExtras: NavigationExtras = {
      state: {
        pessoa:this.pessoaL
      }
    }
    this.router.navigate(["menu"], navigationExtras)
  }
}


