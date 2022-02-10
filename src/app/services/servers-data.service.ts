import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import ServerData from '../model/ServerData.model';

@Injectable({
  providedIn: 'root',
})
export class ServersDataService {
  serversArr: ServerData[];
  serversDataChanged: Subject<ServerData[]>;
  constructor() {
    this.serversDataChanged = new Subject<ServerData[]>();
    this.serversArr = [
      {
        name: 'Amazon server 1',
        status: true,
        desc: 'web server',
        code: 1,
      },
      {
        name: 'Amazon server 2',
        status: true,
        desc: 'web server',
        code: 2,
      },
      {
        name: 'Amazon server 3',
        status: true,
        desc: 'web server',
        code: 3,
      },
      {
        name: 'Amazon server 4',
        status: true,
        desc: 'web server',
        code: 4,
      },
    ];
  }
  updateServerStatus(serverCode: number, status: boolean): void {
    let selectedServer = this.serversArr.find(
      (item) => item.code == serverCode
    );
    selectedServer.status = status;
    this.serversDataChanged.next(this.serversArr);
    // this.serversArr[serverId].status = status;
  }
}
