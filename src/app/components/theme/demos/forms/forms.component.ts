import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  reactiveForm: FormGroup;
  submitted = false;
  model: any = {};

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      firstName: ['', Validators.required, this.preventUrl.bind(this)]
    });
  }

  onTemplateFormSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  onReactiveSubmit() {
    this.submitted = true;
    if (this.reactiveForm.invalid) { return; }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reactiveForm.value));
  }

  preventUrl(control: AbstractControl) {
    return of(control.value.startsWith('http://')).pipe(
      map(result => result ? { preventUrlError: true } : null)
    );
  }

}
