import { Component, OnInit } from "@angular/core";
import { ConnectService } from "../connect.service";
import { Connect } from "../connect-form/connect";

@Component({
  selector: "app-connect-list",
  templateUrl: "./connect-list.component.html",
  styleUrls: ["./connect-list.component.less"]
})
export class ConnectListComponent implements OnInit {
  connects: Connect[] = [];
  constructor(private connectService: ConnectService) {}

  ngOnInit() {
    this.getAllConnection();
  }
  getAllConnection() {
    const obserable = this.connectService.findAllConnect();
    obserable.subscribe(({ data, code, message }) => {
      this.connects = data || [];
    });
  }
}
