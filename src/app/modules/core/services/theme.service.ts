import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {

  isdarkModeChoosen$:BehaviorSubject<any> =  new BehaviorSubject(false);

  constructor() { }

  toggleTheme(isDarkThemeChosen:boolean){
    this.isdarkModeChoosen$.next(isDarkThemeChosen);
  }
}
