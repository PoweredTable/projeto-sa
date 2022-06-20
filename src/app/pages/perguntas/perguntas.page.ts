import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { popoverController } from '@ionic/core';
import { BancoPerguntasPage } from '../banco-perguntas/banco-perguntas.page';
import { CadastroBlPerguntaPage } from '../cadastro-bl-pergunta/cadastro-bl-pergunta.page';
import { blocos } from '../interfaces/blocos_int';




@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage implements OnInit {

  usuario_atual: any
  blocos_atuais: blocos

  constructor(private router: Router, private modalCtrl: ModalController, private route:ActivatedRoute) {

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
        this.update_blocos_atuais()
      })
   }

  ngOnInit() {
  }

  private update_blocos_atuais(){
    let blocos: blocos[] = JSON.parse(localStorage.getItem('blocos'))
    this.blocos_atuais = blocos.find(mat=> mat.prof_matricula == this.usuario_atual.matricula)
  }

  async show_modal(){
    const modal = await this.modalCtrl.create({
      component: CadastroBlPerguntaPage,
      componentProps: {
        prof_matricula: this.usuario_atual.matricula
      }
    })
    

    await modal.present()

    const { role } = await modal.onDidDismiss()
    this.update_blocos_atuais()

  }

  navigate_to_banco_perguntas(){
    this.router.navigate(['banco-perguntas'])
  }

  async show_modal_perguntas(){
    const modal = await this.modalCtrl.create({
      component: BancoPerguntasPage
    })

    await modal.present()
    

  }

  navigate_to_perguntas(){
    this.router.navigate(['banco-pergunta'])
  }




}
