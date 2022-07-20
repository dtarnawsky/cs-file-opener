import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Http, HttpDownloadFileResult, HttpResponse } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  public async get(url: string): Promise<any> {
    const options = {
      url
    };
    const result: HttpResponse = await Http.get(options);
    return result.data;
  }

  public async write(data: any, directory: Directory): Promise<string> {
    const result = await Filesystem.writeFile({
      path: 'mypdf.pdf',
      data,
      directory,
      encoding: Encoding.UTF8,
    });
    console.log('written file');
    return result.uri;
  }
}
