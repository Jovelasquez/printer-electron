import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';
import * as childProcess from 'child_process';
import { printer } from 'printer';

@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  childProcess: typeof childProcess;
  printer: typeof printer;

  constructor() {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.childProcess = window.require('child_process');
      this.printer = window.require('printer');
    }
  }

  isElectron = () => {
    return window && window.process && window.process.type;
  }

  getPrinters(){
    return this.printer.getPrinters();
  }
}
