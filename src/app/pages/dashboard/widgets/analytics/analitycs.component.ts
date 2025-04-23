import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analitycs',
  imports: [MatButtonModule],
  templateUrl: './analitycs.component.html',
  styleUrl: './analitycs.component.css',
})
export class AnalitycsComponent implements OnInit {
  chart = viewChild.required<ElementRef>('chart');

  ngOnInit(): void {}
}
