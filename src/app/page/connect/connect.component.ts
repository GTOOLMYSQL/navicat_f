import { Component, OnInit } from "@angular/core";
import { ConnectService } from "./connect.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-connect",
  templateUrl: "./connect.component.html",
  styleUrls: ["./connect.component.less"]
})
export class ConnectComponent implements OnInit {
  constructor(
  ) {
  }

  ngOnInit() {}
}
