import { NgClass, NgIf, } from '@angular/common';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {DniComponent} from './dni/dni.component'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf,DniComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy{

  formularioContacto: FormGroup
  usuarioActivo: string = 'Pedro'
  tipoDni: string = 'DNI'

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tipoDni: ['']
    })
  } 
  
  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value=>{
      this.tipoDni = value
    })
  }
  ngOnDestroy(): void {
    console.log('Destruido')
  }
  hasErrors(controlName: string, errorType: string) {
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched  
  }

  enviar(){
    console.log(
      this.formularioContacto.value
    ) 
  }

  // public user: any = {
  //   name: '',
  //   email: ''
  // }

  // enviar(){
  //   console.log(this.user)
  // }
}
