import { PhonebookComponent } from './components/phonebook/phonebook.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { BlankComponent } from './components/layouts/blank/blank.component';


export const AppRoutes: Routes = [
  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "",
        redirectTo: "phonebook",
        pathMatch: 'full'
      },
      {
        path: "phonebook",
        loadChildren: () => import('./components/phonebook/phonebook.module').then(m => m.PhoneBookModule)
      },
      {
        path: "404",
        component: ErrorComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/404"
  }
]
