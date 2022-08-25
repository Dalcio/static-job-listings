import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private prJobs: Job[] = [
    {
      id: 1,
      company: 'Photosnap',
      logo: '../assets/images/photosnap.svg',
      new: true,
      featured: true,
      position: 'Senior Frontend Developer',
      role: 'Frontend',
      level: 'Senior',
      postedAt: '1d ago',
      contract: 'Full Time',
      location: 'USA Only',
      languages: ['HTML', 'CSS', 'JavaScript'],
      tools: [],
    },
    {
      id: 2,
      company: 'Manage',
      logo: '../assets/images/manage.svg',
      new: true,
      featured: true,
      position: 'Fullstack Developer',
      role: 'Fullstack',
      level: 'Midweight',
      postedAt: '1d ago',
      contract: 'Part Time',
      location: 'Remote',
      languages: ['Python'],
      tools: ['React'],
    },
    {
      id: 3,
      company: 'Account',
      logo: '../assets/images/account.svg',
      new: true,
      featured: false,
      position: 'Junior Frontend Developer',
      role: 'Frontend',
      level: 'Junior',
      postedAt: '2d ago',
      contract: 'Part Time',
      location: 'USA Only',
      languages: ['JavaScript'],
      tools: ['React', 'Sass'],
    },
    {
      id: 4,
      company: 'MyHome',
      logo: '../assets/images/myhome.svg',
      new: false,
      featured: false,
      position: 'Junior Frontend Developer',
      role: 'Frontend',
      level: 'Junior',
      postedAt: '5d ago',
      contract: 'Contract',
      location: 'USA Only',
      languages: ['CSS', 'JavaScript'],
      tools: [],
    },
    {
      id: 5,
      company: 'Loop Studios',
      logo: '../assets/images/loop-studios.svg',
      new: false,
      featured: false,
      position: 'Software Engineer',
      role: 'Fullstack',
      level: 'Midweight',
      postedAt: '1w ago',
      contract: 'Full Time',
      location: 'Worldwide',
      languages: ['JavaScript'],
      tools: ['Ruby', 'Sass'],
    },
    {
      id: 6,
      company: 'FaceIt',
      logo: '../assets/images/faceit.svg',
      new: false,
      featured: false,
      position: 'Junior Backend Developer',
      role: 'Backend',
      level: 'Junior',
      postedAt: '2w ago',
      contract: 'Full Time',
      location: 'UK Only',
      languages: ['Ruby'],
      tools: ['RoR'],
    },
    {
      id: 7,
      company: 'Shortly',
      logo: '../assets/images/shortly.svg',
      new: false,
      featured: false,
      position: 'Junior Developer',
      role: 'Frontend',
      level: 'Junior',
      postedAt: '2w ago',
      contract: 'Full Time',
      location: 'Worldwide',
      languages: ['HTML', 'JavaScript'],
      tools: ['Sass'],
    },
    {
      id: 8,
      company: 'Insure',
      logo: '../assets/images/insure.svg',
      new: false,
      featured: false,
      position: 'Junior Frontend Developer',
      role: 'Frontend',
      level: 'Junior',
      postedAt: '2w ago',
      contract: 'Full Time',
      location: 'USA Only',
      languages: ['JavaScript'],
      tools: ['Vue', 'Sass'],
    },
    {
      id: 9,
      company: 'Eyecam Co.',
      logo: '../assets/images/eyecam-co.svg',
      new: false,
      featured: false,
      position: 'Full Stack Engineer',
      role: 'Fullstack',
      level: 'Midweight',
      postedAt: '3w ago',
      contract: 'Full Time',
      location: 'Worldwide',
      languages: ['JavaScript', 'Python'],
      tools: ['Django'],
    },
    {
      id: 10,
      company: 'The Air Filter Company',
      logo: '../assets/images/the-air-filter-company.svg',
      new: false,
      featured: false,
      position: 'Front-end Dev',
      role: 'Frontend',
      level: 'Junior',
      postedAt: '1mo ago',
      contract: 'Part Time',
      location: 'Worldwide',
      languages: ['JavaScript'],
      tools: ['React', 'Sass'],
    },
  ];
  jobs: Job[] = [];

  onFilter = (filters: string[]): void => {
    if (filters.length > 0) {
      let filteredJobs: Job[] = [];

      filters.forEach((filter) => {
        const temp = this.prJobs.filter(
          (job) =>
            job.languages.map((j) => j.toLowerCase()).includes(filter) ||
            job.tools.map((j) => j.toLowerCase()).includes(filter)
        );

        if (temp.length > 0) {
          filteredJobs = [...filteredJobs, ...temp];
        }
      });

      this.jobs = [...filteredJobs];
    } else {
      this.jobs = [...this.prJobs];
    }
  };

  constructor() {
    this.jobs = [...this.prJobs];
  }
}

export type Job = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};
