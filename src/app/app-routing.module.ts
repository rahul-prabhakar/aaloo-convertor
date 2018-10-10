import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvertorComponent} from './convertor/convertor.component';
import { FontsComponent} from './fonts/fonts.component';

const routes: Routes = [
{
  path: '',
  component: ConvertorComponent
},
{
  path : 'fonts',
  component: FontsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
