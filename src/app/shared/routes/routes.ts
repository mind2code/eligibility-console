export class routes {
    private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }


//partners routes
  public static get partners(): string {
    return this.baseUrl + '/partners';
  }

  public static get partnerDeposit(): string {
    return this.baseUrl + '/partners/recharge';
  }

  //devices routes
  public static get devices(): string {
    return this.baseUrl + '/devices';
  }

  public static get deviceSearch(): string {
    return this.baseUrl + '/devices/recherche';
  }


//auth routes
public static get signin(): string {
  return this.baseUrl + '/signin';
}
public static get signup(): string {
  return this.baseUrl + '/signup';
}

public static get resetPassword(): string {
  return this.baseUrl + '/reset-password';
}
public static get forgotPassword(): string {
  return this.baseUrl + '/forgot-password';
}
public static get success(): string {
  return this.baseUrl + '/success';
}
public static get success2(): string {
  return this.baseUrl + '/success-2';
}
public static get success3(): string {
  return this.baseUrl + '/success-3';
}

// page routes


public static get index(): string {
  return  this.baseUrl + '/dashboard/index';
}


public static get baseUi(): string {
  return this.baseUrl + '/base-ui';
}

public static get admin(): string {
  return this.baseUrl + '/dashboard/admin';
}
public static get employee(): string {
  return this.baseUrl + '/dashboard/employee';
}

public static get superAdmin(): string {
  return this.baseUrl + '/super-admin';
}
public static get superAdminDash(): string {
  return this.superAdmin + '/super-admin-dashboard';
}
public static get superAdminCompanies(): string {
  return this.superAdmin + '/companies';
}
public static get superAdminSubscriptions(): string {
  return this.superAdmin + '/subscriptions';
}
public static get superAdminPackages(): string {
  return this.superAdmin + '/packages';
}
public static get superAdminPackagesGrid(): string {
  return this.superAdmin + '/packages-grid';
}
public static get superAdminDomain(): string {
  return this.superAdmin + '/domain';
}
public static get superAdminPurchaseTransaction(): string {
  return this.superAdmin + '/purchase-transaction';
}
public static get Horizontal(): string {
  return this.baseUrl + '/layout-horizontal';
}
public static get Detached(): string {
  return this.baseUrl + '/layout-detached';
}
public static get Modern(): string {
  return this.baseUrl + '/layout-modern';
}
public static get TwoColumn(): string {
  return this.baseUrl + '/layout-two-column';
}
public static get Hovered(): string {
  return this.baseUrl + '/layout-hovered';
}
public static get Boxed(): string {
  return this.baseUrl + '/layout-boxed';
}
public static get HorizontalSingle(): string {
  return this.baseUrl + '/layout-horizontal-single';
}
public static get HorizontalOverlay(): string {
  return this.baseUrl + '/layout-horizontal-overlay';
}
public static get HorizontalBox(): string {
  return this.baseUrl + '/layout-horizontal-box';
}
public static get MenuAside(): string {
  return this.baseUrl + '/layout-horizontal-sidemenu';
}
public static get Transparent(): string {
  return this.baseUrl + '/layout-vertical-transparent';
}
public static get WithoutHeader(): string {
  return this.baseUrl + '/layout-without-header';
}
public static get RTL(): string {
  return this.baseUrl + '/layout-rtl';
}
public static get Dark(): string {
  return this.baseUrl + '/layout-dark';
}
public static get apps(): string {
  return this.baseUrl + '/application';
}
public static get chat(): string {
  return this.baseUrl + '/application/chats';
}
public static get voicecall(): string {
  return this.baseUrl + '/application/calls/voice-call';
}
public static get videocall(): string {
  return this.baseUrl + '/application/calls/video-call';
}
public static get outgoingcall(): string {
  return this.baseUrl + '/application/calls/outgoing-call';
}
public static get incomingcall(): string {
  return this.baseUrl + '/application/calls/incoming-call';
}
public static get callhistory(): string {
  return this.baseUrl + '/application/calls/call-history';
}
public static get contacts(): string {
  return this.baseUrl + '/application/contacts';
}
public static get calendar(): string {
  return this.baseUrl + '/application/calendar';
}
public static get email(): string {
  return this.baseUrl + '/application/email';
}
public static get todo(): string {
  return this.baseUrl + '/application/todo';
}
public static get notes(): string {
  return this.baseUrl + '/application/notes';
}
public static get kanban(): string {
  return this.baseUrl + '/application/kanban-view';
}
public static get socialFeed(): string {
  return this.baseUrl + '/application/social-feed';
}
public static get todoList(): string {
  return this.baseUrl + '/application/todo-list';
}
public static get filemanager(): string {
  return this.baseUrl + '/application/file-manager';
}
public static get employeeList(): string {
  return this.baseUrl + '/employees/employee-list';
}
public static get employeeGrid(): string {
  return this.baseUrl + '/employees/employee-grid';
}
public static get employeeDetails(): string {
  return this.baseUrl + '/employees/employee-details';
}
public static get policy(): string {
  return this.baseUrl + '/employees/policy';
}
public static get employee_page(): string {
  return this.baseUrl + '/employees/employee-page';
}
public static get holidays(): string {
  return this.baseUrl + '/holidays';
}
public static get leaveadmin(): string {
  return this.baseUrl + '/attendance/leaves/leave-admin';
}
public static get leaveemployee(): string {
  return this.baseUrl + '/attendance/leaves/leave-employee';
}
public static get leavesettings(): string {
  return this.baseUrl + '/attendance/leaves/leave-settings';
}
public static get attendanceadmin(): string {
  return this.baseUrl + '/attendance/attendance-admin';
}
public static get attendanceemployee(): string {
  return this.baseUrl + '/attendance/attendance-employee';
}
public static get departments(): string {
  return this.baseUrl + '/employees/departments';
}
public static get designations(): string {
  return this.baseUrl + '/employees/designations';
}
public static get timesheet(): string {
  return this.baseUrl + '/attendance/timesheet';
}
public static get shiftschedule(): string {
  return this.baseUrl + '/attendance/shift-schedule';
}
public static get overtime(): string {
  return this.baseUrl + '/attendance/overtime';
}
public static get clientGrid(): string {
  return this.baseUrl + '/client/client-grid';
}
public static get clientList(): string {
  return this.baseUrl + '/client/client-list';
}
public static get clientDetails(): string {
  return this.baseUrl + '/client/client-details';
}
public static get projects(): string {
  return this.baseUrl + '/projects';
}

