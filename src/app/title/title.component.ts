import { Component, OnInit , Input, OnChanges, OnDestroy, } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "Hello World";

  constructor() { }
  ngOnInit(): void {

  }
  ngOnChanges(): void {
    alert("texto alterado com sucesso!")
  }
  ngOnDestroy(): void {
    console.log('Method ngOnDestroy.');
  }

}
