import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.css']
})
export class ExamResultComponent implements OnInit {
  public  message: string;

  @Input() points: number;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.points > 5) {
      this.message = 'Felicitări'
    } else {
      this.message = 'Mai încercaţi'
    }
  };

  goToStatistics(): void {
    this.router.navigate(['consumer'])
  };

}
