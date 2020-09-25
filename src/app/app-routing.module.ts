import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'result', component: ResultComponent},
  {path: '**', redirectTo: 'landing', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
