import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent }   from './CustomerComponent';
import {FormsModule} from "@angular/forms"

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [CustomerComponent],
    bootstrap: [CustomerComponent]
})
export class CustomerModuleLibrary { }
