import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {FormsModule} from "@angular/forms";
import {JokeApiService} from "./services/JokeApiService";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Required to use ngModel,
    HttpClientModule
  ],
  providers: [JokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
