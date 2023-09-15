import {Injectable} from '@angular/core';
import { ApiConfig } from '../ApiConfig';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardResource {
  private readonly SERVER_URL = ApiConfig.url + '/auth/signup';
  constructor(private httpClient: HttpClient) {
  }

  public async findAll() {
    return this.httpClient.get(this.SERVER_URL);
  }
}
