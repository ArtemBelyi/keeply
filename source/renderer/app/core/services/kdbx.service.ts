import { Injectable } from '@angular/core';
import { getWindow } from "../../utils/get-window";

@Injectable({
  providedIn: 'root'
})
export class KdbxService {
  async openDatabase(filePath: string, password: string): Promise<any> {
    return getWindow()?.kdbxApi.loadDatabase(filePath, password);
  }
}
