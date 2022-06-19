import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-banco-perguntas',
  templateUrl: './banco-perguntas.page.html',
  styleUrls: ['./banco-perguntas.page.scss'],
})
export class BancoPerguntasPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss_modal(){
    this.modalCtrl.dismiss()
  }
}
