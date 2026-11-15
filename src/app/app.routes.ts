import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { DownloadSearch } from './features/download/download';
import { About } from './features/about/about';
export const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'home', component: Home },
 { path: 'login', component: Login },
 { path: 'download', component: DownloadSearch },
 { path: 'about', component: About },
 { path: '**', redirectTo: 'home' }
];
