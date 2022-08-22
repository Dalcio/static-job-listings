import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
})
export class FilterBarComponent implements OnInit {
  filters: string[] = ['Fronted', 'Css', 'JavaScript'];

  @Input() onFilter: ((filters: string[]) => void) | undefined;

  handleFilter = () => {
    if (this.onFilter) {
      this.onFilter(this.filters);
    }
  };

  removeFilter = (index: number): void => {
    this.filters.splice(index, 1);
    this.handleFilter();
  };

  addFilter = (filter: string): void => {
    this.filters.push(filter);
    this.handleFilter();
  };

  constructor() {}

  ngOnInit(): void {
    if (this.onFilter) {
      this.onFilter(this.filters);
    }
  }
}
