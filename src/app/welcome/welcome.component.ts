import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  message: any;

  constructor(private actRoute: ActivatedRoute , private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.actRoute.snapshot.params['name']);
  }

  getWelcomeMsg() {
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      res => {
        this.message = res['message'];
      }
    )
  }
}
