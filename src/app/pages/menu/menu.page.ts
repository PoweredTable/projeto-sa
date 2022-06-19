import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { usuario } from '../interfaces/usuario_int';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  active_page: string
  usuario_atual: usuario

  pages: { title: string, url: string, icon: string, footer: Boolean }[] = [
    {
      title: 'Salas',
      url: '/menu/salas',
      icon: 'easel-outline',
      footer: false
    },
    {
      title: 'Blocos de perguntas',
      url: '/menu/perguntas',
      icon: 'albums-outline',
      footer: false
    },
    {
      title: 'Agenda',
      url: '',
      icon: 'calendar-outline',
      footer: false

    },
    {
      title: 'Desconectar',
      url: '/login',
      icon: "log-out-outline",
      footer: true
    }
  ];

  ionViewDidEnter() {
    this.search_for_title()
  }

  ngOnInit(): void {}

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params=> {
      if(this.router.getCurrentNavigation().extras.state){
        this.usuario_atual = this.router.getCurrentNavigation().extras.state['pessoa']

        console.log('Usuário ', this.usuario_atual.usuario, ' logado!')
      }
      else{
        this.usuario_atual = {
          nome: 'undefined',
          usuario: 'undefined', 
          email: 'undefined@gmail.com', 
          matricula: -1, senha: '', tipo: -1
        }

        console.log('O login não foi realizado na sessão atual.')
        
      }
    })
  }

  private search_for_title() {
    let page = this.pages.find(page => page.url === this.router.url)
    this.active_page = page.title
  }

  navigate_to_url(url: string, title: string) {
    if (url!="/login"){
      this.active_page = title
    }
    if(url!=''){
      this.router.navigateByUrl(url)
    }
  }
}
