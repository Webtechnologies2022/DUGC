import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GetAnalysisService {

  constructor(private dataService: DataService) { }
}
