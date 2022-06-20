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

  // private turmas: turmas[] = [
  //   {
  //     prof_matricula: -1,
  //     prof_turmas: []
  //   },
  //   {
  //     prof_matricula: 0, prof_turmas: [
  //       {
  //         id: 0,
  //         image: new URL('https://addons-media.operacdn.com/media/CACHE/images/themes/42/263442/1.0-rev1/images/22ffecc7ba917f7a434c7f68084ca231/6a6b2992cd8e5a03901c389f03cfa58a.jpg'),
  //         name: 'Bando de corno',
  //         shift: 'Matutino',
  //         description: 'Um amontoado de corno, vários cornos juntos em um só lugar.'
  //       },
  //       {
  //         id: 1,
  //         image: new URL('https://addons-media.operacdn.com/media/CACHE/images/themes/38/263438/1.0-rev1/images/191ac5fc00ca13dbe850fc45e1a43e55/4729ad255b5acfed6c3c5b483dc622da.jpg'),
  //         name: 'Bando de filhos',
  //         shift: 'Vespertino',
  //         description: 'Um amontoado de filho, tudo filho.'
  //       }
  //     ]
  //   },
  //   {
  //     prof_matricula: 1, prof_turmas: [
  //       {
  //         id: 0,
  //         image: new URL('https://addons-media.operacdn.com/media/CACHE/images/themes/18/263418/1.0-rev1/images/7909e82f4c528c72bffaff76c6effa46/78d34bc54ccb57095c626b7fdb53c6b5.jpg'),
  //         name: 'Bando de computadores',
  //         shift: 'Matutino',
  //         description: 'São vários computadores, um empilhado no outro.'
  //       }
  //     ]
  //   }]

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
      }
    })
  }

  ngOnInit() {
    this.update_turmas_atuais()
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
  onDidDismiss(){
    console.log('opa')
    
  
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
