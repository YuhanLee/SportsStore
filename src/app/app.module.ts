import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {StoreModule} from "./store/store.module";

import {HttpModule} from '@angular/http';

@NgModule({
  imports: [BrowserModule, StoreModule, HttpModule],
  declarations:[AppComponent],
  providers:[],
  bootstrap:[AppComponent]
})

export class AppModule {}
