import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  animals: String[]
  name: String
  age: Number

  constructor(public databaseService: DatabaseService) { }

  ngOnInit() {
    this.animals = []
    this.databaseService.getAnimals()
    .subscribe(animals => this.animals = animals)
  }

  addAnimal() {
    const animal = {
      name: this.name,
      age: this.age
    }

    this.databaseService.saveAnimal(animal)
    .subscribe(animal => this.animals.push(animal))

    return false
  }
}
