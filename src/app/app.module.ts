import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatSortModule } from '@angular/material';
import { OlympicService } from './olympic.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    CdkTableModule
  ],
  providers: [OlympicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
