import { ErrorComponent } from './components/error/error.component';
import { BlankComponent } from './components/layouts/blank/blank.component';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { PhonebookComponent } from './components/phonebook/phonebook.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    BlankComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
