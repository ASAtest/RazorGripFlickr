import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class FlickrService {
  prefix: string;
  api: string;
  apiKey = '395b185c4538e5a1903cb5f2b1bd84f5';

  constructor(private _jsonp: Jsonp, private http: HttpClient) {
    this.prefix = 'https://api.flickr.com/';
    this.api = `services/feeds/photos_public.gne?&api_key=${this.apiKey}&format=json`;
  }

  getFeed() {
    return this._jsonp.get(this.prefix + this.api + '&jsoncallback=JSONP_CALLBACK')
      .map(res => res.json());
  }

}
