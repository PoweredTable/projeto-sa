import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { blocos } from '../interfaces/blocos_int';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  blocos_atuais: blocos
  prof_matricula: Number
  

  constructor(private modalCtrl: ModalController) {

   }

  ngOnInit() {
    let blocos: blocos[] = JSON.parse(localStorage.getItem('blocos'))
    this.blocos_atuais = blocos.find(mat=> mat.prof_matricula == this.prof_matricula)
  }

  dismiss_modal(){
    this.modalCtrl.dismiss()
  }
}
