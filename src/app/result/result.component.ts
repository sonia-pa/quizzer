import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  state: any;
  correctCount: number = 0;
  incorrectCount: number = 0;

  constructor(private router:Router, public activatedRoute: ActivatedRoute) { 
    console.log(this.router.getCurrentNavigation().extras.state.correct)
  }

  ngOnInit(): void {

    this.state = history.state;
    console.log(typeof(this.state));
    console.log(JSON.stringify(this.state["correct"]) );
    this.correctCount = this.state["correct"];
    this.incorrectCount = this.state["incorrect"];

  }

}
