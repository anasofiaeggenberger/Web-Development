import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  studies: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.studies = this.dataService.studies;
  }
}