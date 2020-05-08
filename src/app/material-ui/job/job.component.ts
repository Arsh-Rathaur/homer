import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Job } from 'src/Model/MaterialUI/Job';

import * as moment from 'moment';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  @Input() job: Job;
  @Input() dateFormat: string;
  @Output() onDelete: EventEmitter<Job> = new EventEmitter();
  @Output() onCancel: EventEmitter<Job> = new EventEmitter();
  @Output() onComplete: EventEmitter<Job> = new EventEmitter();
  
  startDateStr: string;
  endDateStr: string;

  constructor() { }

  ngOnInit() {
    if (this.dateFormat == undefined)
    {
      this.dateFormat = "YYYY-MM-DD HH:mm"
    }
    this.startDateStr = moment(this.job.startDate).format(this.dateFormat).toString();
    this.endDateStr = moment(this.job.endDate).format(this.dateFormat).toString();
  }
}
