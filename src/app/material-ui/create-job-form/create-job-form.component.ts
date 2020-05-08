import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job, JobState } from 'src/Model/MaterialUI/Job';


import * as moment from 'moment';

@Component({
  selector: 'app-create-job-form',
  templateUrl: './create-job-form.component.html',
  styleUrls: ['./create-job-form.component.css'],

})
export class CreateJobFormComponent implements OnInit {
  @Output() addJob: EventEmitter<Job> = new EventEmitter();

  name: FormControl      = new FormControl('', [Validators.required]);
  startDate: FormControl = new FormControl(moment());
  endDate: FormControl   = new FormControl(moment());
  
  intervalId: NodeJS.Timer;
  progress: number = 0;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  finishSubmit()
  {
    console.log(
      this.name.value,
      this.startDate.value.format("YYYY-MM-DD"),
      this.endDate.value.format("YYYY-MM-DD"),
    );
    this.progress = 10;
    const intervalFn = () => {
      this.progress += 33;
      if (this.progress >= 100) {

        this.progress = 0;
        clearInterval(this.intervalId);
      }
    };
    this.intervalId = setInterval(intervalFn, 500);

    var job = new Job();
    job.name = this.name.value;
    job.startDate = this.startDate.value.toDate();
    job.endDate = this.endDate.value.toDate();
    job.state = JobState.Pending;
    this.addJob.emit(job);
  }

}
