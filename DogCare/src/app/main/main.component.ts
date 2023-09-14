import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../dog-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  breedData: any[] = [];
  selectedDogName: string = "";
  selectedDog: any = {
    image_link: "",
    name: ""
  };

  constructor(private dogApiService: DogApiService) {}

  ngOnInit(): void {
    this.dogApiService.getDogBreed('%20')
      .subscribe((data: any) => {
        this.breedData = data;
      });
  }

  changeDogData() {
    this.dogApiService.getDogBreed(this.selectedDogName)
      .subscribe((data: any) => {
        this.selectedDog.image_link = data[0]?.image_link || "https://svgsilh.com/svg/1185460.svg";
      });
  }
}


