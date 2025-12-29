import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from '../../shared/routes/routes';
import { Router } from '@angular/router';

@Component({
    selector: 'app-two-step-verification',
    templateUrl: './two-step-verification.component.html',
    styleUrl: './two-step-verification.component.scss',
    imports: [CommonModule, RouterLink]
})
export class TwoStepVerificationComponent {
  public routes = routes;

  constructor(
    private router: Router,
    private renderer:Renderer2
  ){}
  navigation(){
    this.router.navigate([routes.index])
  }
  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg-white');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'bg-white');
  }
}
