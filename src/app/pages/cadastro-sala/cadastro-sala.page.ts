import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { turmas } from '../interfaces/turmas_int';
import { turma } from '../interfaces/turma_int';

@Component({
  selector: 'app-cadastro-sala',
  templateUrl: './cadastro-sala.page.html',
  styleUrls: ['./cadastro-sala.page.scss'],
})
export class CadastroSalaPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  new_class_FormGroup: FormGroup;
  private prof_matricula: Number

  ngOnInit() {
    console.log(this.prof_matricula)
    this.new_class_FormGroup = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(14)]),

      turno: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.maxLength(25)])
    })
  }

  submit_modal() {
    let turmas_localStorage: turmas[] = JSON.parse(localStorage.getItem('turmas'))
    let turmas: turmas = turmas_localStorage.find(mat => mat.prof_matricula == this.prof_matricula)

    let turma: turma = {
      id: 0, name: this.new_class_FormGroup.value['nome'],
      shift: this.new_class_FormGroup.value['turno'],
      image: new URL('https://www.gstatic.com/classroom/themes/img_breakfast_thumb.jpg'),
      description: this.new_class_FormGroup.value['descricao']
    }
    turmas['prof_turmas'].push(Object.assign({}, turma))
    localStorage.setItem('turmas', JSON.stringify(turmas_localStorage))
    this.dismiss_modal()
  }


  dismiss_modal() {
    this.modalCtrl.dismiss()
  }

}
