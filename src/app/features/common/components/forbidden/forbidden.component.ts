import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrl: './forbidden.component.scss',
  imports: [CommonModule]
})
export class ForbiddenComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private renderer: Renderer2
  ) { }

  navigation() {
    this.router.navigate(['/dashboard/index'])
  }
  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg-linear-gradiant');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'bg-linear-gradiant');
  }
}