public static get tasks(): string {
  return this.baseUrl + '/projects/tasks';
}
public static get tasksDetails(): string {
  return this.baseUrl + '/projects/task-details';
}
public static get taskboard(): string {
  return this.baseUrl + '/projects/task-board';
}
public static get ticketList(): string {
  return this.baseUrl + '/tickets/ticket-list';
}
public static get ticketGrid(): string {
  return this.baseUrl + '/tickets/ticket-grid';
}
public static get sales(): string {
  return this.baseUrl + '/sales';
}
public static get estimate(): string {
  return this.sales + '/estimates';
}
public static get invoice(): string {
  return this.sales + '/invoices';
}
public static get addInvoice(): string {
  return this.sales + '/add-invoice';
}
public static get editInvoice(): string {
  return this.sales + '/edit-invoice';
}
public static get invoiceDetails(): string {
  return this.sales + '/invoice-details';
}
public static get payments(): string {
  return this.sales + '/payments';
}
public static get expenses(): string {
  return this.sales + '/expenses';
}
public static get providentfund(): string {
  return this.sales + '/provident-fund';
}
public static get taxes(): string {
  return this.sales + '/taxes';
}
// public static get accounting(): string {
//   return this.baseUrl + '/accounting';
// }
public static get categories(): string {
  return this.baseUrl + '/accounting/categories';
}
// public static get subcategory(): string {
//   return this.baseUrl + '/accounting/sub-category';
// }
public static get budgets(): string {
  return this.baseUrl + '/accounting/budgets';
}
public static get budgetexpenses(): string {
  return this.baseUrl + '/accounting/budget-expenses';
}
public static get budgetrevenues(): string {
  return this.baseUrl + '/accounting/budget-revenues';
}
// public static get payroll(): string {
//   return this.baseUrl + '/payroll';
// }
public static get employeesalary(): string {
  return this.baseUrl + '/payroll/employee-salary';
}
public static get payrollAddition(): string {
  return this.baseUrl + '/payroll/payroll-items';
}
public static get payrollOvertime(): string {
  return this.baseUrl + '/payroll/payroll-overtime';
}
public static get payrollDeduction(): string {
  return this.baseUrl + '/payroll/payroll-deduction';
}
public static get payslip(): string {
  return this.baseUrl + '/payroll/payslip';
}
public static get policies(): string {
  return this.baseUrl + '/policies/main';
}
public static get reports(): string {
  return this.baseUrl + '/reports';
}
public static get expensereport(): string {
  return this.reports + '/expenses-report';
}
public static get invoicereport(): string {
  return this.reports + '/invoice-report';
}
public static get paymentsreport(): string {
  return this.reports + '/payment-report';
}
public static get projectreport(): string {
  return this.reports + '/project-report';
}
public static get taskreport(): string {
  return this.reports + '/task-report';
}
public static get userreport(): string {
  return this.reports + '/user-report';
}
public static get employeereport(): string {
  return this.reports + '/employee-report';
}
public static get payslipreport(): string {
  return this.reports + '/payslip-report';
}
public static get attendancereport(): string {
  return this.reports + '/attendance-report';
}
public static get leavereport(): string {
  return this.reports + '/leave-report';
}
public static get dailyreport(): string {
  return this.reports + '/daily-report';
}
// public static get performance(): string {
//   return this.baseUrl + '/performance';
// }
public static get performanceAppraisal(): string {
  return this.baseUrl + '/performance/performance-appraisal';
}
public static get performanceIndicator(): string {
  return this.baseUrl + '/performance/performance-indicator';
}
public static get performanceReview(): string {
  return this.baseUrl + '/performance/performance-review';
}
// public static get crosshairs(): string {
//   return this.baseUrl + '/goals';
// }
public static get goalTracking(): string {
  return this.baseUrl + '/performance/goal-tracking';
}
public static get goalType(): string {
  return this.baseUrl + '/performance/goal-type';
}
// public static get training(): string {
//   return this.baseUrl + '/training';
// }
public static get trainingLists(): string {
  return this.baseUrl + '/trainings/training-list';
}
public static get trainingTypes(): string {
  return this.baseUrl + '/trainings/training-type';
}
public static get trainers(): string {
  return this.baseUrl + '/trainings/trainers';
}
public static get promotion(): string {
  return this.baseUrl + '/promotion';
}
public static get resignation(): string {
  return this.baseUrl + '/resignation';
}
public static get termination(): string {
  return this.baseUrl + '/termination';
}
public static get assetList(): string {
  return this.baseUrl + '/assets/asset-list';
}
public static get assetCategories(): string {
  return this.baseUrl + '/assets/asset-categories';
}
public static get jobs(): string {
  return this.baseUrl + '/jobs';
}
public static get jobsList(): string {
  return this.jobs + '/jobs-list';
}
public static get jobsGrid(): string {
  return this.jobs + '/jobs-grid';
}
public static get userDashboard(): string {
  return this.baseUrl + '/jobs/user-dashboard';
}
public static get jobsdashboard(): string {
  return this.baseUrl + '/jobs/jobs-dashboard';
}
public static get managejobs(): string {
  return this.baseUrl + '/jobs/manage-jobs';
}
public static get manageresumes(): string {
  return this.baseUrl + '/jobs/manage-resumes';
}
public static get shortlist(): string {
  return this.baseUrl + '/jobs/shortlist';
}

