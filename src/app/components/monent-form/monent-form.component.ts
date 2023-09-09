import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/moment';

@Component({
  selector: 'app-monent-form',
  templateUrl: './monent-form.component.html',
  styleUrls: ['./monent-form.component.css']
})
export class MonentFormComponent {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() btnText!: string;

  momentForm!: FormGroup;

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }


  get title(){
    return this.momentForm.get('title')!;
  }

  get description(){
    return this.momentForm.get('description')!;
  }

  onFileSelected(event: any){
    const file: File = event.target.files[0];

    this.momentForm.patchValue({image: file});
  }

  submit(){

    if(this.momentForm.invalid)
    {
      return;
    }
    
    console.log('formulario enviado!');

    this.onSubmit.emit(this.momentForm.value);
  }
}
