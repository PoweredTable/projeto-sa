import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CadastroSalaPage } from '../cadastro-sala/cadastro-sala.page';
import { classes } from '../interfaces/classes_int';
import { PlayPage } from '../play/play.page';


@Component({
  selector: 'app-salas',
  templateUrl: './salas.page.html',
  styleUrls: ['./salas.page.scss'],
})
export class SalasPage implements OnInit {
  current_classes: classes

  private classes: classes[] = [{
    professor_id: 0, professor_classes: [
      {
        id: 0,
        image: new URL('https://addons-media.operacdn.com/media/CACHE/images/themes/42/263442/1.0-rev1/images/22ffecc7ba917f7a434c7f68084ca231/6a6b2992cd8e5a03901c389f03cfa58a.jpg'),
        name: 'Bando de corno',
        shift: 'Matutino',
        description: 'Um amontoado de corno, vários cornos juntos em um só lugar.'
      },
      {
        id: 1,
        image: new URL('https://addons-media.operacdn.com/media/CACHE/images/themes/38/263438/1.0-rev1/images/191ac5fc00ca13dbe850fc45e1a43e55/4729ad255b5acfed6c3c5b483dc622da.jpg'),
        name: 'Bando de filhos',
        shift: 'Vespertino',
        description: 'Um amontoado de filho, tudo filho.'
      }
    ]
  },
  {
    professor_id: 1, professor_classes: [
      {
        id: 0,
        image: new URL('https://addons-media.operacdn.com/media/CACHE/images/themes/18/263418/1.0-rev1/images/7909e82f4c528c72bffaff76c6effa46/78d34bc54ccb57095c626b7fdb53c6b5.jpg'),
        name: 'Bando de computadores',
        shift: 'Matutino',
        description: 'São vários computadores, um empilhado no outro.'
      }
    ]
  }]

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    let professor_id = 1
    this.current_classes = this.classes.find(id => id.professor_id == professor_id)
  }

  async show_modal_add_sala(){
    const modal = await this.modalCtrl.create({
      component: CadastroSalaPage
    })

    await modal.present()

  }


  navigate_to_cadastro_sala() {
    this.router.navigate(['cadastro-salas'])
  }

  async show_modal_open_blocks(){
    const modal = await this.modalCtrl.create({
      component: PlayPage
    })

    await modal.present()

  }


  navigate_to_play_all() {
    this.router.navigate(['play'])
  }

}
