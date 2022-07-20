import { Component } from '@angular/core';
import { FileService } from '../file.service';
import { Directory } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  smallFile = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

  constructor(
    private fileService: FileService
  ) { }

  async download() {
    const data = await this.fileService.get(this.smallFile);
    const path = await this.fileService.write(data, Directory.Cache);

    (window as any).cordova.plugins.fileOpener2.open(path, 'application/pdf', {
      error: (e) => { console.error(`Error status: ${e.status} ${e.message}`); },
      success: () => { console.log('File opened successfully'); }
    });
  }



}