public static get jobview(): string {
  return this.baseUrl + '/jobs/job-view';
}
public static get interviewquestions(): string {
  return this.baseUrl + '/jobs/interview-questions';
}
public static get offerapproval(): string {
  return this.baseUrl + '/jobs/offer-approval';
}
public static get experiencelevel(): string {
  return this.baseUrl + '/jobs/experience-level';
}
public static get candidateslist(): string {
  return this.baseUrl + '/candidates/candidates-list';
}
public static get Refferals(): string {
  return this.baseUrl + '/refferals';
}
public static get candidatesGrid(): string {
  return this.baseUrl + '/candidates/candidates-grid';
}
public static get candidatesKanban(): string {
  return this.baseUrl + '/candidates/candidates-kanban';
}
public static get scheduletiming(): string {
  return this.baseUrl + '/jobs/schedule-timing';
}
public static get aptituderesult(): string {
  return this.baseUrl + '/jobs/aptitude-result';
}
public static get appliedcandidates(): string {
  return this.baseUrl + '/jobs/applied-candidates';
}
public static get knowledgebase(): string {
  return this.baseUrl + '/support/knowledgebase';
}
public static get knowledgebaseView(): string {
  return this.baseUrl + '/support/knowledgebase-view';
}
public static get knowledgebaseDetails(): string {
  return this.baseUrl + '/support/knowledgebase-details';
}

