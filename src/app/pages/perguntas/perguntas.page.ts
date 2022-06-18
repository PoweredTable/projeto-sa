import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { CadastroBlPerguntaPage } from '../cadastro-bl-pergunta/cadastro-bl-pergunta.page';


@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async show_modal(){
    const modal = await this.modalCtrl.create({
      component: CadastroBlPerguntaPage
    })

    await modal.present()

  }

  navigate_to_banco_perguntas(){
    this.router.navigate(['banco-perguntas'])
  }

}
