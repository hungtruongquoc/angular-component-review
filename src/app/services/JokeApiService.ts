import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class JokeApiService {
  constructor(private http: HttpClient) {

  }

  public getJoke(): Observable<any> {
    return this.http.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}})
  }
}
