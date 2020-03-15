import {Injectable} from '@angular/core';
import * as moment from 'moment'
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class DataService {
  public date:BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())
}
