import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as moment from 'moment';
import { Job, JobState } from 'src/Model/MaterialUI/Job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobs: Job[];

  deleteJob(job: Job) : boolean
  {
    const i = this.jobs.indexOf(job);
    console.log(i);
    if (i == -1) return false;
    job.state = JobState.Deleted;
    return true;
  }

  completeJob(job: Job) : boolean
  {
    const i = this.jobs.indexOf(job);
    console.log(i);
    if (i == -1) return false;
    job.state = JobState.Completed;
    return true;
  }

  cancelJob(job: Job) : boolean
  {
    const i = this.jobs.indexOf(job);
    console.log(i);
    if (i == -1) return false;
    job.state = JobState.Cancelled;
    return true;
  }

  addJob(job: Job) : boolean
  {
    this.jobs.push(job);
    return true;
  }

  
  constructor() {
    this.jobs = [];
    for (let i = 0; i < 10; i++) {
      const job = new Job();
      job.name = 'Job ' + i.toString();
      job.startDate = moment().subtract(i * 2, 'days').toDate();
      job.endDate = moment().add(i * 3, 'days').toDate();
      job.state = JobState.Pending;
      this.jobs.push(job);
    }
  }

  getJobs(state: JobState): Observable<Job[]>
  {
    return new Observable<Job[]>(subscriber => {
      subscriber.next(this.jobs.filter(job => job.state == state));
      subscriber.complete();
    });
  }
}
