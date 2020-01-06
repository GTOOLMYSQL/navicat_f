import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageRoutingModule } from "./page-routing.module";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { ConnectComponent } from "./connect/connect.component";
import { SharedModule } from "../shared/shared.module";
import { ConnectListComponent } from './connect/connect-list/connect-list.component';
import { ConnectFormComponent } from './connect/connect-form/connect-form.component';

@NgModule({
  declarations: [WorkspaceComponent, ConnectComponent, ConnectListComponent, ConnectFormComponent],
  imports: [CommonModule, PageRoutingModule, SharedModule]
})
export class PageModule {}
