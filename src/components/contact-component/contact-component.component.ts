import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css'],
})
export class ContactComponentComponent {
  title = 'Contact Us';

  onSubmit(form: any) {
    console.log('Form submitted', form.value);
    alert('Form submitted');
    alert(
      'Name: ' +
        form.value.name +
        ' Email: ' +
        form.value.email +
        ' Message: ' +
        form.value.message
    );
    form.resetForm();
  }
}
