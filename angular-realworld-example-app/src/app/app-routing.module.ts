import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "./app.routes";
import { APP_BASE_HREF } from "@angular/common";

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  exports: [RouterModule],
})
export class AppRoutingModule {}
