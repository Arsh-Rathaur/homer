import { Component, OnInit } from '@angular/core';
import { Job, JobState } from 'src/Model/MaterialUI/Job';
import { JobService } from 'src/Services/Job/job.service';

import * as moment from 'moment';

@Component({
  selector: 'app-material-page',
  templateUrl: './material-page.component.html',
  styleUrls: ['./material-page.component.css']
})
export class MaterialPageComponent implements OnInit {

  pendingJobs: Job[];
  completedJobs: Job[];
  cancelledJobs: Job[];

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    this.syncJobs();
  }

  handleDelete(job: Job)
  {
    console.log(job);
    this.jobService.deleteJob(job);
    this.syncJobs();
  }
  
  handleComplete(job: Job)
  {
    console.log(job);
    this.jobService.completeJob(job);
    this.syncJobs();
  } 

  handleCancel(job: Job)
  {
    console.log(job);
    this.jobService.cancelJob(job);
    this.syncJobs();
  }

  handleCreate(job: Job)
  {
    this.jobService.addJob(job);
    this.syncJobs();
  }

  syncJobs()
  {
    this.jobService.getJobs(JobState.Pending).subscribe(jobs => { this.pendingJobs = jobs; });
    this.jobService.getJobs(JobState.Completed).subscribe(jobs => { this.completedJobs = jobs; });
    this.jobService.getJobs(JobState.Cancelled).subscribe(jobs => { this.cancelledJobs = jobs; });
  }
}
