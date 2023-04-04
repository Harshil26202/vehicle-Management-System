import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerDetailsComponent } from './owner/owner-details/owner-details.component';
import { VehicleDetailsComponent } from './vehicle/vehicle-details/vehicle-details.component';
import { SearchComponent } from './search/search.component';
import { VehicleOperationComponent } from './vehicle/vehicle-operation/vehicle-operation.component';
import { OwnerOperationComponent } from './owner/owner-operation/owner-operation.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerDetailsComponent,
    VehicleDetailsComponent,
    SearchComponent,
    VehicleOperationComponent,
    OwnerOperationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
