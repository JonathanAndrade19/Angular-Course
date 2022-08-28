import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = 'Jonathan';
  public idade: number = 26;

  public desabilitar: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
}
