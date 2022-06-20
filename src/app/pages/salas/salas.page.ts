import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { CadastroSalaPage } from '../cadastro-sala/cadastro-sala.page';
import { turmas } from '../interfaces/turmas_int';
import { PlayPage } from '../play/play.page';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.page.html',
  styleUrls: ['./salas.page.scss'],
})
export class SalasPage implements OnInit {
  turmas_atuais: turmas
  usuario_atual: any

  constructor(private router: Router, private route: ActivatedRoute, private modalCtrl: ModalController) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario_atual = this.router.getCurrentNavigation().extras.state['pessoa']
        
      }
      else {
        this.usuario_atual = {
          nome: 'undefined',
          usuario: 'undefined', 
          email: 'undefined@gmail.com', 
          matricula: -1, senha: '', tipo: -1
        }
        this.router.navigate([''])
      }
      this.update_turmas_atuais()
    })
  }

  ngOnInit() {
  }

  private update_turmas_atuais(){
    let turmas: turmas[] = JSON.parse(localStorage.getItem('turmas'))
    this.turmas_atuais = turmas.find(mat => mat.prof_matricula == this.usuario_atual.matricula)
  }


  async show_modal_add_sala() {
    const modal = await this.modalCtrl.create({
      component: CadastroSalaPage,
        componentProps: {
        prof_matricula: this.usuario_atual.matricula
      }


    })

    await modal.present()
    
    const { role } = await modal.onDidDismiss()
    this.update_turmas_atuais()
  }

  navigate_to_cadastro_sala() {
    this.router.navigate(['cadastro-salas'])
  }

  async show_modal_open_blocks() {
    const modal = await this.modalCtrl.create({
      component: PlayPage,

    })

    await modal.present()

  }

  navigate_to_play_all() {
    this.router.navigate(['play'])
  }

}
