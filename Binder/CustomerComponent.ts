import {Component} from "@angular/core"
import {Customer} from "../Model/Customer"

@Component({
    selector: "customer-ui",
    templateUrl : "Customer.html"
})
export class CustomerComponent {
    // binding logic
    currentCustomer: Customer = new Customer();

    customers: Array<Customer> = new Array<Customer>();
    Add() {
        this.customers.push(this.currentCustomer);
        this.currentCustomer = new Customer();
    }
    Select(currentSelected: Customer) {
        this.currentCustomer = Object.assign({},  currentSelected);
    }
    Update(customerSelected: Customer) {
        for (let cust of this.customers) {
            if (cust.CustomerCode == this.currentCustomer.CustomerCode) {
                cust.CustomerName = this.currentCustomer.CustomerName;
                cust.CusomerAmount = this.currentCustomer.CusomerAmount;
            }
                
        }
        this.currentCustomer = new Customer();

    }
    Clear() {
        this.currentCustomer = new Customer();
    }
}