import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  dismiss_modal(){
    this.modalCtrl.dismiss()
  }
}
