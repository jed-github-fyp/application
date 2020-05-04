import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'class-a',
    loadChildren: () => import('./pages/class-a/class-a.module').then( m => m.ClassAPageModule)
  },
  {
    path: 'class-b',
    loadChildren: () => import('./pages/class-b/class-b.module').then( m => m.ClassBPageModule)
  },
  {
    path: 'attend',
    loadChildren: () => import('./pages/attend/attend.module').then( m => m.AttendPageModule)
  },
  {
    path: 'work',
    loadChildren: () => import('./pages/work/work.module').then( m => m.WorkPageModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./pages/student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'subject',
    loadChildren: () => import('./pages/subject/subject.module').then( m => m.SubjectPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'homework2',
    loadChildren: () => import('./pages/homework2/homework2.module').then( m => m.Homework2PageModule)
  },
  {
    path: 'class2',
    loadChildren: () => import('./pages/class2/class2.module').then( m => m.Class2PageModule)
  },
  {
    path: 'attend2',
    loadChildren: () => import('./pages/attend2/attend2.module').then( m => m.Attend2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
