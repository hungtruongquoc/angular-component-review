import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {FormsModule} from "@angular/forms";
import {JokeApiService} from "./services/JokeApiService";
import {HighlightedDirectives} from "./directives/highlighted.directives";
import {CustomUpperCasePipe} from "./pipes/upper_case.pipe";
import { StoreModule } from '@ngrx/store';
import {themeReducer} from "./store/theme.reducer";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HighlightedDirectives,
    CustomUpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Required to use ngModel,
    HttpClientModule, StoreModule.forRoot({theme: themeReducer})
  ],
  providers: [JokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
