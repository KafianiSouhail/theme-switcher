import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from './modules/core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'adalyfe-switch-mode';
  isDarkMode!:BehaviorSubject<any>;
  constructor
  (
    private __themeService:ThemeService
  )
  {}

  ngOnInit(): void {
    this.isDarkMode = this.__themeService.isdarkModeChoosen$; 
  }
}
