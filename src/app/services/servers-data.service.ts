import { Injectable } from '@angular/core';
import ServerData from '../model/ServerData.model';

@Injectable({
  providedIn: 'root',
})
export class ServersDataService {
  serversArr: ServerData[];
  constructor() {
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
  updateServerStatus(serverId: number, status: boolean): void {
    if (serverId < 0 || serverId > this.serversArr.length - 1) {
      return;
    }
    this.serversArr[serverId].status = status;
  }
}
