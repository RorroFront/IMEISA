import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  email: string = 'ventas@imeisa.com.mx';
  phone: string = 'tel.+522223375735';

  private FB = inject(FormBuilder);

  contactForm = this.FB.group({

    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])

  });


  onSubmit(){
    if(this.contactForm.valid){
      console.log('formulario válido')
    }
  }



}
