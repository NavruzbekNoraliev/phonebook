import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [],
  providers: []
})
export class SharedModule { }
