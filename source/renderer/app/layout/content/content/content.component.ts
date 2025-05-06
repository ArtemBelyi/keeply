import { Component } from '@angular/core';
import { KdbxService } from "../../../services/kdbx.service";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  private readonly path: string = "D:/test_database.kdbx";
  private readonly password: string = "qwerty";

  constructor(private readonly kdbxService: KdbxService) {
  }

  public connectToBd() {
    this.kdbxService.openDatabase(this.path, this.password).then(res => console.log(res));
  }

}
