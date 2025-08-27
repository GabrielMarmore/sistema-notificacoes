import { Injectable } from "@nestjs/common";

@Injectable()
export class StatusService {
  private statusMap = new Map<string, string>();

  pegarStatus(id: string) {
    return this.statusMap.get(id);
  }

  setarStatus(id: string, status: string) {
    this.statusMap.set(id, status);
  }
}