public static get activities(): string {
  return this.baseUrl + '/crm/activity';
}
public static get users(): string {
  return this.baseUrl + '/user-management/users';
}
public static get rolesPermissions(): string {
  return this.baseUrl + '/user-management/roles-permissions';
}
public static get Permissions(): string {
  return this.baseUrl + '/user-management/permissions';
}
public static get companysettings(): string {
  return this.baseUrl + '/settings/company-settings';
}

public static get employeeProfile(): string {
  return this.baseUrl + '/employees/employee-profile';
}
public static get clientProfile(): string {
  return this.baseUrl + '/clients/client-profile';
}
public static get loginpro(): string {
  return this.baseUrl + '/login';
}
public static get login2(): string {
  return this.baseUrl + '/login-2';
}
public static get login3(): string {
  return this.baseUrl + '/login-3';
}
public static get registers(): string {
  return this.baseUrl + '/register';
}
public static get registers2(): string {
  return this.baseUrl + '/register-2';
}
public static get registers3(): string {
  return this.baseUrl + '/register-3';
}
public static get forgotpassword(): string {
  return this.baseUrl + '/forgot-password';
}
public static get forgotpassword2(): string {
  return this.baseUrl + '/forgot-password-2';
}
public static get forgotpassword3(): string {
  return this.baseUrl + '/forgot-password-3';
}
public static get emailverification(): string {
  return this.baseUrl + '/email-verification';
}
public static get emailverification3(): string {
  return this.baseUrl + '/email-verification-3';
}
public static get emailverification2(): string {
  return this.baseUrl + '/email-verification-2';
}
public static get resetpassword(): string {
  return this.baseUrl + '/reset-password';
}
public static get resetpassword2(): string {
  return this.baseUrl + '/reset-password-2';
}
public static get resetpassword3(): string {
  return this.baseUrl + '/reset-password-3';
}
public static get twostepverification(): string {
  return this.baseUrl + '/two-step-verification';
}
public static get twostepverification3(): string {
  return this.baseUrl + '/two-step-verification-3';
}
public static get twostepverification2(): string {
  return this.baseUrl + '/two-step-verification-2';
}
public static get otp(): string {
  return this.baseUrl + '/otp';
}
public static get lockscreen(): string {
  return this.baseUrl + '/lock-screen';
}
public static get error(): string {
  return this.baseUrl + '/error-404';
}
public static get errors(): string {
  return this.baseUrl + '/error-500';
}
public static get subscriptions(): string {
  return this.baseUrl + '/subscriptions';
}
public static get subadmin(): string {
  return this.baseUrl + '/subscriptions/admins';
}
public static get subscribedcompanies(): string {
  return this.baseUrl + '/subscriptions/subscribed-companies';
}
public static get page(): string {
  return this.baseUrl + '/pages';
}
public static get blogs(): string {
  return this.baseUrl + '/blogs';
}
public static get allBlogs(): string {
  return this.blogs + '/all-blogs';
}
public static get blogCategories(): string {
  return this.blogs + '/blog-categories';
}
public static get blogComments(): string {
  return this.blogs + '/blog-comments';
}
public static get blogTags(): string {
  return this.blogs + '/blog-tags';
}
public static get locations(): string {
  return this.baseUrl + '/locations';
}
public static get countries(): string {
  return this.locations + '/countries';
}
public static get states(): string {
  return this.locations + '/states';
}
public static get cities(): string {
  return this.locations + '/cities';
}
public static get testimonials(): string {
  return this.baseUrl + '/testimonials';
}
public static get faq(): string {
  return this.baseUrl + '/faq';
}
public static get search(): string {
  return this.baseUrl + '/pages/search';
}

