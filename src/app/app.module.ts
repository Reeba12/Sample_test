import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule, routingComponents } from "./app-routing.module";


@NgModule({
    declarations: [ AppComponent,routingComponents ],
    imports: [BrowserModule, BrowserAnimationsModule, MatRadioModule,FormsModule,AppRoutingModule,ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}