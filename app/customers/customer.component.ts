import { Component } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent  {

    customerForm: FormGroup;
    customer: Customer= new Customer();

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }

    ngOnInit() : void {
        this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            email: new FormControl(),
            sendCatalog: new FormControl(),
            addressType: new FormControl(),
            street1: new FormControl(),
            street2: new FormControl(),
            city: new FormControl(),
            state: new FormControl(),
            zip: new FormControl(),

        });
    }
 }
