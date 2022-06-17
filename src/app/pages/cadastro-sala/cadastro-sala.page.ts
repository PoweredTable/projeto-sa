import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-sala',
  templateUrl: './cadastro-sala.page.html',
  styleUrls: ['./cadastro-sala.page.scss'],
})
export class CadastroSalaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigate_to_salas(){
    this.router.navigate(['/menu/salas'])
  }

}
