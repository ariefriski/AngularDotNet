import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PropertyListComponent,
  },
  {
    path: 'add-property',
    component: AddPropertyComponent,
  },
  {
    path: 'rent-property',
    component: PropertyListComponent,
  },
  {
    path: 'property-detail/:id',
    component: PropertyDetailComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    NavbarComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
