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
    name: "",
    Shedding: "",
    Grooming: "",
    playfulness: "",
    protectiveness: "",
    energy: "",
    barking: "",
    trainability: "",
    drooling: ""
  };

  constructor(private dogApiService: DogApiService) { }

  ngOnInit(): void {
    this.dogApiService.getDogBreed('%20')
      .subscribe((data: any) => {
        this.breedData = data;
      });
  }

  changeDogData() {
    this.dogApiService.getDogBreed(this.selectedDogName)
      .subscribe((data: any) => {
        this.handleData(data[0])
        console.log(data[0]);


      });
  }

  handleData(dogData: any) {
    this.selectedDog.image_link = dogData?.image_link;
    this.selectedDog.name = dogData.name;
    this.selectedDog.Shedding = dogData.shedding;
    this.selectedDog.Grooming = dogData.grooming;
    this.selectedDog.playfulness = dogData.playfulness;
    this.selectedDog.protectiveness = dogData.protectiveness;
    this.selectedDog.energy = dogData.energy;
    this.selectedDog.barking = dogData.barking;
    this.selectedDog.trainability = dogData.trainability;
    this.selectedDog.drooling = dogData.drooling;
  }
}
