import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { Question } from './question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions : Question[];
  index: number = 0;
  errorMessage: string = null;
  successMessage: string = null;
  wasEnable: boolean = false;
  correctCount: number = 0;
  incorrentCount: number = 0;
  constructor(private quizService: QuizService, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe(
      dt => {
        this.questions = dt 
      }
    )
  }

  onClick(val) {
    this.wasEnable = true;
    this.successMessage = null;
    this.errorMessage = null;
    if(val != this.questions[this.index].correctOption){
      this.correctCount++;
      this.errorMessage = "Correct solution: \n" + this.questions[this.index].correctOption;
    }else {
      this.incorrentCount++;
      this.successMessage = "Correct!"
    }

  }

  onContinue() {
    this.wasEnable = false;
    if(this.index < this.questions.length ){
      this.index++;
    }else{
      //navigate to score page landing
      // this.router.navigate(['result', {state: {correct: 0, incorrect: this.incorrentCount}}]);
      this.router.navigateByUrl('/result',{state: {correct: this.correctCount, incorrect: this.incorrentCount}} )
    }
  }

}
