import { PhonebookRoutes } from './phonebook.routing';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from 'src/app/shared/shared.module';
import { ListAllContactsComponent } from './list-all-contacts/list-all-contacts.component';
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
    ContactDetailsComponent,
    ListAllContactsComponent,
  ]
})
export class PhoneBookModule {}
