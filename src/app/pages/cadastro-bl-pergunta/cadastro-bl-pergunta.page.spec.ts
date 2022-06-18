import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroBlPerguntaPage } from './cadastro-bl-pergunta.page';

describe('CadastroBlPerguntaPage', () => {
  let component: CadastroBlPerguntaPage;
  let fixture: ComponentFixture<CadastroBlPerguntaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroBlPerguntaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroBlPerguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
