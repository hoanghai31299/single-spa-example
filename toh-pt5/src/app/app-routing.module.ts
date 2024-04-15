import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { APP_BASE_HREF } from "@angular/common";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";

const routes: Routes = [
  { path: "**", component: EmptyRouteComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "heroes", component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  exports: [RouterModule],
})
export class AppRoutingModule {}
