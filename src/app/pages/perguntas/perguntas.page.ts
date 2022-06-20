import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { popoverController } from '@ionic/core';
import { BancoPerguntasPage } from '../banco-perguntas/banco-perguntas.page';
import { CadastroBlPerguntaPage } from '../cadastro-bl-pergunta/cadastro-bl-pergunta.page';




@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController, private popoverCtrl:PopoverController) { }

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

  async show_modal_perguntas(){
    const modal = await this.modalCtrl.create({
      component: BancoPerguntasPage
    })

    await modal.present()

  }

  navigate_to_perguntas(){
    this.router.navigate(['banco-pergunta'])
  }




}
