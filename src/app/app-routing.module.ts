import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { GroupInfoPageComponent } from './pages/group-info-page/group-info-page.component';

const routes: Routes = [
  { path: '', component: GroupPageComponent },
  { path: 'group/:id', component: GroupInfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
