import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../services/config.service";
import {Config} from "../../interface/config";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  private headers: string[];
  private config: Config;

  constructor() { }
  configService: ConfigService;
  ngOnInit(): void {
  }
  showConfigResponse(){
    this.configService.getConfigResponse().subscribe(resp=>{
      const keys = resp.headers.keys();
      this.headers = keys.map(key=>`${key}:${resp.headers.get(key)}`);
      this.config = {...resp.body}
    });
  }

  showConfig(){
    this.configService.getConfig()
      this.configService.getConfig().subscribe(
          ((data:Config) => this.config = {...data})
      )
  }

}


