"use strict";

const AnimalShelter = require("../stack-queue-animal-shelter");

describe("stacks", () => {
  it("Can successfully enqueue cat into the cat queue ", () => {
    const newAnimalShelter = new AnimalShelter();
    let animalTest1 = { pref: "cat" };

    expect(newAnimalShelter.enqueue(animalTest1)).toMatchObject(animalTest1);
  });

  it("Can successfully enqueue dog into the dog queue ", () => {
    const newAnimalShelter = new AnimalShelter();
    let animalTest1 = { pref: "dog" };
    expect(newAnimalShelter.enqueue(animalTest1)).toMatchObject(animalTest1);
  });

  it("Do not add to queue if animal.pref is not equal to dog or cat", () => {
    const newAnimalShelter = new AnimalShelter();
    let animalTest1 = { pref: "bird" };

    expect(newAnimalShelter.enqueue(animalTest1)).toBe("not Prefered");
  });

  it("Can successfully dequeue a cat  ", () => {
    const newAnimalShelter = new AnimalShelter();
    let animalTest1 = { pref: "cat" };

    newAnimalShelter.enqueue(animalTest1);

    expect(newAnimalShelter.dequeue("cat")).toMatchObject(animalTest1);
  });

  it("Can successfully dequeue a dog  ", () => {
    const newAnimalShelter = new AnimalShelter();
    let animalTest1 = { pref: "dog" };
    let animalTest2 = { pref: "dog" };

    newAnimalShelter.enqueue(animalTest1);

    expect(newAnimalShelter.dequeue("dog")).toMatchObject(animalTest1);
  });

  it("do not dequeue when queue is empty ", () => {
    const newAnimalShelter = new AnimalShelter();
    let animalTest1 = { pref: "bird" };

    expect(newAnimalShelter.dequeue("bird")).toBeNull();
  });
});