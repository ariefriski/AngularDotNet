import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    NavbarComponent,
    PropertyListComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