public static get blankpage(): string {
  return this.baseUrl + '/pages/blank-page';
}
public static get components(): string {
  return this.baseUrl + '/components';
}
public static get forms(): string {
  return this.baseUrl + '/forms';
}
public static get formBasicInputs(): string {
  return this.forms + '/form-elements/form-basic-inputs';
}
public static get formInputsGroups(): string {
  return this.forms + '/form-elements/form-input-groups';
}
public static get formHorizontal(): string {
  return this.forms + '/layouts/form-horizontal';
}
public static get formVertical(): string {
  return this.forms + '/layouts/form-vertical';
}
public static get formMask(): string {
  return this.forms + '/form-elements/form-mask';
}
public static get formValidation(): string {
  return this.forms + '/form-validation';
}
public static get formSelect(): string {
  return this.forms + '/form-elements/form-select';
}
public static get formFileUpload(): string {
  return this.forms + '/form-elements/form-fileupload';
}
public static get formCheckboxRadios(): string {
  return this.forms + '/form-elements/form-checkbox-radios';
}
public static get formWizard(): string {
  return this.forms + '/form-wizard';
}
public static get formPickers(): string {
  return this.forms + '/form-pickers';
}
public static get formElements(): string {
  return this.forms + '/form-elements';
}
public static get formGridGutters(): string {
  return this.forms + '/form-elements/form-grid-gutters';
}
public static get formSelect2(): string {
  return this.forms + '/form-select-2';
}
public static get formFloatingLabels(): string {
  return this.forms + '/layouts/form-floating-labels';
}
public static get tables(): string {
  return this.baseUrl + '/tables';
}
public static get basictables(): string {
  return this.baseUrl + '/table/tables-basic';
}
public static get datatables(): string {
  return this.baseUrl + '/table/data-tables';
}
public static get userAssetsDetails(): string {
  return this.baseUrl + '/assets/user-assets-details';
}
public static get assetsDetails(): string {
  return this.baseUrl + '/assets/assets-details';
}
public static get adminDashboard(): string {
  return this.baseUrl + '/dashboard/admin';
}
public static get jobAptitude(): string {
  return this.baseUrl + '/jobs/job-aptitude';
}
public static get mailView(): string {
  return this.baseUrl + '/application/mailview';
}
public static get compose(): string {
  return this.baseUrl + '/application/compose';
}
public static get projectView(): string {
  return this.baseUrl + '/projects/project-view';
}
public static get jobDetails(): string {
  return this.baseUrl + '/jobs/jobs-details';
}
public static get userAllJobs(): string {
  return this.baseUrl + '/jobs/user-all-jobs';
}
public static get savedJobs(): string {
  return this.baseUrl + '/jobs/saved-jobs';
}
public static get appliedJobs(): string {
  return this.baseUrl + '/jobs/applied-jobs';
}
public static get interviewJobs(): string {
  return this.baseUrl + '/jobs/interview-jobs';
}
public static get offeredJobs(): string {
  return this.baseUrl + '/jobs/offered-jobs';
}
public static get visitedJobs(): string {
  return this.baseUrl + '/jobs/visited-jobs';
}
public static get archivedJobs(): string {
  return this.baseUrl + '/jobs/archived-jobs';
}
public static get projectList(): string {
  return this.baseUrl + '/projects/project-list';
}
public static get projectGrid(): string {
  return this.baseUrl + '/projects/project-grid';
}
public static get projectDetails(): string {
  return this.baseUrl + '/projects/project-details';
}
public static get jobList(): string {
  return this.baseUrl + '/jobs/jobs-list';
}
public static get jobGrid(): string {
  return this.baseUrl + '/jobs/jobs-grid';
}
public static get advancedUi(): string {
  return this.baseUrl + '/advanced-ui';
}
public static get ribbon(): string {
  return this.advancedUi + '/ui-ribbon';
}
public static get clipboards(): string {
  return this.advancedUi + '/ui-clipboard';
}
public static get dragDrop(): string {
  return this.advancedUi + '/ui-drag-drop';
}
public static get rating(): string {
  return this.advancedUi + '/ui-rating';
}
public static get textEditor(): string {
  return this.advancedUi + '/ui-text-editor';
}
public static get counter(): string {
  return this.advancedUi + '/ui-counter';
}
public static get scrollbar(): string {
  return this.advancedUi + '/ui-scrollbar';
}
public static get notification(): string {
  return this.advancedUi + '/notification';
}
public static get stickyNote(): string {
  return this.advancedUi + '/sticky-note';
}
public static get timeline(): string {
  return this.advancedUi + '/ui-timeline';
}
public static get uiSortable(): string {
  return this.baseUi + '/ui-sortable';
}
public static get uiSwiper(): string {
  return this.baseUi + '/ui-swiper';
}
public static get horizontal(): string {
  return this.advancedUi + '/horizontal-timeline';
}
public static get charts(): string {
  return this.baseUrl + '/charts';
}
public static get apexChart(): string {
  return this.charts + '/apex-charts';
}
public static get ngTwoCharts(): string {
  return this.charts + '/ng2-charts';
}
public static get icon(): string {
  return this.baseUrl + '/icon';
}
public static get leaflet(): string {
  return this.baseUrl + '/maps/leaflets';
}
public static get fontawesome(): string {
  return this.icon + '/icon-fontawesome';
}
public static get tabler(): string {
  return this.icon + '/icon-tabler';
}
public static get remix(): string {
  return this.icon + '/icon-remix';
}
public static get bootstrap(): string {
  return this.icon + '/icon-bootstrap';
}
public static get feather(): string {
  return this.icon + '/icon-feather';
}
public static get ionic(): string {
  return this.icon + '/icon-ionic';
}
public static get material(): string {
  return this.icon + '/icon-material';
}
public static get pe7(): string {
  return this.icon + '/icon-pe7';
}
public static get themify(): string {
  return this.icon + '/icon-themify';
}
public static get typicon(): string {
  return this.icon + '/icon-typicon';
}
public static get weather(): string {
  return this.icon + '/icon-weather';
}
public static get simpleLine(): string {
  return this.icon + '/icon-simple-line';
}
public static get flag(): string {
  return this.icon + '/icon-flag';
}
public static get alert(): string {
  return this.baseUi + '/ui-alerts';
}
public static get accordions(): string {
  return this.baseUi + '/ui-accordion';
}
public static get avatar(): string {
  return this.baseUi + '/ui-avatar';
}
public static get badges(): string {
  return this.baseUi + '/ui-badges';
}
public static get border(): string {
  return this.baseUi + '/ui-borders';
}

