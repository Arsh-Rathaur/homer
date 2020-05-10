import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ng-home',
  templateUrl: './ng-home.component.html',
  styleUrls: ['./ng-home.component.css']
})
export class NgHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    //console.log(this.route.snapshot.paramMap.get('id'));
    //console.log(this.route.snapshot.paramMap.keys);
  }
  
  ngOnInit() {
   //console.log(this.route.snapshot.params["id"]);
  }

}
