import {Component} from "@angular/core"
import {Customer} from "../Model/Customer"

@Component({
    selector: "customer-ui",
    templateUrl : "Customer.html"
})
export class CustomerComponent {
    // binding logic
    customerobj: Customer = new Customer();
}