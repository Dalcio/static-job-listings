import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
})
export class FilterBarComponent implements OnInit {
  filters: string[] = ['Fronted', 'Css', 'JavaScript'];

  @Input() onFilter: ((filters: string[]) => void) | undefined;

  removeFilter(index: number): void {
    this.filters.splice(index, 1);

    if (this.onFilter) {
      this.onFilter(this.filters);
    }
  }

  constructor() {}

  ngOnInit(): void {
    if (this.onFilter) {
      this.onFilter(this.filters);
    }
  }
}
