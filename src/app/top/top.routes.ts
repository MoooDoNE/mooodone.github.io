import { Routes } from '@angular/router'
import { TopComponent } from './top.component'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TopComponent
  },
]
