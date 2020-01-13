import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from 'src/app/shared/app.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WorkSpaceService{
    constructor(
        private appService: AppService
    ){}
    
    findAllSchemas(connectId): Observable<any[]> {
        const url = `${environment.baseurl}dbs/schemas/${connectId}`;
        return this.appService.getData(url , {});
    }
}