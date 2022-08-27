import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{

  // public valor: number = 1;
  public destruir:boolean = true;
  constructor(){

  }
  ngOnDestroy(): void {
    console.log('Method ngOnDestroy.');
  }
  ngOnInit(): void {
    console.log('Method ngOnInit.');
  }

  public destruirComponent():void {
    this.destruir = false;
  }

  // public adicionar(): number{
  //   return this.valor += 1;
  // }

  // ngAfterViewChecked(): void {
  //   console.log('Method ngAfterViewChecked.');
  // }
  // ngAfterViewInit(): void {
  //   console.log('Method ngAfterViewInit.');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('Method ngAfterContentChecked.');
  // }
  // ngAfterContentInit(): void {
  //   console.log('Method ngAfterContentInit.');
  // }
  // ngDoCheck(): void {
  //   console.log('Method ngDoCheck.');
  // }

  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  // ngOnInit():void {
  //   setTimeout(() => {
  //     console.log('Testando o SetTimeOut')
  //   }, 9000)
  // }
}
