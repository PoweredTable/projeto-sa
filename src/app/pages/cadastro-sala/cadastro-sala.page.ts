import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-sala',
  templateUrl: './cadastro-sala.page.html',
  styleUrls: ['./cadastro-sala.page.scss'],
})
export class CadastroSalaPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  new_class_FormGroup: FormGroup;

  ngOnInit() {
    this.new_class_FormGroup = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(14)]),
      turno: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.maxLength(25)])
    })
  }

  submit_modal(){
    console.log(this.new_class_FormGroup.value)
  }


  dismiss_modal(){
    this.modalCtrl.dismiss()
  }

}
