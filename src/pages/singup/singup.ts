import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.formGroup = this.formBuilder.group({
      nome: ['Meu nome é Ari e eu não to nem ai', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['michaelkyle@gmail.com', [Validators.required, Validators.email]],
      tipo: ['1', [Validators.required]],
      cpfOuCnpj: ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha: ['123', [Validators.required]],
      logradouro: ['Eu, a patroa e as crianças', [Validators.required]],
      numero: ['25', [Validators.required]],
      complemento: ['hum! é mesmo?', []],
      bairro: ['patroa', []],
      cep: ['10828333', [Validators.required]],
      telefone1: ['40028922', [Validators.required]],
      telefone2: ['', []],
      telefone3: ['', []],
      estadoId: [null, [Validators.required]],
      cidadeId: [null, [Validators.required]]
    });
  }
  signupUser() {
    console.log("enviou o form");
  }
}