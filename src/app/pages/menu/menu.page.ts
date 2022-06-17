import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  active_page: string

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
      footer: false
    }
  ];

  ionViewDidEnter() {
    this.search_for_title()
  }

  ngOnInit(): void {}

  constructor(private router: Router) { }

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
