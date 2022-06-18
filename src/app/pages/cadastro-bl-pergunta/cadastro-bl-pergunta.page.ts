import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-bl-pergunta',
  templateUrl: './cadastro-bl-pergunta.page.html',
  styleUrls: ['./cadastro-bl-pergunta.page.scss'],
})
export class CadastroBlPerguntaPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.new_block_FormGroup = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(14)]),
      descricao: new FormControl('', [Validators.maxLength(45)])
    })
  }
  new_block_FormGroup: FormGroup

  submit_modal(){
    console.log(this.new_block_FormGroup.value)
    this.dismiss_modal()
  }


  dismiss_modal(){
    this.new_block_FormGroup.disable()
    this.modalCtrl.dismiss()
  }


}
