import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { blocos } from '../interfaces/blocos_int';
import { bloco } from '../interfaces/bloco_int';
import {format } from 'date-fns'
@Component({
  selector: 'app-cadastro-bl-pergunta',
  templateUrl: './cadastro-bl-pergunta.page.html',
  styleUrls: ['./cadastro-bl-pergunta.page.scss'],
})
export class CadastroBlPerguntaPage implements OnInit {

  private prof_matricula: Number

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.new_block_FormGroup = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(14)]),
      descricao: new FormControl('', [Validators.maxLength(45)])
    })
  }
  new_block_FormGroup: FormGroup

  submit_modal(){
    let blocos_localStorage: blocos[] = JSON.parse(localStorage.getItem('blocos'))

    let blocos: blocos = blocos_localStorage.find(mat => mat.prof_matricula == this.prof_matricula)

    let bloco: bloco = {
      id: 0,
      nome: this.new_block_FormGroup.value['nome'],
      data: format(new Date(), 'dd/MM HH:mm'),
      descricao: this.new_block_FormGroup.value['descricao']

    }
    blocos['prof_blocos'].push(Object.assign({}, bloco))
    localStorage.setItem('blocos', JSON.stringify(blocos_localStorage))
    this.dismiss_modal()
  }


  dismiss_modal(){
    this.new_block_FormGroup.disable()
    this.modalCtrl.dismiss()
  }


}