public static get buttons(): string {
  return this.baseUi + '/ui-buttons';
}
public static get buttonGroup(): string {
  return this.baseUi + '/ui-buttons-group';
}
public static get breadcrumb(): string {
  return this.baseUi + '/ui-breadcrumb';
}
public static get cards(): string {
  return this.baseUi + '/ui-cards';
}
public static get carousel(): string {
  return this.baseUi + '/ui-carousel';
}
public static get dropDown(): string {
  return this.baseUi + '/ui-dropdowns';
}
public static get grid(): string {
  return this.baseUi + '/ui-grid';
}
public static get images(): string {
  return this.baseUi + '/ui-images';
}
public static get lightBox(): string {
  return this.baseUi + '/ui-lightbox';
}
public static get media(): string {
  return this.baseUi + '/ui-media';
}
public static get modal(): string {
  return this.baseUi + '/ui-modals';
}
public static get offcanvas(): string {
  return this.baseUi + '/ui-offcanvas';
}
public static get pagination(): string {
  return this.baseUi + '/ui-pagination';
}
public static get placeholder(): string {
  return this.baseUi + '/ui-placeholders';
}
public static get popover(): string {
  return this.baseUi + '/ui-popover';
}
public static get progressBars(): string {
  return this.baseUi + '/ui-progress';
}
public static get rangeSlider(): string {
  return this.baseUi + '/ui-rangeslider';
}
public static get spinner(): string {
  return this.baseUi + '/ui-spinner';
}
public static get tabs(): string {
  return this.baseUi + '/ui-tabs';
}
public static get sweetAlert(): string {
  return this.baseUi + '/ui-sweet-alerts';
}
public static get toasts(): string {
  return this.baseUi + '/ui-toasts';
}
public static get tooltip(): string {
  return this.baseUi + '/ui-tooltips';
}
public static get typography(): string {
  return this.baseUi + '/ui-typography';
}
public static get video(): string {
  return this.baseUi + '/ui-video';
}
public static get crm(): string {
  return this.baseUrl + '/crm';
}
public static get pipeline(): string {
  return this.crm + '/pipeline';
}
public static get deals(): string {
  return this.crm + '/deals';
}
public static get dealsDetails(): string {
  return this.crm + '/deals/deals-details';
}
public static get dealsDashboard(): string {
  return this.baseUrl + '/dashboard/deals';
}
public static get leadDashboard(): string {
  return this.baseUrl + '/dashboard/leads';
}
public static get ticketDetails(): string {
  return this.baseUrl + '/tickets/ticket-details';
}
public static get contact(): string {
  return this.baseUrl + '/contact';
}
public static get contactDetails(): string {
  return this.crm + '/contact/contacts-details';
}
public static get contactList(): string {
  return this.crm + '/contact/contacts-list';
}
public static get contactGrid(): string {
  return this.crm + '/contact/contacts-grid';
}
public static get companies(): string {
  return this.crm + '/company/companies';
}
public static get companiesList(): string {
  return this.crm + '/company/companies-list';
}
public static get companiesGrid(): string {
  return this.crm + '/company/companies-grid';
}
public static get companyDetails(): string {
  return this.crm + '/company/company-details';
}
public static get analytics(): string {
  return this.crm + '/analytics';
}
public static get dealsList(): string {
  return this.crm + '/deals/deals-list';
}
public static get leadsGrid(): string {
  return this.crm + '/leads/leads-grid';
}
public static get dealsGrid(): string {
  return this.crm + '/deals/deals-grid';
}
public static get leadsList(): string {
  return this.crm + '/leads/leads-list';
}
public static get leadsDetails(): string {
  return this.crm + '/leads/leads-details';
}
public static get leads(): string {
  return this.crm + '/leads/leads-list';
}
public static get companySubscriptions(): string {
  return this.baseUrl + '/subscriptions/company';
}
public static get emailview(): string {
  return this.baseUrl + '/application/mailview';
}
public static get color(): string {
  return this.baseUi + '/ui-colors';
}

