import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib'
import { tap, map } from 'rxjs/operators'

interface Link extends ScullyRoute {
  title: string
}
const getLink = (route: ScullyRoute): Link => {
  console.log(route)
  return {
    title: route.route === '/' ? 'トップ' : route?.title || '',
    ...route
  }
}

@Component({
  selector: 'app-top',
  standalone: true,
  templateUrl: './top.component.html',
  imports: [
    CommonModule, RouterModule
  ],
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  scullyRoutesSv = inject(ScullyRoutesService)

  links$ = this.scullyRoutesSv.available$.pipe(
    map((routes) => {
      return routes.map(getLink)
    })
  )
}
