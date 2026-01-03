# Copilot instructions — Eligibility Console (Angular)

Summary
- This is an Angular 20 app (standalone lazy-loaded components) for the Eligibility Console UI. Key integrations: Keycloak for auth (`keycloak-angular`), an API backend referenced via `environment.apiUrl`, and common UI libs (ngx-bootstrap, PrimeNG, ngx-toastr).

Quick dev commands
- npm install
- npm start (alias: `ng serve`) — dev server at http://localhost:4200
- npm run build — production build (uses `environment.prod.ts` values)
- npm run watch — continuous dev build
- npm test — Karma + Jasmine
- npm run lint — ESLint (angular-eslint)

Where to look / big picture
- UI features: `src/app/features/*` (feature folders contain components and pages; routes are configured in `src/app/app.routes.ts` using lazy `loadComponent`).
- Cross-cutting services/models/constants: `src/app/core` (services, guards, `core/model`, `core/constants`).
- Shared components/utilities: `src/app/shared` (shared UI helpers and data).
- Environment and auth: `src/environments/*` (API and Keycloak values); Keycloak setup in `src/app/app.config.ts` (see `provideKeycloak` and `INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG`).
- Public assets: `public/silent-check-sso.html` is used by Keycloak silent SSO.

API & backend conventions (how to add/read calls)
- Use `ApiRequestService` (`src/app/core/service/globals/api-request.service.ts`) for all HTTP calls. It centralizes base URL (`environment.apiUrl`), headers, and pagination helpers.
- Endpoints constants live in `src/app/core/constants/endpoints.constant.ts` (e.g., `url_path.PARTENAIRES`). Add new constants there and use services to wrap calls.
- Pagination: use `getByPage({ endpoint, paginationData })` and the `ApiPaginatedResponse<T>` model for typed paginated responses.

Authentication / Authorization
- Keycloak is configured in `src/app/app.config.ts` (onLoad: `login-required`, silent SSO configured). Use `Keycloak` token for requests — an interceptor (`auth.interceptor.ts`) injects the Bearer token into requests for API host patterns.
- Route guards: `src/app/core/guard/auth.guard.ts` exports helpers like `canActivateAuthRole` to protect routes and validate roles.

UI patterns and conventions
- Reactive forms are standard (`FormBuilder` + `FormGroup`). Validation uses `Validators` and `markAllAsTouched()` on save failure.
- Modals: `ngx-bootstrap` `BsModalService` is commonly used; components use `modalRef?.hide()` in success callbacks.
- Toasts: use `ToastService` (`src/app/core/service/globals/toast.service.ts`) for user feedback — success/error toast then reloading data (e.g., `this.loadPartenaire()` after success).
- Localization: French locale (`fr-FR`) set in `app.config.ts`.

Routing & component loading
- Routes use standalone lazy-loading (`loadComponent`) in `app.routes.ts`.
- Add new feature routes under the `children` array of the features route and follow the role guard pattern when needed.

Testing & lint
- Unit tests run via `ng test` (Karma + Jasmine). Run `npm run lint` and fix ESLint issues before PR.

Troubleshooting tips
- If auth fails: check `silent-check-sso.html`, `environment.*.ts` Keycloak config, and network requests for the `Authorization` header. The interceptor appends the token for calls matching the configured host.
- API errors: `ApiRequestService` sets JSON headers — CORS must be enabled by the server. Do not rely on client-side CORS headers to solve server CORS issues.
- Use `environment.*.ts` files to switch API URL and Keycloak values for int/rec/prod.

Code examples (patterns to mimic)
- Save + feedback + reload example (from `PartnerlistComponent`):
  - call service (e.g., `this._partnerAPI.save(partnerData)`)
  - on success: `toastService.success(...).onHidden.subscribe(() => { modalRef?.hide(); initFormElement(true); loadPartenaire(); })`
  - on error: `toastService.error(...)` and surface `apiCallError` for form feedback
- Add API call pattern: create a service wrapper in `src/app/core/service` that calls `ApiRequestService` with `url_path.*` constants.

PR guidance for Copilot agents
- Keep changes focused; update `README.md` when adding/changing npm scripts.
- Update `src/environments/*` or document needed env vars in the README when backend or Keycloak configuration changes.
- Add unit tests for business logic or service behavior when modifying behavior; run `npm test` locally.

Where to look for more patterns
- `src/app/core/service/*` — canonical service patterns and HTTP conventions
- `src/app/features/partenaires/partnerlist/partnerlist.component.ts` — representative CRUD + form/modal/toast pattern
- `src/app/app.config.ts` — auth, interceptors, providers, locale

If you'd like, I can open a draft PR with this file; tell me if you'd prefer more/less detail or additional examples (e.g., more code snippets).