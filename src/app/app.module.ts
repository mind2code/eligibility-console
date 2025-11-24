import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared-module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {
  includeBearerTokenInterceptor,
} from "keycloak-angular";
import {provideKeycloakAngular} from "./keycloak.config";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./shared/guard/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgScrollbarModule,
  ],
  providers: [
    provideKeycloakAngular(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor, authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
