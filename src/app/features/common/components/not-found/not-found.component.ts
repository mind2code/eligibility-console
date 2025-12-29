import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [CommonModule]
})
export class NotFoundComponent {
  constructor(
    private router: Router,
    private renderer:Renderer2
  ){}
  navigation(){
    this.router.navigate(['/dashboard'])
  }
  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg-linear-gradiant');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'bg-linear-gradiant');
  }
}
