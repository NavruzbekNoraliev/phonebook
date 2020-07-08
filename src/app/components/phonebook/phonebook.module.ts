import { PhonebookRoutes } from './phonebook.routing';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from 'src/app/shared/shared.module';
import { PhonebookComponent } from './phonebook.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PhonebookRoutes)
  ],
  declarations: [
    PhonebookComponent,
  ]
})
export class PhoneBookModule {}
