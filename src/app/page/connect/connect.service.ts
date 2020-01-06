import { Injectable } from "@angular/core";
import { AppService } from "src/app/shared/app.service";
import { environment } from "src/environments/environment";
import { Connect } from "./connect-form/connect";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConnectService {
  constructor(private appService: AppService) {}

  findAllConnect(): Observable<any> {
    const url = `${environment.baseurl}connect/findAll`;
    return this.appService.getData(url, {});
  }

  addConnect(connect: Connect) {
    const url = `${environment.baseurl}connect/addConnect`;
    return this.appService.postData(url, {}, connect);
  }
}
