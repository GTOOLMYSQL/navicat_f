import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ConnectService } from "../connect.service";

@Component({
  selector: "app-connect-form",
  templateUrl: "./connect-form.component.html",
  styleUrls: ["./connect-form.component.less"]
})
export class ConnectFormComponent implements OnInit {
  connectForm: FormGroup;
  submiting: boolean;
  constructor(
    private fb: FormBuilder,
    private connectService: ConnectService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.connectForm = this.fb.group({
      name: ["", [Validators.required]],
      port: ["", [Validators.required]],
      dbName: ["", [Validators.required]],
      ip: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      sourceDesc: ["", []]
    });
  }

  createConnect() {
    this.submiting = true;
    const value = this.connectForm.value;
    const obserable = this.connectService.addConnect(value);
    obserable.subscribe(result => {
      console.log(result);
      this.submiting = false;
    }, (error) => {
        console.log(error);
    });
  }
}
