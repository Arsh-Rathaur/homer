export enum JobState {
  Pending,
  Completed,
  Cancelled,
  Deleted
}

export class Job {
  startDate: Date;
  endDate: Date;
  state: JobState;
  name: string;
  location: string;

  isComplete(): boolean { return this.state == JobState.Completed; }
  isCancelled(): boolean { return this.state == JobState.Cancelled; }
  isDeleted(): boolean { return this.state == JobState.Deleted; }
  isPending(): boolean { return this.state == JobState.Pending; }
}