public static get chartPrime(): string {
  return this.charts + '/prime-ng';
}
public static get horizontalTimeline(): string {
  return this.forms + '/horizontal-timeline';
}


public static get changePassword(): string {
  return this.baseUrl + '/change-password';
}

public static get layoutDefault(): string {
  return this.baseUrl + '/layout-default';
}
public static get layoutRtl(): string {
  return this.baseUrl + '/layout-rtl';
}
public static get layoutBox(): string {
  return this.baseUrl + '/layout-box';
}
public static get layoutDark(): string {
  return this.baseUrl + '/layout-dark';
}
public static get generalSettings(): string {
  return this.baseUrl + '/settings/general-settings';
}
public static get websiteSettings(): string {
  return this.baseUrl + '/settings/website-settings';
}
public static get appSettings(): string {
  return this.baseUrl + '/settings/app-settings';
}
public static get systemSettings(): string {
  return this.baseUrl + '/settings/system-settings';
}
public static get financialSettings(): string {
  return this.baseUrl + '/settings/financial-settings';
}
public static get otherSettings(): string {
  return this.baseUrl + '/settings/other-settings';
}
public static get profileSettings(): string {
  return this.generalSettings + '/profile-settings';
}
public static get securitySettings(): string {
  return this.generalSettings + '/security-settings';
}
public static get notificationSettings(): string {
  return this.generalSettings + '/notification-settings';
}
public static get connectedApps(): string {
  return this.generalSettings + '/connected-apps';
}
public static get bussinessSettings(): string {
  return this.websiteSettings + '/bussiness-settings';
}
public static get seoSettings(): string {
  return this.websiteSettings + '/seo-settings';
}
public static get localizationSettings(): string {
  return this.websiteSettings + '/localization-settings';
}
public static get prefixes(): string {
  return this.websiteSettings + '/prefixes';
}
public static get preferences(): string {
  return this.websiteSettings + '/preferences';
}
public static get appearance(): string {
  return this.websiteSettings + '/appearance';
}
public static get language(): string {
  return this.websiteSettings + '/language';
}
public static get addLanguage(): string {
  return this.websiteSettings + '/add-language';
}
public static get languageWeb(): string {
  return this.websiteSettings + '/language-web';
}
public static get authenticationSettings(): string {
  return this.websiteSettings + '/authentication-settings';
}
public static get aiSettings(): string {
  return this.websiteSettings + '/ai-settings';
}
public static get salarySettings(): string {
  return this.appSettings + '/salary-settings';
}
public static get approvalSettings(): string {
  return this.appSettings + '/approval-settings';
}
public static get invoiceSettings(): string {
  return this.appSettings + '/invoice-settings';
}
public static get leaveType(): string {
  return this.appSettings + '/leave-type';
}
public static get customFields(): string {
  return this.appSettings + '/custom-fields';
}
public static get emailSettings(): string {
  return this.systemSettings + '/email-settings';
}
public static get emailTemplate(): string {
  return this.systemSettings + '/email-template';
}
public static get smsSettings(): string {
  return this.systemSettings + '/sms-settings';
}
public static get smsTemplate(): string {
  return this.systemSettings + '/sms-template';
}
public static get otpSettings(): string {
  return this.systemSettings + '/otp-settings';
}
public static get gdpr(): string {
  return this.systemSettings + '/gdpr';
}
public static get maintenanceMode(): string {
  return this.systemSettings + '/maintenance-mode';
}
public static get paymentGateways(): string {
  return this.financialSettings + '/payment-gateways';
}
public static get taxRates(): string {
  return this.financialSettings + '/tax-rates';
}
public static get currencies(): string {
  return this.financialSettings + '/currencies';
}
public static get customCss(): string {
  return this.otherSettings + '/custom-css';
}
public static get customjs(): string {
  return this.otherSettings + '/custom-js';
}
public static get cronjob(): string {
  return this.otherSettings + '/cronjob';
}
public static get cronjobSchedule(): string {
  return this.otherSettings + '/cronjob-schedule';
}
public static get storagesettings(): string {
  return this.otherSettings + '/storage-settings';
}
public static get banIpaddress(): string {
  return this.otherSettings + '/ban-ip-address';
}
public static get backup(): string {
  return this.otherSettings + '/backup';
}
public static get clearcache(): string {
  return this.otherSettings + '/clear-cache';
}
public static get starter(): string {
  return this.baseUrl + '/starter';
}
public static get profile(): string {
  return this.baseUrl + '/profile';
}
public static get gallery(): string {
  return this.baseUrl + '/gallery';
}
public static get timeLine(): string {
  return this.baseUrl + '/timeline';
}
public static get pricing(): string {
  return this.baseUrl + '/pricing';
}
public static get apiKeys(): string {
  return this.baseUrl + '/api-keys';
}
public static get comingSoon(): string {
  return this.baseUrl + '/coming-soon';
}
public static get underMaintanance(): string {
  return this.baseUrl + '/under-maintenance';
}
public static get underConstruction(): string {
  return this.baseUrl + '/under-construction';
}
public static get searchResult(): string {
  return this.baseUrl + '/search-result';
}
public static get terms(): string {
  return this.baseUrl + '/terms-condition';
}
public static get privacy(): string {
  return this.baseUrl + '/privacy-policy';
}



}
