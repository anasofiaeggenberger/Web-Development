import { Component, OnInit } from '@angular/core';
import { ProgrammingQuoteService } from '../../services/programming-quote.service';

@Component({
  selector: 'app-programming-quote',
  templateUrl: './programming-quote.component.html',
  styleUrls: ['./programming-quote.component.css']
})
export class ProgrammingQuoteComponent implements OnInit {
  quote: string = '';
  author: string = '';

  constructor(private quoteService: ProgrammingQuoteService) {}

  ngOnInit(): void {
    this.quoteService.getQuote().subscribe((data) => {
      this.quote = data.en;
      this.author = data.author;
    });
  }
}