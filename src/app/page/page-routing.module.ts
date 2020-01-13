import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConnectComponent } from "./connect/connect.component";
import { ConnectListComponent } from "./connect/connect-list/connect-list.component";
import { ConnectFormComponent } from './connect/connect-form/connect-form.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
  { path: "", redirectTo: "connect", pathMatch: "full" },
  {
    path: "connect",
    component: ConnectComponent,
    data: { title: "连接" },
    children: [
      { path: "", redirectTo: "list", pathMatch: "full" },
      { path: "list", component: ConnectListComponent },
      { path: "form", component: ConnectFormComponent }
    ]
  },
  {
    path: 'workSpace/:connectId', component: WorkspaceComponent, data: {},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
