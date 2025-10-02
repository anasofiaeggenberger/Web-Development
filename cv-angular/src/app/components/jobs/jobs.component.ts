import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.jobs = this.dataService.jobs;
  }
}