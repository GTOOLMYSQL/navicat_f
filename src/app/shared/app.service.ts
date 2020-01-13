import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http: HttpClient) { }
  options: any = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    withCredentials: true
  };
  /**
   *
   * @param url 地址
   * @param params 参数
   */
  getData(url, params): any {
    url = url + new HttpParams(params);
    return this.http.get(url, this.options);
  }
  getDataNoCors(url, params) {
    url = url + new HttpParams(params);
    return this.http.get(url, { ...this.options, withCredentials: false });
  }

  /**
   *
   * @param url 地址
   * @param data body里面的数据
   * @param params url参数
   */
  postData(url, params, data) {
    url = url + new HttpParams(params);
    return this.http.post(url, data, this.options);
  }
  postDataNoCors(url, params, data) {
    url = url + new HttpParams(params);
    return this.http.post(url, data, {
      ...this.options,
      withCredentials: false
    });
  }

  jsonP() { }
}
