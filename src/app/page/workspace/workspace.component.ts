import { Component, OnInit } from '@angular/core';
import { WorkSpaceService } from './workspace.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.less']
})
export class WorkspaceComponent implements OnInit {
  tools: any[] = [
    { name: '创建表', icon: 'plus-square' },
    { name: '用户', icon: 'user' },
    { name: '表', icon: 'table' },
    { name: '视图', icon: 'file-search' },
    { name: '函数', icon: 'database' },
    { name: '查询', icon: 'search' },
  ];
  database: any[] = [];
  constructor(
    private workSpaceService: WorkSpaceService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe(({ connectId }) => {
      this.findSchemas(connectId);
    });
  }

  ngOnInit() {
  }

  activeTab(item) {
    for (const tool of this.tools) {
      tool.active = false;
    }
    item.active = true;
  }

  findSchemas(connectId: string) {
    const obserable = this.workSpaceService.findAllSchemas(connectId);
    obserable.subscribe((result: any[]) => {
      this.database = result || [];
    });
  }


}
