import { Injectable } from '@angular/core';
import { routes } from '../routes/routes';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiResultFormat, MainMenu, SideBar, SideBarMenu } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private collapseSubject = new BehaviorSubject<boolean>(false);
  collapse$ = this.collapseSubject.asObservable();

  toggleCollapse() {
    this.collapseSubject.next(!this.collapseSubject.value);
  }
  constructor(private http: HttpClient) {}
  public getDataTable(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/data-tables.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getApiData(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/api-data.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCandidatesList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/candidates.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getRefferalsList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/refferals.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getJobList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/job-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getBanAddress(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/ban-address.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getUserManagment(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/user-managment-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getRoles(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/roles.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProvidentFund(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/provident-fund.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPayment(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/payment.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInvoice(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invoice.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getExpenses(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/expenses.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getEstimates(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/estimates.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTaxes(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/taxes.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCompanies(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/companies.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCompany(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/company.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getLeads(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/leads-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPipeline(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/pipeline.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getActivity(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/activity.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getdeals(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/deals-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSubscription(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/subscription.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getContactlist(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/contact-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getClient(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/client.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPackage(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/package-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getChat(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/chat.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getReportUser(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/report-user.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getLanguage(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/language.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getLanguageAdmin(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/language-admin.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getLanguageApp(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/language-app.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getLanguageTranslate(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/language-translate.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getLanguageWeb(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/language-web.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCall(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/admin-call.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStories(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/stories.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getBlockUser(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/block-user.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getBackup(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/backup.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getUserList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/user-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInviteUser(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invite-user.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getAbuseMessage(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/abuse-message.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }

  public getEmployeeList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/employee-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getdepartments(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/department.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getdesignations(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/designation.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getpolicy(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/policy.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }
  public getholiday(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/holidays.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getattendanceadmin(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/attendance-admin.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getattendanceemployee(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/attendance-employee.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }
  public gettimesheet(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/timesheet.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }
  public getovertime(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/overtime.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }
  public getshiftSchedule(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/shift-schedule.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getpromotion(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/promotion.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getresignation(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/resignation.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public gettermination(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/termination.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }
  public gettrainingList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/training-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }
  public gettrainers(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/trainers.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }
  public gettrainingType(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/training-type.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getperformanceIndicator(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/performance-indicator.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getperformanceAppraisal(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/performance-appraisal.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getgoalType(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/goal-type.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getgoalTrack(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/goal-track.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }
  public getleaveAdmin(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/leave-admin.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }
  public getleaveEmployee(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/leave-employee.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getcategories(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/categories.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getbudget(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/budgets.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getbudgetExpense(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/budget-expenses.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getbudgetRevenue(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/budget-revenues.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getemployeeSalary(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/employee-salary.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getpayrollAddition(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/payroll-addition.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getpayrollOvertime(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/payroll-overtime.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getpayrollDeduction(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/payroll-deduction.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getassetList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/asset-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getassetCategories(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/asset-categories.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getattendanceReport(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/attendance-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getdailyReport(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/daily-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getemployeeReport(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/employee-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getexpenseReport(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/expense-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }
  public getProjectList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/project.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getinvoiceReport(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invoice-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getleaveReport(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/leave-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getpaymentReport(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/payment-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getpayslipReport(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/payslip-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getprojectReport(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/project-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public gettaskReport(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/task-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getuserReport(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/user-report.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getpage(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/page.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public gettestimonial(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/testimonial.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getfaq(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/faq.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getblogCategories(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/blog-categories.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getblogComments(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/blog-comments.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getblogTags(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/blog-tags.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getcountries(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/countries.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getcities(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/cities.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getstates(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/states.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public getcallHistory(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/call-history.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    )
  }

  public sideBar2: SideBar[] = [
    {
      tittle: 'Main',
      icon: 'airplay',
      showAsTab: true,
      showMyTab:true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.index,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'smart-home',
          base: 'dashboard',
          materialicons: 'home',
          subMenus: [
            {
              menuValue: 'Admin Dashboard',
              route: routes.index,
              base: 'index',
            },
            {
              menuValue: 'Employee Dashboard',
              route: routes.employee,
              base: 'employee',
            },
            {
              menuValue: 'Deals Dashboard',
              route: routes.dealsDashboard,
              base: 'deals',
            },
            {
              menuValue: 'Leads Dashboard',
              route: routes.leadDashboard,
              base: 'leads',
            },
          ],
        },
        {
          menuValue: 'Application',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'layout-grid-add',
          base: 'application',
          materialicons: 'dashboard',
          subMenus: [
            {
              menuValue: 'Chat',
              route: routes.chat,
              base:'Application',
              base2: 'Chat',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Calls',
              customSubmenuTwo: true,
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.calendar,
              base: 'calls',
              subMenusTwo: [
                {
                  menuValue: 'Voice Call',
                  route: routes.voicecall,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'voice-call',
                },
                {
                  menuValue: 'Video Call',
                  route: routes.videocall,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'video-call',
                },
                {
                  menuValue: 'Outgoing Call',
                  route: routes.outgoingcall,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'outgoing-call',
                },
                {
                  menuValue: 'Incoming Call',
                  route: routes.incomingcall,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'incoming-call',
                },
                {
                  menuValue: 'Call History',
                  route: routes.callhistory,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'call-history',
                },
              ],
            },
            {
              menuValue: 'Calendar',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.calendar,
              customSubmenuTwo: false,
              base:'calender'
            },

            {
              menuValue: 'Email',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.email,
              customSubmenuTwo: false,
              base:'email'
            },
            {
              menuValue: 'To Do',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.todo,
              customSubmenuTwo: false,
              base:'todo'
            },
            {
              menuValue: 'Notes',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.notes,
              customSubmenuTwo: false,
              base:'notes'
            },
            {
              menuValue: 'File Manager',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.filemanager,
              customSubmenuTwo: false,
              base:'file-manager'
            },
            {
              menuValue: 'Kanban',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.kanban,
              customSubmenuTwo: false,
              base:'kanban-view'
            },
            {
              menuValue: 'Invoices',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.invoice,
              customSubmenuTwo: false,
              base:'invoices'
            },
          ],
        },
        {
          menuValue: 'Super Admin',
          route: routes.superAdminDash,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'user-star',
          base: 'super-admin',
          materialicons: 'home',
          subMenus: [
            {
              menuValue: 'Dashboard',
              route: routes.superAdminDash,
              base: 'super-admin-dashboard',
            },
            {
              menuValue: 'Companies',
              route: routes.superAdminCompanies,
              base: 'companies',
            },
            {
              menuValue: 'Subscriptions',
              route: routes.superAdminSubscriptions,
              base: 'deals',
            },
            {
              menuValue: 'Packages',
              route: routes.superAdminPackages,
              base: 'leads',
            },
            {
              menuValue: 'Domain',
              route: routes.superAdminDomain,
              base: 'leads',
            },
            {
              menuValue: 'Purchase Transaction',
              route: routes.superAdminPurchaseTransaction,
              base: 'leads',
            },
          ],
        },
      ],
    },
    {
      tittle: 'Layout',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Layouts',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'layout-board-split',
          base: 'layout-horizontal',
          base2: 'layout-two-column',
          materialicons: 'home',
          subMenus: [
            {
              menuValue: 'Horizontal',
              route: routes.Horizontal,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-horizontal',
            },
            {
              menuValue: 'Detached',
              route: routes.Detached,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'Modern',
              route: routes.Modern,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'Two Column',
              route: routes.TwoColumn,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-two-column',
            },
            {
              menuValue: 'Hovered',
              route: routes.Hovered,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-hovered',
            },
            {
              menuValue: 'Boxed',
              route: routes.Boxed,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'Horizontal Single',
              route: routes.HorizontalSingle,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'Horizontal Overlay',
              route: routes.HorizontalOverlay,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'Horizontal Box',
              route: routes.HorizontalBox,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'Menu Aside',
              route: routes.MenuAside,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'Transparent',
              route: routes.Transparent,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'Without Header',
              route: routes.WithoutHeader,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'RTL',
              route: routes.RTL,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
            {
              menuValue: 'Dark',
              route: routes.Dark,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'crm',
            },
          ],
        },
      ],
    },
    {
      tittle: 'Projects',
      icon: 'layers',
      showAsTab: false,
      separateRoute: false,
      base: 'projects',
      menu: [
        {
          menuValue: 'Projects',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'users-group',
          base: 'client',
          base2:'projects',
          materialicons: 'dashboard',
          subMenus: [
            {
              menuValue: 'Clients',
              route: routes.clientGrid,
              base: 'client',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Projects',
              base: 'project',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Projects',
                  route: routes.projectGrid,
                  base: 'project-grid',
                  base2: 'project-list',
                  base3: 'project-details',
                },
                { menuValue: 'Tasks', route: routes.tasks, base: 'tasks' },
                {
                  menuValue: 'Task Board',
                  route: routes.taskboard,
                  base: 'task-board',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tittle: 'Crm',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Crm',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'user-shield',
          base: 'crm',
          materialicons: 'dashboard',
          subMenus: [
            {
              menuValue: 'Contacts',
              route: routes.contactList,
              base: 'contact',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Companies',
              route: routes.companiesGrid,
              base: 'company',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Deals',
              route: routes.dealsList,
              base: 'deals',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Leads',
              route: routes.leadsList,
              base: 'leads',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Pipeline',
              route: routes.pipeline,
              base: 'pipeline',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Analytics',
              route: routes.analytics,
              base: 'analytics',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Activities',
              route: routes.activities,
              base: 'activities',
              customSubmenuTwo: false,
            },
          ],
        },
      ],
    },
    {
      tittle: 'Hrm',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Hrm',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'user',
          base: 'employees',
          base2:'tickets',
          base3:'holidays',
          base4: 'attendance',
          base5: 'performance',
          base7: 'trainings',
          materialicons: 'dashboard',
          subMenus: [
            {
              menuValue: 'Employees',
              route: routes.employee,
              hasSubRoute: true,
              customSubmenuTwo: true,
              showSubRoute: false,
              base: 'employees',
              subMenusTwo: [
                {
                  menuValue: 'Employees List',
                  route: routes.employeeList,
                  base: 'employees',
                  base2: 'employee-list',
                },
                {
                  menuValue: 'Employees Grid',
                  route: routes.employeeGrid,
                  base: 'employees',
                  base2: 'employee-grid',
                },
                {
                  menuValue: 'Employees Details',
                  route: routes.employeeDetails,
                  base: 'employees',
                  base2: 'employee-details',
                },
                {
                  menuValue: 'Departments',
                  route: routes.departments,
                  base: 'departments',
                },
                {
                  menuValue: 'Designations',
                  route: routes.designations,
                  base: 'designations',
                },
                {
                  menuValue: 'Policies',
                  route: routes.policy,
                  base: 'employees',
                  base2: 'policy',
                },
              ],
            },
            {
              menuValue: 'Tickets',
              route: routes.ticketList,
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              base: 'tickets',
              subMenusTwo: [
                {
                  menuValue: 'Tickets',
                  route: routes.ticketList,
                  base: 'tickets',
                  base2:'ticket-list'
                },
                {
                  menuValue: 'Tickets Detail',
                  route: routes.ticketDetails,
                  base: 'ticket-details',
                },
              ],
            },

            {
              menuValue: 'Holidays',
              route: routes.holidays,
              base: 'holidays',
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Attendance',
              route: routes.attendanceadmin,
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              base: 'attendance',
              subMenusTwo: [
                {
                  menuValue: 'Leaves (Admin)',
                  route: routes.leaveadmin,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base:'leave-admin'
                },
                {
                  menuValue: 'Leaves (Employee)',
                  route: routes.leaveemployee,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Leave Settings',
                  route: routes.leavesettings,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Attendance (Admin)',
                  route: routes.attendanceadmin,
                  base: 'attendance-admin',
                  customSubmenuTwo: false,
                },
                {
                  menuValue: 'Attendance (Employee)',
                  route: routes.attendanceemployee,
                  base: 'attendance-employee',
                  customSubmenuTwo: false,
                },

                {
                  menuValue: 'Timesheet',
                  route: routes.timesheet,
                  base: 'timesheet',
                  customSubmenuTwo: false,
                },
                {
                  menuValue: 'Shift & Schedule',
                  route: routes.shiftschedule,
                  base: 'shift-schedule',
                  customSubmenuTwo: false,
                },
                {
                  menuValue: 'Overtime',
                  route: routes.overtime,
                  base: 'overtime',
                  customSubmenuTwo: false,
                },
              ],
            },
            {
              menuValue: 'Performance',
              route: routes.performanceIndicator,
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              base: 'performance',
              subMenusTwo: [
                {
                  menuValue: 'Performance Indicator',
                  route: routes.performanceIndicator,
                  base: 'indicator',
                },
                {
                  menuValue: 'Performance Review',
                  route: routes.performanceReview,
                  base: 'review',
                },
                {
                  menuValue: 'Performance Appraisal',
                  route: routes.performanceAppraisal,
                  base: 'appraisal',
                },
                {
                  menuValue: 'Goal List',
                  route: routes.goalTracking,
                  base: 'appraisal',
                },
                {
                  menuValue: 'Goal Type',
                  route: routes.goalType,
                  base: 'appraisal',
                },
              ],
            },
            {
              menuValue: 'Training',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              base: 'trainings',
              subMenusTwo: [
                {
                  menuValue: 'Training List',
                  route: routes.trainingLists,
                  base: 'training-list',
                },
                {
                  menuValue: 'Trainers',
                  route: routes.trainers,
                  base: 'trainers',
                },
                {
                  menuValue: 'Training Type',
                  route: routes.trainingTypes,
                  base: 'types',
                },
              ],
            },
            {
              menuValue: 'Promotion',
              route: routes.promotion,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'promotion',
            },
            {
              menuValue: 'Resignation',
              route: routes.resignation,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'resignation',
            },
            {
              menuValue: 'Termination',
              route: routes.termination,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'termination',
            },
          ],
        },
      ],
    },

    {
      tittle: 'Finance & Accounts',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Finance & Accounts',
          route: routes.apps,
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'shopping-cart-dollar',
          base: 'sales',
          base2:'accounting',
          base3:'payroll',
          materialicons: 'dashboard',
          subMenus: [
            {
              menuValue: 'Sales',
              base: 'sales',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Estimates',
                  route: routes.estimate,
                  base: '/sales/estimates',
                },
                {
                  menuValue: 'Invoices',
                  route: routes.invoice,
                  base: '/sales/invoices',
                },
                {
                  menuValue: 'Payments',
                  route: routes.payments,
                  base: '/sales/payments',
                },
                {
                  menuValue: 'Expenses',
                  route: routes.expenses,
                  base: '/sales/expenses',
                },
                {
                  menuValue: 'Provident Fund',
                  route: routes.providentfund,
                  base: '/sales/provident-fund',
                },
                {
                  menuValue: 'Taxes',
                  route: routes.taxes,
                  base: '/sales/taxes',
                },
              ],
            },
            {
              menuValue: 'Accounting',
              base: 'accounting',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Categories',
                  route: routes.categories,
                  base: '/accounting/categories',
                },
                {
                  menuValue: 'Budgets',
                  route: routes.budgets,
                  base: '/accounting/budgets',
                },
                {
                  menuValue: 'Budget Expenses',
                  route: routes.budgetexpenses,
                  base: '/accounting/budget-expenses',
                },
                {
                  menuValue: 'Budget Revenues',
                  route: routes.budgetrevenues,
                  base: '/accounting/budget-revenues',
                },
              ],
            },
            {
              menuValue: 'Payroll',
              base: 'payroll',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Employee Salary',
                  route: routes.employeesalary,
                  base: '/payroll/employee-salary',
                },
                {
                  menuValue: 'Payslip',
                  route: routes.payslip,
                  base: '/payroll/payslip',
                },
                {
                  menuValue: 'Payroll Items',
                  route: routes.payrollAddition,
                  base: '/payroll/payroll',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tittle: 'Administration',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Administration',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'cash',
          base: 'assets',
          base2:'support',
          base3:'user-management',
          base4:'reports',
          base5:'settings',
          materialicons: 'dashboard',
          subMenus: [
            {
              menuValue: 'Assets',
              base: 'asset',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Assets',
                  route: routes.assetList,
                  base: '/asset/assets',
                },
                {
                  menuValue: 'Asset Categories',
                  route: routes.assetCategories,
                  base: '/asset/asset-categories',
                },
              ],
            },
            {
              menuValue: 'Help & Supports',
              base: 'supports',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Knowledge Base',
                  route: routes.knowledgebase,
                  base: '/supports/knowledgebase',
                },
                {
                  menuValue: 'Activities',
                  route: routes.activities,
                  base: '/supports/activities',
                },
              ],
            },
            {
              menuValue: 'User Management',
              base: 'user-management',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Users',
                  route: routes.users,
                  base: '/user-management/users',
                },
                {
                  menuValue: 'Roles & Permissions',
                  route: routes.rolesPermissions,
                  base: '/user-management/roles-permissions',
                },
              ],
            },
            {
              menuValue: 'Reports',
              base: 'reports',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Expense Report',
                  route: routes.expensereport,
                  base: '/reports/expenses-report',
                },
                {
                  menuValue: 'Invoice Report',
                  route: routes.invoicereport,
                  base: '/reports/invoice-report',
                },
                {
                  menuValue: 'Payment Report',
                  route: routes.paymentsreport,
                  base: '/reports/payment-report',
                },
                {
                  menuValue: 'Project Report',
                  route: routes.projectreport,
                  base: '/reports/project-report',
                },
                {
                  menuValue: 'Task Report',
                  route: routes.taskreport,
                  base: '/reports/task-report',
                },
                {
                  menuValue: 'User Report',
                  route: routes.userreport,
                  base: '/reports/user-report',
                },
                {
                  menuValue: 'Employee Report',
                  route: routes.employeereport,
                  base: '/reports/employee-report',
                },
                {
                  menuValue: 'Payslip Report',
                  route: routes.payslipreport,
                  base: '/reports/payslip-report',
                },
                {
                  menuValue: 'Attendance Report',
                  route: routes.attendancereport,
                  base: '/reports/attendance-report',
                },
                {
                  menuValue: 'Leave Report',
                  route: routes.leavereport,
                  base: '/reports/leave-report',
                },
                {
                  menuValue: 'Daily Report',
                  route: routes.dailyreport,
                  base: '/reports/daily-report',
                },
              ],
            },
            {
              menuValue: 'General Settings',
              customSubmenuTwo: true,
              base: 'general-settings',
              subMenusTwo: [
                {
                  menuValue: 'Profile',
                  route: routes.profileSettings,
                  base: 'profile-settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Security',
                  route: routes.securitySettings,
                  base: 'security-settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Notifications',
                  route: routes.notificationSettings,
                  base: 'notification-settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Connected Apps',
                  route: routes.connectedApps,
                  base: 'connected-apps',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
              ],
            },
            {
              menuValue: 'Website Settings',
              customSubmenuTwo: true,
              base: 'website-settings',
              subMenusTwo: [
                {
                  menuValue: 'Business Settings',
                  route: routes.bussinessSettings,
                  base: 'bussiness-settings',
                },
                {
                  menuValue: 'SEO Settings',
                  route: routes.seoSettings,
                  base: 'seo-settings',
                },
                {
                  menuValue: 'Localization',
                  route: routes.localizationSettings,
                  base: 'localization-settings',
                },
                {
                  menuValue: 'Prefixes',
                  route: routes.prefixes,
                  base: 'prefixes',
                },
                {
                  menuValue: 'Preferences',
                  route: routes.preferences,
                  base: 'preferences',
                },
                {
                  menuValue: 'Appearance',
                  route: routes.appearance,
                  base: 'appearance',
                },
                {
                  menuValue: 'Language',
                  route: routes.language,
                  base: 'language',
                  base2: 'add-language',
                },
                {
                  menuValue: 'Authentication',
                  route: routes.authenticationSettings,
                  base: 'authentication-settings',
                },
                {
                  menuValue: 'AI Settings',
                  route: routes.aiSettings,
                  base: 'ai-settings',
                },
              ],
            },
            {
              menuValue: 'App Settings',
              customSubmenuTwo: true,
              base: 'app-settings',
              subMenusTwo: [
                {
                  menuValue: 'Salary Settings',
                  route: routes.salarySettings,
                  base: 'salary-settings',
                },
                {
                  menuValue: 'Approval Settings',
                  route: routes.approvalSettings,
                  base: 'approval-settings',
                },
                {
                  menuValue: 'Invoice Settings',
                  route: routes.invoiceSettings,
                  base: 'invoice-settings',
                },
                {
                  menuValue: 'Leave Type',
                  route: routes.leaveType,
                  base: 'leave-type',
                },
                {
                  menuValue: 'Custom Fields',
                  route: routes.customFields,
                  base: 'custom-fields',
                },
              ],
            },
            {
              menuValue: 'System Settings',
              customSubmenuTwo: true,
              base: 'system-settings',
              subMenusTwo: [
                {
                  menuValue: 'Email Settings',
                  route: routes.emailSettings,
                  base: 'email-settings',
                },
                {
                  menuValue: 'Email Templates',
                  route: routes.emailTemplate,
                  base: 'email-template',
                },
                {
                  menuValue: 'SMS Settings',
                  route: routes.smsSettings,
                  base: 'sms-settings',
                },
                {
                  menuValue: 'SMS Templates',
                  route: routes.smsTemplate,
                  base: 'sms-template',
                },
                {
                  menuValue: 'OTP',
                  route: routes.otpSettings,
                  base: 'otp-settings',
                },
                {
                  menuValue: 'GDPR Cookies',
                  route: routes.gdpr,
                  base: 'gdpr',
                },
                {
                  menuValue: 'Maintenance Mode',
                  route: routes.maintenanceMode,
                  base: 'maintenance-mode',
                },
              ],
            },
            {
              menuValue: 'Financial Settings',
              customSubmenuTwo: true,
              base: 'financial-settings',
              subMenusTwo: [
                {
                  menuValue: 'Payment Gateways',
                  route: routes.paymentGateways,
                  base: 'payment-gateways',
                },
                {
                  menuValue: 'Tax Rate',
                  route: routes.taxRates,
                  base: 'tax-rates',
                },
                {
                  menuValue: 'Currencies',
                  route: routes.currencies,
                  base: 'currencies',
                },
              ],
            },
            {
              menuValue: 'Other Settings',
              customSubmenuTwo: true,
              base: 'other-settings',
              subMenusTwo: [
                {
                  menuValue: 'Custom CSS',
                  route: routes.customCss,
                  base: 'custom-css',
                },
                {
                  menuValue: 'Custom JS',
                  route: routes.customjs,
                  base: 'custom-js',
                },
                {
                  menuValue: 'Cronjob',
                  route: routes.cronjob,
                  base: 'cronjob',
                },
                {
                  menuValue: 'Storage',
                  route: routes.storagesettings,
                  base: 'storage-settings',
                },
                {
                  menuValue: 'Ban IP Address',
                  route: routes.banIpaddress,
                  base: 'ban-ip-address',
                },
                {
                  menuValue: 'Backup',
                  route: routes.backup,
                  base: 'backup',
                },
                {
                  menuValue: 'Clear Cache',
                  route: routes.clearcache,
                  base: 'clear-cache',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tittle: 'Content',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Content',
          route: 'routes.apps',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'license',
          base: 'pages',
          base2: 'blogs',
          base3: 'locations',
          base4:'testimonials',
          base5: 'faq',
          materialicons: 'dashboard',
          subMenus: [
            {
              menuValue: 'Pages',
              route: routes.page,
              base: 'pages',
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Blogs',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              base: 'blog',
              subMenusTwo: [
                {
                  menuValue: 'All Blogs',
                  route: routes.allBlogs,
                  base: 'All Blogs',
                },
                {
                  menuValue: 'Categories',
                  route: routes.blogCategories,
                  base: 'Categories',
                },
                {
                  menuValue: 'Comments',
                  route: routes.blogComments,
                  base: 'Comments',
                },
                {
                  menuValue: 'Blog Tags',
                  route: routes.blogTags,
                  base: 'Blog Tags',
                },
              ],
            },
            {
              menuValue: 'Locations',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              base: 'location',
              subMenusTwo: [
                {
                  menuValue: 'Countries',
                  route: routes.countries,
                  base: '/location/countries',
                },
                {
                  menuValue: 'States',
                  route: routes.states,
                  base: '/location/states',
                },
                {
                  menuValue: 'Cities',
                  route: routes.cities,
                  base: '/location/cities',
                },
              ],
            },
            {
              menuValue: 'Testimonials',
              route: routes.testimonials,
              base: 'testimonials',
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              menuValue: 'FAQ’S',
              route: routes.faq,
              base: 'faq',
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
          ],
        },
      ],
    },
    {
      tittle: 'Pages',
      showAsTab: false,
      showMyTab:true,
      icon: 'airplay',
      separateRoute: false,
      menu: [
        {
          menuValue: 'Pages',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'page-break',
          base: 'starter',
          base2: 'profile',
          base3: 'gallery',
          base4: 'search-result',
          base5: 'timeline',
          base7: 'pricing',
          base8: 'api-keys',
          base9: 'privacy-policy',
          base10: 'terms-condition',
          materialicons: 'dashboard',
          subMenus: [
            {
              menuValue: 'Starter',
              route: routes.starter,
              base: 'starter',

            },
            {
              menuValue: 'Profile',
              route: routes.profile,
              base: 'profile',

            },
            {
              menuValue: 'Gallery',
              route: routes.gallery,
              base: 'gallery',

            },
            {
              menuValue: 'Search Results',
              route: routes.searchResult,
              base: 'search-result',

            },
            {
              menuValue: 'Timeline',
              route: routes.timeLine,
              base: 'timeline',

            },
            {
              menuValue: 'Pricing',
              route: routes.pricing,
              base: 'pricing',

            },
            {
              menuValue: 'Coming Soon',
              route: routes.comingSoon,
              base: 'coming-soon',
            },
            {
              menuValue: 'Under Maintenance',
              route: routes.underMaintanance,
              base: 'under-maintenance',
            },
            {
              menuValue: 'Under Construction',
              route: routes.underConstruction,
              base: 'under-construction',
            },
            {
              menuValue: 'API Keys',
              route: routes.apiKeys,
              base: 'api-keys',
            },
            {
              menuValue: 'Privacy Policy',
              route: routes.privacy,
              base: 'privacy-policy',
            },
            {
              menuValue: 'Terms & Conditions',
              route: routes.terms,
              base: 'terms-condition',
            },
          ],
        },
      ],
    },
    {
      tittle: 'Authentication',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Authentication',
          route: '',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'lock-check',
          base: 'apps',
          materialicons: 'dashboard',
          subMenus: [
            {
              menuValue: 'Login',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route: routes.loginpro,
                },
                {
                  menuValue: 'Illustration',
                  route: routes.login2,
                },
                {
                  menuValue: 'Basic',
                  route: routes.login3,
                },
              ],
            },
            {
              menuValue: 'Register',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route: routes.registers,
                },
                {
                  menuValue: 'Illustration',
                  route: routes.registers2,
                },
                {
                  menuValue: 'Basic',
                  route: routes.registers3,
                },
              ],
            },
            {
              menuValue: 'Forgot Password',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route: routes.forgotPassword,
                },
                {
                  menuValue: 'Illustration',
                  route: routes.forgotpassword2,
                },
                {
                  menuValue: 'Basic',
                  route: routes.forgotpassword3,
                },
              ],
            },
            {
              menuValue: 'Reset Password',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route:routes.resetpassword,
                },
                {
                  menuValue: 'Illustration',
                  route: routes.resetpassword2,
                },
                {
                  menuValue: 'Basic',
                  route: routes.resetpassword3  ,
                },
              ],
            },
            {
              menuValue: 'Email Verification',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route: routes.emailverification,
                },
                {
                  menuValue: 'Illustration',
                  route: routes.emailverification2,
                },
                {
                  menuValue: 'Basic',
                  route: routes.emailverification3,
                },
              ],
            },
            {
              menuValue: '2 Step Verification',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route: routes.twostepverification,
                },
                {
                  menuValue: 'Illustration',
                  route: routes.twostepverification2,
                },
                {
                  menuValue: 'Basic',
                  route: routes.twostepverification3,
                },
              ],
            },
            {
              menuValue: 'Lock Screen',
              route: '/lock-screen',
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              menuValue: '404 Error',
              route: '/error-404',
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
            {
              menuValue: '500 Error',
              route: '/error-500',
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
            },
          ],
        },
      ],
    },
    {
      tittle: 'UI Interface',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'UI Interface',
          route: '',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'ux-circle',
          base: 'base-ui',
          base2:'advanced-ui',
          base3:'charts',
          base4:'icon',
          base5:'forms',
          base7:'table',
          materialicons: 'dashboard',
          subMenus: [
            {
              menuValue: 'Base UI',
              route: routes.index,
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              base: 'base-ui',
              subMenusTwo: [
                {
                  menuValue: 'Alerts',
                  route: routes.alert,
                  base: 'ui-alerts',
                },
                {
                  menuValue: 'Accordions',
                  route: routes.accordions,
                  base: 'ui-accordion',
                },
                {
                  menuValue: 'Avatar',
                  route: routes.avatar,
                  base: 'ui-avatar',
                },
                {
                  menuValue: 'Badges',
                  route: routes.badges,
                  base: 'ui-badges',
                },
                {
                  menuValue: 'Buttons',
                  route: routes.buttons,
                  base: 'ui-buttons',
                },
                {
                  menuValue: 'Button Group',
                  route: routes.buttonGroup,
                  base: 'ui-buttons-group',
                },
                {
                  menuValue: 'Breadcrumb',
                  route: routes.breadcrumb,
                  base: 'ui-breadcrumb',
                },
                { menuValue: 'Cards', route: routes.cards, base: 'ui-cards' },
                {
                  menuValue: 'Carousel',
                  route: routes.carousel,
                  base: 'ui-carousel',
                },
                {
                  menuValue: 'Dropdowns',
                  route: routes.dropDown,
                  base: 'ui-dropdowns',
                },
                { menuValue: 'Grid', route: routes.grid, base: 'ui-grid' },
                {
                  menuValue: 'Images',
                  route: routes.images,
                  base: 'ui-images',
                },
                {
                  menuValue: 'Lightbox',
                  route: routes.lightBox,
                  base: 'ui-lightbox',
                },
                { menuValue: 'Media', route: routes.media, base: 'ui-media' },
                { menuValue: 'Modals', route: routes.modal, base: 'ui-modals' },
                {
                  menuValue: 'Offcanvas',
                  route: routes.offcanvas,
                  base: 'ui-offcanvas',
                },
                {
                  menuValue: 'Pagination',
                  route: routes.pagination,
                  base: 'ui-pagination',
                },

                {
                  menuValue: 'Progress Bars',
                  route: routes.progressBars,
                  base: 'ui-progress',
                },
                {
                  menuValue: 'Placeholders',
                  route: routes.placeholder,
                  base: 'ui-placeholders',
                },

                {
                  menuValue: 'Spinner',
                  route: routes.spinner,
                  base: 'ui-spinner',
                },
                {
                  menuValue: 'Range Slider',
                  route: routes.rangeSlider,
                  base: 'ui-rangeslider',
                },

                {
                  menuValue: 'Toasts',
                  route: routes.toasts,
                  base: 'ui-toasts',
                },
                {
                  menuValue: 'Tooltip',
                  route: routes.tooltip,
                  base: 'ui-tooltips',
                },
                {
                  menuValue: 'Typography',
                  route: routes.typography,
                  base: 'ui-typography',
                },
                { menuValue: 'Videos', route: routes.video, base: 'ui-video' },
              ],
            },
            {
              menuValue: 'Advanced Ui',
              hasSubRoute: true,
              showSubRoute: false,
              base: 'advanced-ui',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Ribbon',
                  route: routes.ribbon,
                  base: 'ui-ribbon',
                },
                {
                  menuValue: 'Clipboard',
                  route: routes.clipboards,
                  base: 'ui-clipboard',
                },
                {
                  menuValue: 'Drag & Drop',
                  route: routes.dragDrop,
                  base: 'ui-drag-drop',
                },
                {
                  menuValue: 'Rating',
                  route: routes.rating,
                  base: 'ui-rating',
                },
                {
                  menuValue: 'Text Editor',
                  route: routes.textEditor,
                  base: 'ui-text-editor',
                },
                {
                  menuValue: 'Counter',
                  route: routes.counter,
                  base: 'ui-counter',
                },
                {
                  menuValue: 'Scrollbar',
                  route: routes.scrollbar,
                  base: 'ui-scrollbar',
                },
                {
                  menuValue: 'Timeline',
                  route: routes.timeline,
                  base: 'ui-timeline',
                },
              ],
            },
            {
              menuValue: 'Charts',
              hasSubRoute: true,
              showSubRoute: false,
              base: 'charts',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Apex Charts',
                  route: routes.apexChart,
                  base: 'apex-charts',
                },
                {
                  menuValue: 'Ng2 Charts',
                  route: routes.ngTwoCharts,
                  base: 'ng2-charts',
                },
                {
                  menuValue: 'Prime NG Charts',
                  route: routes.chartPrime,
                  base: 'prime-ng',
                },
              ],
            },
            {
              menuValue: 'Icons',
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              base: 'icon',
              subMenusTwo: [
                {
                  menuValue: 'Fontawesome Icons',
                  route: routes.fontawesome,
                  base: 'fontawesome',
                },
                {
                  menuValue: 'Feather Icons',
                  route: routes.feather,
                  base: 'feather',
                },
                {
                  menuValue: 'Ionic Icons',
                  route: routes.ionic,
                  base: 'ionic',
                },
                {
                  menuValue: 'Material Icons',
                  route: routes.material,
                  base: 'material',
                },
                { menuValue: 'pe7 Icons', route: routes.pe7, base: 'pe7' },
                {
                  menuValue: 'Simpleline Icons',
                  route: routes.simpleLine,
                  base: 'simple-line',
                },
                {
                  menuValue: 'Themify Icons',
                  route: routes.themify,
                  base: 'themify',
                },
                {
                  menuValue: 'Weather Icons',
                  route: routes.weather,
                  base: 'weather',
                },
                {
                  menuValue: 'Typicon Icons',
                  route: routes.typicon,
                  base: 'typicon',
                },
                { menuValue: 'Flag Icons', route: routes.flag, base: 'flag' },
              ],
            },
            {
              menuValue: 'Forms',
              customSubmenuTwo: true,
              base: 'forms',
              showSubRoute: false,
              subMenusTwo: [
                {
                  menuValue: 'Basic Inputs',
                  route: routes.formBasicInputs,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Checkbox & Radios',
                  route: routes.formCheckboxRadios,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Input Groups',
                  route: routes.formInputsGroups,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Grid & Gutters',
                  route: routes.formGridGutters,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Form Select',
                  route: routes.formSelect,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Input Masks',
                  route: routes.formMask,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'File Uploads',
                  route: routes.formFileUpload,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Horizontal Form',
                  route: routes.formHorizontal,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Vertical Form',
                  route: routes.formVertical,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Floating Labels',
                  route: routes.formFloatingLabels,
                  hasSubRoute: false,
                  showSubRoute: false,
                },

                {
                  menuValue: 'Form Validation',
                  route: routes.formValidation,
                  hasSubRoute: false,
                  showSubRoute: false,
                  customSubmenuTwo: false,
                },
              ],
            },
            {
              menuValue: 'Tables',
              route: routes.tables,
              hasSubRoute: true,
              showSubRoute: false,
              customSubmenuTwo: true,
              base: 'tables',
              subMenusTwo: [
                {
                  menuValue: 'Basic Tables',
                  route: routes.basictables,
                  base: 'tables-basic',
                },
                {
                  menuValue: 'Data Tables',
                  route: routes.datatables,
                  base: 'data-basic',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tittle: 'Extras',
      icon: 'file',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Extras',
          route: '',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'vector-triangle',
          base: 'apps',
          materialicons: 'dashboard',
          subMenus: [
            {
              menuValue: 'Documentation',
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
              base: '1',
            },
            {
              menuValue: 'Change Log',
              hasSubRoute: false,
              showSubRoute: false,
              customSubmenuTwo: false,
              base: '1',
            },
          ],
        },
      ],
    },
  ];
  public getSideBarData2: BehaviorSubject<SideBar[]> = new BehaviorSubject<
    SideBar[]
  >(this.sideBar2);
  public resetData2(): void {
    this.sideBar2.map((res: SideBar) => {
      res.showAsTab = false;
      res.menu.map((menus: SideBarMenu) => {
        menus.showSubRoute = false;
      });
    });
  }
  public sideBar: SideBar[] =[
    {
      tittle: 'Menu Principal',
      icon: 'airplay',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'smart-home',
          base: 'dashboard',
          materialicons: 'start',
          subMenus: [],
        },
        {
          menuValue: 'Gestion des partenaires',
          route: routes.index,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'users',
          base: 'super-admin',
          materialicons: '',
          subMenus: [
          ],
        },
        {
          menuValue: 'Gestion des comptes',
          route: routes.index,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'heart-handshake',
          base: 'super-admin',
          materialicons: '',
          subMenus: [],
        },
        {
          menuValue: 'Gestion des vendeurs',
          route: routes.index,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user-check',
          base: 'super-admin',
          materialicons: '',
          subMenus: [],
        },
        {
          menuValue: 'Gestion des compteurs',
          route: routes.index,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'hierarchy-2',
          base: 'super-admin',
          materialicons: '',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Consultations',
      icon: 'airplay',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Transactions',
          route: routes.index,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'cash',
          base: 'super-admin',
          materialicons: '',
          subMenus: [],
        },
      ]
    },
    {
      tittle: 'Administration',
      icon: 'airplay',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Gestion des rôles',
          route: routes.index,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'cash',
          base: 'super-admin',
          materialicons: '',
          subMenus: [],
        },
        {
          menuValue: 'Gestion des utilisateurs',
          route: routes.index,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'cash',
          base: 'super-admin',
          materialicons: '',
          subMenus: [],
        },
      ]
    }

  ];
  public getSideBarData: BehaviorSubject<SideBar[]> = new BehaviorSubject<
    SideBar[]
  >(this.sideBar);
  public resetData(): void {
    this.sideBar.map((res: SideBar) => {
      res.showAsTab = false;
      res.menu.map((menus: SideBarMenu) => {
        menus.showSubRoute = false;
      });
    });
  }
  public horizontalSidebar:MainMenu[] = [
    {
      title: 'Main',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'smart-home',
          base: 'dashboard',
          subMenus: [
            {
              menuValue: 'Admin Dashboard',
              route: routes.index,
              base: 'index',
            },
            {
              menuValue: 'Employee Dashboard',
              route: routes.employee,
              base: 'employee',
            },
            {
              menuValue: 'Deals Dashboard',
              route: routes.dealsDashboard,
              base: 'deals',
            },
            {
              menuValue: 'Leads Dashboard',
              route: routes.leadDashboard,
              base: 'leads',
            },
          ],
        },
        {
          menuValue: 'Super Admin',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'user-star',
          base: 'super-admin',
          subMenus: [
            {
              menuValue: 'Dashboard',
              route: routes.superAdminDash,
              base: 'super-admin-dashboard',
            },
            {
              menuValue: 'Companies',
              route: routes.superAdminCompanies,
              base: 'companies',
            },
            {
              menuValue: 'Subscriptions',
              route: routes.superAdminSubscriptions,
              base: 'subscriptions',
            },
            {
              menuValue: 'Packages',
              route: routes.superAdminPackages,
              base: 'packages',
              base2: 'packages-grid',
            },
            {
              menuValue: 'Domain',
              route: routes.superAdminDomain,
              base: 'domain',
            },
            {
              menuValue: 'Purchase Transaction',
              route: routes.superAdminPurchaseTransaction,
              base: 'purchase-transaction',
            },
          ],
        },
        {
          menuValue: 'Application',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'layout-grid-add',
          base: 'application',
          subMenus: [
            {
              menuValue: 'Chat',
              route: routes.chat,
              base: 'chats',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Calls',
              customSubmenuTwo: true,
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.calendar,
              base:'calls',
              subMenusTwo: [
                {
                  menuValue: 'Voice Call',
                  route: routes.voicecall,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'voice-call',
                },
                {
                  menuValue: 'Video Call',
                  route: routes.videocall,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'video-call',
                },
                {
                  menuValue: 'Outgoing Call',
                  route: routes.outgoingcall,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'outgoing-call',
                },
                {
                  menuValue: 'Incoming Call',
                  route: routes.incomingcall,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'incoming-call',
                },
                {
                  menuValue: 'Call History',
                  route: routes.callhistory,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'call-history',
                },
              ],
            },
            {
              menuValue: 'Calendar',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.calendar,
              customSubmenuTwo: false,
              base: 'calendar',
            },

            {
              menuValue: 'Email',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.email,
              customSubmenuTwo: false,
              base: 'email',
            },
            {
              menuValue: 'To Do',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.todo,
              customSubmenuTwo: false,
              base: 'todo',
            },
            {
              menuValue: 'Notes',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.notes,
              customSubmenuTwo: false,
              base: 'notes',
            },
            {
              menuValue: 'Social Feed',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.socialFeed,
              customSubmenuTwo: false,
              base: 'social-feed',
            },
            {
              menuValue: 'File Manager',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.filemanager,
              customSubmenuTwo: false,
              base: 'file-manager',
            },
            {
              menuValue: 'Kanban',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.kanban,
              customSubmenuTwo: false,
              base: 'kanban',
            },
            {
              menuValue: 'Invoices',
              hasSubRoute: true,
              showSubRoute: false,
              route: routes.invoice,
              customSubmenuTwo: false,
              base: 'invoices',
            },
          ],
        },
        {
          menuValue: 'Layouts',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'layout-board-split',
          base: 'layout-horizontal',
          base2: 'layout-vertical-transparent',
          base3: 'layout-horizontal-box',
          base4: 'layout-horizontal-overlay',
          base5: 'layout-horizontal-single',
          base6: 'layout-modern',
          base7: 'layout-detached',
          subMenus: [
            {
              menuValue: 'Horizontal',
              route: routes.Horizontal,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-horizontal',
            },
            {
              menuValue: 'Detached',
              route: routes.Detached,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-detached',
            },
            {
              menuValue: 'Modern',
              route: routes.Modern,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-modern',
            },
            {
              menuValue: 'Two Column',
              route: routes.TwoColumn,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-two-column',
            },
            {
              menuValue: 'Hovered',
              route: routes.Hovered,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-hovered',
            },
            {
              menuValue: 'Boxed',
              route: routes.Boxed,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-boxed',
            },
            {
              menuValue: 'Horizontal Single',
              route: routes.HorizontalSingle,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-horizontal-single',
            },
            {
              menuValue: 'Horizontal Overlay',
              route: routes.HorizontalOverlay,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-horizontal-overlay',
            },
            {
              menuValue: 'Horizontal Box',
              route: routes.HorizontalBox,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-horizontal-box',
            },
            {
              menuValue: 'Menu Aside',
              route: routes.MenuAside,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-horizontal-sidemenu',
            },
            {
              menuValue: 'Transparent',
              route: routes.Transparent,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-vertical-transparent',
            },
            {
              menuValue: 'Without Header',
              route: routes.WithoutHeader,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-without-header',
            },
            {
              menuValue: 'RTL',
              route: routes.RTL,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-rtl',
            },
            {
              menuValue: 'Dark',
              route: routes.Dark,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'layout-dark',
            },
          ],
        },
        {
          menuValue: 'Projects',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'user-star',
          base: 'client',
          base2: 'project',
          base3: 'crm',
          base4: 'employee',
          base5: 'ticket',
          subMenus: [
            {
              menuValue: 'Clients',
              route: routes.clientGrid,
              base: 'client',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Projects',
              base: 'project',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Projects',
                  route: routes.projectGrid,
                  base: 'project-grid',
                  base2: 'project-list',
                  base3: 'project-details',
                },
                { menuValue: 'Tasks', route: routes.tasks, base: 'tasks' },
                {
                  menuValue: 'Task Board',
                  route: routes.taskboard,
                  base: 'task-board',
                },
              ],
            },
            {
              menuValue: 'Crm',
              base: 'crm',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Contacts',
                  route: routes.contactGrid,
                  base: 'contact',
                },
                {
                  menuValue: 'Companies',
                  route: routes.companiesGrid,
                  base: 'company',
                },
                {
                  menuValue: 'Deals',
                  route: routes.dealsGrid,
                  base: 'deals',
                },
                {
                  menuValue: 'Leads',
                  route: routes.leadsGrid,
                  base: 'leads',
                },
                {
                  menuValue: ' Pipeline',
                  route: routes.pipeline,
                  base: 'pipeline',
                },
                {
                  menuValue: 'Analytics',
                  route: routes.analytics,
                  base: 'analytics',
                },
                {
                  menuValue: 'Activities',
                  route: routes.activities,
                  base: 'activities',
                },
              ],
            },
            {
              menuValue: 'Employee',
              base: 'employee',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Employees List',
                  route: routes.employeeList,
                  base: 'employees',
                  base2: 'employee-list',
                },
                {
                  menuValue: 'Employees Grid',
                  route: routes.employeeGrid,
                  base: 'employees',
                  base2: 'employee-grid',
                },
                {
                  menuValue: 'Employees Details',
                  route: routes.employeeDetails,
                  base: 'employees',
                  base2: 'employee-details',
                },
                {
                  menuValue: 'Departments',
                  route: routes.departments,
                  base: 'departments',
                },
                {
                  menuValue: 'Designations',
                  route: routes.designations,
                  base: 'designations',
                },
                {
                  menuValue: 'Policies',
                  route: routes.policy,
                  base: 'employees',
                  base2: 'policy',
                },
              ],
            },
            {
              menuValue: 'Tickets',
              base: 'ticket',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Tickets',
                  route: routes.ticketList,
                  base: 'ticket-list',
                },
                {
                  menuValue: 'Tickets Detail',
                  route: routes.ticketDetails,
                  base: 'ticket-details',
                },
              ],
            },
            {
              menuValue: 'Holidays',
              route: routes.holidays,
              base: 'holidays',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Attendance',
              base: 'attendance',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Leaves (Admin)',
                  route: routes.leaveadmin,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Leaves (Employee)',
                  route: routes.leaveemployee,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Leave Settings',
                  route: routes.leavesettings,
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Attendance (Admin)',
                  route: routes.attendanceadmin,
                  base: 'attendance-admin',
                },
                {
                  menuValue: 'Attendance (Employee)',
                  route: routes.attendanceemployee,
                  base: 'attendance-employee',
                },

                {
                  menuValue: 'Timesheet',
                  route: routes.timesheet,
                  base: 'timesheet',
                },
                {
                  menuValue: 'Shift & Schedule',
                  route: routes.shiftschedule,
                  base: 'shift-schedule',
                },
                {
                  menuValue: 'Overtime',
                  route: routes.overtime,
                  base: 'overtime',
                },
              ],
            },
            {
              menuValue: 'Performance',
              base: 'performance',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Performance Indicator',
                  route: routes.performanceIndicator,
                  base: 'indicator',
                },
                {
                  menuValue: 'Performance Review',
                  route: routes.performanceReview,
                  base: 'review',
                },
                {
                  menuValue: 'Performance Appraisal',
                  route: routes.performanceAppraisal,
                  base: 'appraisal',
                },
                {
                  menuValue: 'Goal List',
                  route: routes.goalTracking,
                  base: 'appraisal',
                },
                {
                  menuValue: 'Goal Type',
                  route: routes.goalType,
                  base: 'appraisal',
                },
              ],
            },
            {
              menuValue: 'Training',
              base: 'training',
              customSubmenuTwo: true,
              subMenusTwo: [
                { menuValue: 'Training List', route: routes.trainingLists, base: 'lists' },
                { menuValue: 'Trainers', route: routes.trainers, base: 'trainer' },
                { menuValue: 'Training Type', route: routes.trainingTypes, base: 'types' },
              ],
            },
            {
              menuValue: 'Promotion',
              route: routes.promotion,
              base: 'promotion',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Resignation',
              route: routes.resignation,
              base: 'resignation',
              customSubmenuTwo: false,
            },
            {
              menuValue: 'Termination',
              route: routes.termination,
              base: 'termination',
              customSubmenuTwo: false,
            },
          ],
        },
        {
          menuValue: 'Administration',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'user-star',
          base: 'jobs',
          base2: 'candidates',
          base3: 'refferals',
          base4: 'sales',
          base5: 'accounting',
          base6: 'payroll',
          base7: 'assets',
          base8: 'support',
          base9: 'user-management',
          base10: 'reports',
          subMenus: [
            {
              menuValue: 'Requirment',
              base: 'jobs',
              base2: 'candidates',
              base3: 'refferals',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Jobs',
                  route: routes.jobsGrid,
                  base: 'jobs-grid',
                },
                {
                  menuValue: 'Candidates',
                  route: routes.candidatesGrid,
                  base: 'candidates-grid',
                },
                {
                  menuValue: 'Referrals',
                  route: routes.Refferals,
                  base: 'refferals',
                },
              ],
            },
            {
              menuValue: 'Sales',
              base: 'sales',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Estimates',
                  route: routes.estimate,
                  base: 'estimates',
                },
                {
                  menuValue: 'Invoices',
                  route: routes.invoice,
                  base: 'invoices',
                },
                {
                  menuValue: 'Payments',
                  route: routes.payments,
                  base: 'payments',
                },
                {
                  menuValue: 'Expenses',
                  route: routes.expenses,
                  base: 'expenses',
                },
                {
                  menuValue: 'Provident Fund',
                  route: routes.providentfund,
                  base: 'provident-fund',
                },
                {
                  menuValue: 'Taxes',
                  route: routes.taxes,
                  base: 'taxes',
                },
              ],
            },
            {
              menuValue: 'Accounting',
              base: 'accounting',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Categories',
                  route: '/accounting/categories',
                  base: 'categories',
                },
                {
                  menuValue: 'Budgets',
                  route: '/accounting/budgets',
                  base: 'budgets',
                },
                {
                  menuValue: 'Budget Expenses',
                  route: '/accounting/budget-expenses',
                  base: 'budget-expenses',
                },
                {
                  menuValue: 'Budget Revenues',
                  route: '/accounting/budget-revenues',
                  base: 'budget-revenues',
                },
              ],
            },
            {
              menuValue: 'Payroll',
              base: 'payroll',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Employee Salary',
                  route: '/payroll/employee-salary',
                  base: 'employee-salary',
                },
                {
                  menuValue: 'Payslip',
                  route: '/payroll/payslip',
                  base: 'payslip',
                },
                {
                  menuValue: 'Payroll Items',
                  route: '/payroll/payroll-items',
                  base: 'payroll-items',
                },
              ],
            },
            {
              menuValue: 'Assets',
              base: 'assets',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Assets',
                  route: '/assets/asset-list',
                  base: 'asset-list',
                },
                {
                  menuValue: 'Asset Categories',
                  route: '/assets/asset-categories',
                  base: 'asset-categories',
                },
              ],
            },
            {
              menuValue: 'Help & Supports',
              base: 'supports',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Knowledge Base',
                  route: routes.knowledgebase,
                  base: 'knowledgebase',
                  base2: 'knowledgebase-view',
                  base3: 'knowledgebase-details',
                },
                {
                  menuValue: 'Activities',
                  route: routes.activities,
                  base: 'activities',
                },
              ],
            },
            {
              menuValue: 'User Management',
              base: 'user-management',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Users',
                  route: routes.users,
                  base: 'users',
                },
                {
                  menuValue: 'Roles & Permissions',
                  route: routes.rolesPermissions,
                  base: 'roles-permissions',
                },
              ],
            },
            {
              menuValue: 'Reports',
              base: 'reports',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Expense Report',
                  route: '/reports/expenses-report',
                  base: 'expenses-report',
                },
                {
                  menuValue: 'Invoice Report',
                  route: '/reports/invoice-report',
                  base: 'invoice-report',
                },
                {
                  menuValue: 'Payment Report',
                  route: '/reports/payment-report',
                  base: 'payment-report',
                },
                {
                  menuValue: 'Project Report',
                  route: '/reports/project-report',
                  base: 'project-report',
                },
                {
                  menuValue: 'Task Report',
                  route: '/reports/task-report',
                  base: 'task-report',
                },
                {
                  menuValue: 'User Report',
                  route: '/reports/user-report',
                  base: 'user-report',
                },
                {
                  menuValue: 'Employee Report',
                  route: '/reports/employee-report',
                  base: 'employee-report',
                },
                {
                  menuValue: 'Payslip Report',
                  route: '/reports/payslip-report',
                  base: 'payslip-report',
                },
                {
                  menuValue: 'Attendance Report',
                  route: '/reports/attendance-report',
                  base: 'attendance-report',
                },
                {
                  menuValue: 'Leave Report',
                  route: '/reports/leave-report',
                  base: 'leave-report',
                },
                {
                  menuValue: 'Daily Report',
                  route: '/reports/daily-report',
                  base: 'daily-report',
                },
              ],
            },
            {
              menuValue: 'General Settings',
              customSubmenuTwo: true,
              base: 'general-settings',
              subMenusTwo: [
                {
                  menuValue: 'Profile',
                  route: routes.profileSettings,
                  base: 'profile-settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Security',
                  route: routes.securitySettings,
                  base: 'security-settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Notifications',
                  route: routes.notificationSettings,
                  base: 'notification-settings',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
                {
                  menuValue: 'Connected Apps',
                  route: routes.connectedApps,
                  base: 'connected-apps',
                  hasSubRoute: false,
                  showSubRoute: false,
                },
              ],
            },
            {
              menuValue: 'Website Settings',
              customSubmenuTwo: true,
              base: 'website-settings',
              subMenusTwo: [
                {
                  menuValue: 'Business Settings',
                  route: routes.bussinessSettings,
                  base: 'bussiness-settings',
                },
                {
                  menuValue: 'SEO Settings',
                  route: routes.seoSettings,
                  base: 'seo-settings',
                },
                {
                  menuValue: 'Localization',
                  route: routes.localizationSettings,
                  base: 'localization-settings',
                },
                {
                  menuValue: 'Prefixes',
                  route: routes.prefixes,
                  base: 'prefixes',
                },
                {
                  menuValue: 'Preferences',
                  route: routes.preferences,
                  base: 'preferences',
                },
                {
                  menuValue: 'Appearance',
                  route: routes.appearance,
                  base: 'appearance',
                },
                {
                  menuValue: 'Language',
                  route: routes.language,
                  base: 'language',
                  base2: 'add-language',
                },
                {
                  menuValue: 'Authentication',
                  route: routes.authenticationSettings,
                  base: 'authentication-settings',
                },
                {
                  menuValue: 'AI Settings',
                  route: routes.aiSettings,
                  base: 'ai-settings',
                },
              ],
            },
            {
              menuValue: 'App Settings',
              customSubmenuTwo: true,
              base: 'app-settings',
              subMenusTwo: [
                {
                  menuValue: 'Salary Settings',
                  route: routes.salarySettings,
                  base: 'salary-settings',
                },
                {
                  menuValue: 'Approval Settings',
                  route: routes.approvalSettings,
                  base: 'approval-settings',
                },
                {
                  menuValue: 'Invoice Settings',
                  route: routes.invoiceSettings,
                  base: 'invoice-settings',
                },
                {
                  menuValue: 'Leave Type',
                  route: routes.leaveType,
                  base: 'leave-type',
                },
                {
                  menuValue: 'Custom Fields',
                  route: routes.customFields,
                  base: 'custom-fields',
                },
              ],
            },
            {
              menuValue: 'System Settings',
              customSubmenuTwo: true,
              base: 'system-settings',
              subMenusTwo: [
                {
                  menuValue: 'Email Settings',
                  route: routes.emailSettings,
                  base: 'email-settings',
                },
                {
                  menuValue: 'Email Templates',
                  route: routes.emailTemplate,
                  base: 'email-template',
                },
                {
                  menuValue: 'SMS Settings',
                  route: routes.smsSettings,
                  base: 'sms-settings',
                },
                {
                  menuValue: 'SMS Templates',
                  route: routes.smsTemplate,
                  base: 'sms-template',
                },
                {
                  menuValue: 'OTP',
                  route: routes.otpSettings,
                  base: 'otp-settings',
                },
                {
                  menuValue: 'GDPR Cookies',
                  route: routes.gdpr,
                  base: 'gdpr',
                },
                {
                  menuValue: 'Maintenance Mode',
                  route: routes.maintenanceMode,
                  base: 'maintenance-mode',
                },
              ],
            },
            {
              menuValue: 'Financial Settings',
              customSubmenuTwo: true,
              base: 'financial-settings',
              subMenusTwo: [
                {
                  menuValue: 'Payment Gateways',
                  route: routes.paymentGateways,
                  base: 'payment-gateways',
                },
                {
                  menuValue: 'Tax Rate',
                  route: routes.taxRates,
                  base: 'tax-rates',
                },
                {
                  menuValue: 'Currencies',
                  route: routes.currencies,
                  base: 'currencies',
                },
              ],
            },
            {
              menuValue: 'Other Settings',
              customSubmenuTwo: true,
              base: 'other-settings',
              subMenusTwo: [
                {
                  menuValue: 'Custom CSS',
                  route: routes.customCss,
                  base: 'custom-css',
                },
                {
                  menuValue: 'Custom JS',
                  route: routes.customjs,
                  base: 'custom-js',
                },
                {
                  menuValue: 'Cronjob',
                  route: routes.cronjob,
                  base: 'cronjob',
                },
                {
                  menuValue: 'Storage',
                  route: routes.storagesettings,
                  base: 'storage-settings',
                },
                {
                  menuValue: 'Ban IP Address',
                  route: routes.banIpaddress,
                  base: 'ban-ip-address',
                },
                {
                  menuValue: 'Backup',
                  route: routes.backup,
                  base: 'backup',
                },
                {
                  menuValue: 'Clear Cache',
                  route: routes.clearcache,
                  base: 'clear-cache',
                },
              ],
            },
          ],
        },
        {
          menuValue: 'Pages',
          hasSubRouteTwo: true,
          showSubRoute: false,
          icon: 'page-break',
          base: 'blog',
          base1: 'locations',
          base2: 'base-ui',
          base3: 'base-ui',
          base4: 'advanced-ui',
          base5: 'forms',
          base6: 'table',
          base7: 'charts',
          base8: 'icon',
          subMenus: [
            {
              menuValue: 'Starter',
              route: routes.starter,
              base: 'starter',
            },
            {
              menuValue: 'Profile',
              route: routes.profile,
              base: 'profile',
            },
            {
              menuValue: 'Gallery',
              route: '/gallery',
              base: 'gallery',
            },
            {
              menuValue: 'Search Results',
              route: '/search-result',
              base: 'search-result',
            },
            {
              menuValue: 'Timeline',
              route: '/timeline',
              base: 'timeline',
            },
            {
              menuValue: 'Pricing',
              route: '/pricing',
              base: 'pricing',
            },
            {
              menuValue: 'Coming Soon',
              route: '/coming-soon',
              base: 'coming-soon',
            },
            {
              menuValue: 'Under Maintenance',
              route: '/under-maintenance',
              base: 'under-maintenance',
            },
            {
              menuValue: 'Under Construction',
              route: '/under-construction',
              base: 'under-construction',
            },
            {
              menuValue: 'API Keys',
              route: '/api-keys',
              base: 'api-keys',
            },
            {
              menuValue: 'Privacy Policy',
              route: '/privacy-policy',
              base: 'privacy-policy',
            },
            {
              menuValue: 'Terms & Conditions',
              route: '/terms-condition',
              base: 'terms-condition',
            },
            {
              menuValue: 'Pages',
              route: '/pages',
              base: 'pages',
            },
            {
              menuValue: 'Blogs',
              base: 'blogs',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'All Blogs',
                  route: '/blog/blogs',
                  base: 'blogs',
                },
                {
                  menuValue: 'Categories',
                  route: '/blog/blog-categories',
                  base: 'blog-categories',
                },
                {
                  menuValue: 'Comments',
                  route: '/blog/blog-comments',
                  base: 'blog-comments',
                },
                {
                  menuValue: 'Blog Tags',
                  route: '/blog/blog-tags',
                  base: 'blog-tags',
                },
              ],
            },
            {
              menuValue: 'Locations',
              base: 'locations',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Countries',
                  route: '/locations/countries',
                  base: 'countries',
                },
                {
                  menuValue: 'States',
                  route: '/locations/states',
                  base: 'states',
                },
                {
                  menuValue: 'Cities',
                  route: '/locations/cities',
                  base: 'cities',
                },
              ],
            },
            {
              menuValue: 'Testimonials',
              route: '/testimonials',
              base: 'testimonials',
            },
            {
              menuValue: 'FAQ’S',
              route: '/faq',
              base: 'faq',
            },
            {
              menuValue: 'Login',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route: '/login',
                },
                {
                  menuValue: 'Illustration',
                  route: '/login-2',
                },
                {
                  menuValue: 'Basic',
                  route: '/login-3',
                },
              ],
            },
            {
              menuValue: 'Register',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route: '/register',
                },
                {
                  menuValue: 'Illustration',
                  route: '/register-2',
                },
                {
                  menuValue: 'Basic',
                  route: '/register-3',
                },
              ],
            },
            {
              menuValue: 'Forgot Password',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route: '/forgot-password',
                },
                {
                  menuValue: 'Illustration',
                  route: '/forgot-password-2',
                },
                {
                  menuValue: 'Basic',
                  route: '/forgot-password-3',
                },
              ],
            },
            {
              menuValue: 'Reset Password',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route: '/reset-password',
                },
                {
                  menuValue: 'Illustration',
                  route: '/reset-password-2',
                },
                {
                  menuValue: 'Basic',
                  route: '/reset-password-3',
                },
              ],
            },
            {
              menuValue: 'Email Verification',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route: '/email-verification',
                },
                {
                  menuValue: 'Illustration',
                  route: '/email-verification-2',
                },
                {
                  menuValue: 'Basic',
                  route: '/email-verification-3',
                },
              ],
            },
            {
              menuValue: '2 Step Verification',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Cover',
                  route: '/two-step-verification',
                },
                {
                  menuValue: 'Illustration',
                  route: '/two-step-verification-2',
                },
                {
                  menuValue: 'Basic',
                  route: '/two-step-verification-3',
                },
              ],
            },
            {
              menuValue: 'Lock Screen',
              route: '/lock-screen',
            },
            {
              menuValue: '404 Error',
              route: '/error-404',
            },
            {
              menuValue: '500 Error',
              route: '/error-500',
            },
            {
              menuValue: 'Base UI',
              base: 'baseui',
              customSubmenuTwo: true,
              subMenusTwo: [
                {
                  menuValue: 'Alerts',
                  route: routes.alert,
                  base: 'ui-alerts',
                },
                {
                  menuValue: 'Accordions',
                  route: routes.accordions,
                  base: 'ui-accordion',
                },
                { menuValue: 'Avatar', route: routes.avatar, base: 'ui-avatar' },
                { menuValue: 'Badges', route: routes.badges, base: 'ui-badges' },
                { menuValue: 'Borders', route: routes.border, base: 'ui-borders' },
                {
                  menuValue: 'Buttons',
                  route: routes.buttons,
                  base: 'ui-buttons',
                },
                {
                  menuValue: 'Button Group',
                  route: routes.buttonGroup,
                  base: 'ui-buttons-group',
                },
                {
                  menuValue: 'Breadcrumb',
                  route: routes.breadcrumb,
                  base: 'ui-breadcrumb',
                },
                { menuValue: 'Cards', route: routes.cards, base: 'ui-cards' },
                {
                  menuValue: 'Carousel',
                  route: routes.carousel,
                  base: 'ui-carousel',
                },
                {
                  menuValue: 'Colors',
                  route: routes.color,
                  base: 'ui-colors',
                },
                {
                  menuValue: 'Dropdowns',
                  route: routes.dropDown,
                  base: 'ui-dropdowns',
                },
                { menuValue: 'Grid', route: routes.grid, base: 'ui-grid' },
                { menuValue: 'Images', route: routes.images, base: 'ui-images' },
                {
                  menuValue: 'Lightbox',
                  route: routes.lightBox,
                  base: 'ui-lightbox',
                },
                { menuValue: 'Media', route: routes.media, base: 'ui-media' },
                { menuValue: 'Modals', route: routes.modal, base: 'ui-modals' },
                {
                  menuValue: 'Offcanvas',
                  route: routes.offcanvas,
                  base: 'ui-offcanvas',
                },
                {
                  menuValue: 'Pagination',
                  route: routes.pagination,
                  base: 'ui-pagination',
                },

                {
                  menuValue: 'Progress Bars',
                  route: routes.progressBars,
                  base: 'ui-progress',
                },
                {
                  menuValue: 'Placeholders',
                  route: routes.placeholder,
                  base: 'ui-placeholders',
                },

                {
                  menuValue: 'Spinner',
                  route: routes.spinner,
                  base: 'ui-spinner',
                },
                {
                  menuValue: 'Range Slider',
                  route: routes.rangeSlider,
                  base: 'ui-rangeslider',
                },

                { menuValue: 'Toasts', route: routes.toasts, base: 'ui-toasts' },
                {
                  menuValue: 'Tooltip',
                  route: routes.tooltip,
                  base: 'ui-tooltips',
                },
                {
                  menuValue: 'Typography',
                  route: routes.typography,
                  base: 'ui-typography',
                },
                { menuValue: 'Videos', route: routes.video, base: 'ui-video' },
              ],
            },
            {
              menuValue: 'Advanced UI',
              base: 'advancedui',
              customSubmenuTwo: true,
              subMenusTwo: [
                { menuValue: 'Ribbon', route: routes.ribbon, base: 'ui-ribbon' },
                {
                  menuValue: 'Clipboard',
                  route: routes.clipboards,
                  base: 'ui-clipboard',
                },
                {
                  menuValue: 'Drag & Drop',
                  route: routes.dragDrop,
                  base: 'ui-drag-drop',
                },
                {
                  menuValue: 'Rating',
                  route: routes.rating,
                  base: 'ui-rating',
                },
                {
                  menuValue: 'Text Editor',
                  route: routes.textEditor,
                  base: 'ui-text-editor',
                },
                {
                  menuValue: 'Counter',
                  route: routes.counter,
                  base: 'ui-counter',
                },
                {
                  menuValue: 'Scrollbar',
                  route: routes.scrollbar,
                  base: 'ui-scrollbar',
                },
                {
                  menuValue: 'Timeline',
                  route: routes.timeline,
                  base: 'ui-timeline',
                },
              ],
            },
            {
              menuValue: 'Forms',
              customSubmenuTwo: true,
              base: 'forms',
              base1: 'form-elements',
              base2: 'form-layouts',
              subMenusTwo: [
                {
                  menuValue: 'Basic Inputs',
                  route: routes.formBasicInputs,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-basic-inputs',
                },
                {
                  menuValue: 'Checkbox & Radios',
                  route: routes.formCheckboxRadios,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-checkbox-radios',

                },
                {
                  menuValue: 'Input Groups',
                  route: routes.formInputsGroups,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-input-groups',

                },
                {
                  menuValue: 'Grid & Gutters',
                  route: routes.formGridGutters,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-grid-gutters',
                },
                {
                  menuValue: 'Form Select',
                  route: routes.formSelect,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-select',

                },
                {
                  menuValue: 'Input Masks',
                  route: routes.formMask,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-mask',
                },
                {
                  menuValue: 'File Uploads',
                  route: routes.formFileUpload,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-fileupload',
                },
                {
                  menuValue: 'Horizontal Form',
                  route: routes.formHorizontal,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-horizontal'
                },
                {
                  menuValue: 'Vertical Form',
                  route: routes.formVertical,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-vertical',
                },
                {
                  menuValue: 'Floating Labels',
                  route: routes.formFloatingLabels,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-floating-labels',

                },
                {
                  menuValue: 'Form Validation',
                  route: routes.formValidation,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-validation',
                },

              ],
            },
            {
              menuValue: 'Tables',
              customSubmenuTwo: true,
              base: 'tables',
              subMenusTwo: [
                {
                  menuValue: 'Basic Tables',
                  route: routes.basictables,
                  base: 'tables-basic',
                },
                {
                  menuValue: 'Data Tables',
                  route: routes.datatables,
                  base: 'data-basic',
                },
              ],
            },
            {
              menuValue: 'Charts',
              customSubmenuTwo: true,
              base: 'charts',
              subMenusTwo: [
                {
                  menuValue: 'Apex Charts',
                  route: routes.apexChart,
                  base: 'apex-charts',
                },
                {
                  menuValue: 'Ng2 Charts',
                  route: routes.ngTwoCharts,
                  base: 'ng2-charts',
                },
                {
                  menuValue: 'Prime NG Charts',
                  route: routes.chartPrime,
                  base: 'prime-ng',
                },
              ],
            },
            {
              menuValue: 'Icons',
              customSubmenuTwo: true,
              base: 'icon',
              subMenusTwo: [
                {
                  menuValue: 'Fontawesome Icons',
                  route: routes.fontawesome,
                  base: 'icon-fontawesome',
                },
                {
                  menuValue: 'Feather Icons',
                  route: routes.feather,
                  base: 'icon-feather',
                },
                {
                  menuValue: 'Ionic Icons',
                  route: routes.ionic,
                  base: 'icon-ionic',
                },
                {
                  menuValue: 'Material Icons',
                  route: routes.material,
                  base: 'icon-material',
                },
                { menuValue: 'pe7 Icons', route: routes.pe7, base: 'icon-pe7' },
                {
                  menuValue: 'Simpleline Icons',
                  route: routes.simpleLine,
                  base: 'icon-simple-line',
                },
                {
                  menuValue: 'Themify Icons',
                  route: routes.themify,
                  base: 'icon-themify',
                },
                {
                  menuValue: 'Weather Icons',
                  route: routes.weather,
                  base: 'icon-weather',
                },
                {
                  menuValue: 'Typicon Icons',
                  route: routes.typicon,
                  base: 'icon-typicon',
                },
                { menuValue: 'Flag Icons', route: routes.flag, base: 'icon-flag' },
              ],
            },
          ],
        },
      ],
    },
  ];
  public getSideBarData3: BehaviorSubject<MainMenu[]> = new BehaviorSubject<
  MainMenu[]
>(this.horizontalSidebar);
public resetData3(): void {
  this.sideBar.map((res: SideBar) => {
    res.showAsTab = false;
    res.menu.map((menus: SideBarMenu) => {
      menus.showSubRoute = false;
    });
  });
}
}
