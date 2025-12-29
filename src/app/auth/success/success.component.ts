import { Component, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../../shared/routes/routes';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrl: './success.component.scss',
    imports: [CommonModule,RouterLink]
})
export class SuccessComponent {
  public routes = routes;
  constructor(private router: Router,
    private renderer: Renderer2
  ){}
  navigation(){
    this.router.navigate([routes.loginpro])
  }
  ngOnInit():void{
    this.renderer.addClass(document.body,'bg-white');
  }
  ngOnDestroy():void{
    this.renderer.removeClass(document.body,'bg-white');
  }
}
