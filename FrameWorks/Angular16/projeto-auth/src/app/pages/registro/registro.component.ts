import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  formRegistro: FormGroup = this.fb.group({
    email:["",[Validators.required, Validators.email]],
    senha:["",[Validators.required, Validators.minLength(6)]]
  })

}
