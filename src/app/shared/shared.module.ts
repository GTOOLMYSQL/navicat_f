import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { ReactiveFormsModule } from '@angular/forms';

const COMMON_MODULE = [NgZorroAntdModule, CommonModule,ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [...COMMON_MODULE],
  exports: [...COMMON_MODULE]
})
export class SharedModule {}
