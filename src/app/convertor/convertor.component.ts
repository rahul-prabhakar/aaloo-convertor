import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss']
})
export class ConvertorComponent implements OnInit {

  source = '';
  constructor(private _electronService: ElectronService) { }

  ngOnInit() {
  }

  doSomething() {
    console.log(this._electronService.isElectronApp);
    this.source = this._electronService.ipcRenderer.sendSync('convert', this.source);
  }

}
