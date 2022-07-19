import { Injectable, Inject } from '@angular/core';
import { ENV_CONFIG, EnvironmentConfig } from './environment-config.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public apiUrl: string;

  constructor(
    @Inject(ENV_CONFIG) private config: EnvironmentConfig,
    private http: HttpClient
  ) {
    this.apiUrl = `${config.environment.baseUrl}`;
  }

  getAll<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`);
  }

  postAll<T>(path: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${path}`, data);
  }

  deleteAll<T>(path: string, id: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${path}/${id}`);
  }

  getOne<T>(path: string, id: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}/${id}`);
  }

  editOne<T>(path: string, id: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${path}/${id}`, data);
  }
}
