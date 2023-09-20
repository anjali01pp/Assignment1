import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'assign1';
  countries: string[] = ["Afghanistan",
  "Albania",
  "Algeria",
  "Angola",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Canada",
  "China",
  "Colombia",
  "Czech Republic",
  "Egypt",
  "France",
  "Germany",
  "Greece",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Italy",
  "Japan",
  "Kenya",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Russia",
  "Saudi Arabia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Venezuela",
  "Vietnam"
];

  filteredCountries :string[] = [];
  filterText: string = '';
  Filterlength! :number;
  filterCountries() {
  this.filteredCountries = this.countries.filter(country =>
  country.toLowerCase().startsWith(this.filterText.toLowerCase())
  );
  this.Filterlength =  this.filteredCountries.length;
    }
}
