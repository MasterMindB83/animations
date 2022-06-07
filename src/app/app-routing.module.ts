import { Page3Component } from './simpsons/page3/page3.component';
import { Page2Component } from './simpsons/page2/page2.component';
import { Page1Component } from './simpsons/page1/page1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'page1', component: Page1Component, data:{animation:'isLeft'}},
  {path:'page2', component: Page2Component},
  {path:'page3', component: Page3Component, data:{animation:'isRight'}},
  {path:"",redirectTo:"/page1", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
