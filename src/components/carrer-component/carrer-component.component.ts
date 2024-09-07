import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrer-component',
  templateUrl: './carrer-component.component.html',
  styleUrls: ['./carrer-component.component.css'],
})
export class CarrerComponentComponent {
  title: string = 'Reactive Form';

  reactiveForm: FormGroup;

  constructor(private reactiveFormBuilder: FormBuilder) {
    this.reactiveForm = this.reactiveFormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  onSubmit() {
    console.log('Form submitted', this.reactiveForm.value);
    console.log(this.reactiveForm);
    alert('Form submitted');
    alert(
      'Name: ' +
        this.reactiveForm.value.name +
        ' Email: ' +
        this.reactiveForm.value.email +
        ' Phone: ' +
        this.reactiveForm.value.phone +
        ' Message: ' +
        this.reactiveForm.value.message
    );
    this.reactiveForm.reset();
  }
}
