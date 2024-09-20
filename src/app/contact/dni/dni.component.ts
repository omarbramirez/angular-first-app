import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dni',
  standalone: true,
  imports: [],
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css'
})
export class DniComponent implements OnChanges{
  @Input() tipoDni: string = 'DNI'
  
  newVariable: string = 'Nothing yet'

  ngOnChanges(changes: SimpleChanges): void {
this.newVariable = !changes?.['tipoDni'].firstChange ? changes?.['tipoDni'].currentValue : 'Something now'
  }
}
