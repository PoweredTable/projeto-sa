import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import api from '../../../Api.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }
  actionLoginGoogle = async () => {
    let result = api.googleLogar();
  }
  acesso: any = {
    login: '',
    senha: 0
  }

  ngOnInit() {
    this.predefinidos();
  }




  predefinidos() {
    var alunos: any = [
      {
        nome: "Mario",
        matricula: 4536728,
        email: "mario345@gmail.com",
        senha: 123456,
        tipo: 3
      },
      {
        nome: "Marcos",
        matricula: 4536890,
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
        id: 5678095,
        email: 'carla00@gmail.com',
        senha: 123456,
        tipo: 2
      },
      {
        usuario: 'julio_andrade',
        nome: 'Julio',
        id: 4322345,
        email: 'Julio98@gmail.com',
        senha: 123456,
        tipo: 2
      }
    ];
    localStorage.setItem('professores', JSON.stringify(professores));
    // console.log(localStorage.Usuarios());
    // console.log(this.professores)
  }

  verificaLogin = false;
  login_in() { //funçao que o botao login chama 
    var alunos = JSON.parse(localStorage.getItem("alunos"))
    var professores = JSON.parse(localStorage.getItem("professores"))
    console.log(this.acesso)
    if (this.verificaLogin == false) {
      for (var pessoa of alunos) {
        if (this.acesso.login == pessoa.usuario && this.acesso.senha == pessoa.senha) {

          alert("Oh ainda nao possuimos sua tela de acesso!")
        } else { alert("Não possuimos seu cadastro") }
      }
    } else {
      console.log(this.verificaLogin)
    if (this.verificaLogin == true) {
      for (var pessoa of professores) {
        if (this.acesso.login == pessoa.usuario && this.acesso.senha == pessoa.senha) {
          console.log(pessoa)
          this.enviaTela();
        } else {
          alert("ERROR")
        }
      }
    }
    }
    
    // this.router.navigate(["menu"])
    // 
  }
  enviaTela() {
    this.router.navigate(["menu"])

  }



  // logarComGoogle(){
  //   api.googleLogar
  // }

}


