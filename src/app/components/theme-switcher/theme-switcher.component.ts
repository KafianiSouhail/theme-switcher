import { Component, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from 'src/app/modules/core/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  isDarkModeChoosen$!:BehaviorSubject<any>;

  constructor
  (
    private __themeService:ThemeService
  ) 
  { }

  ngOnInit(): void {
    this.isDarkModeChoosen$ = this.__themeService.isdarkModeChoosen$;
  }

  toggleTheme(isDarkModeChoosen:boolean){
    this.__themeService.toggleTheme(isDarkModeChoosen);
  }


}
