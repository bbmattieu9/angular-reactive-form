import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent  {

        constructor(private fb: FormBuilder) {}

    customerForm: FormGroup;
    customer: Customer= new Customer();

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }

    ngOnInit() : void {
        this.customerForm =  this.fb.group({
            firstName: ['',[Validators.required, Validators.minLength(3)]],
            lastName: ['',[Validators.required, Validators.maxLength(50)]],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            sendCatalog: true
        });
    }
 }
