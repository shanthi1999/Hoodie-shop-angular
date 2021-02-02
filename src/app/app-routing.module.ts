import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [

{ path:'top', component : TopbarComponent },

{ path:'side', component : SidebarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingcomponents =[TopbarComponent, SidebarComponent ]