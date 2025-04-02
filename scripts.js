const civilAircrafts = [
  "assets/avion-civil-1.jpg",
  "assets/avion-civil-2.jpg",
  "assets/avion-civil-3.jpg",
  "assets/avion-civil-4.jpg",
  "assets/avion-civil-5.jpg",
];

const militaryAircrafts = [
  "assets/avion-militar-1.jpg",
  "assets/avion-militar-2.jpg",
  "assets/avion-militar-3.jpg",
  "assets/avion-militar-4.jpg",
  "assets/avion-militar-5.jpg",
];

const civilHelicopters = [
  "assets/helicoptero-civil-1.jpg",
  "assets/helicoptero-civil-2.jpg",
  "assets/helicoptero-civil-3.jpg",
  "assets/helicoptero-civil-4.jpg",
  "assets/helicoptero-civil-5.jpg",
];

const militaryHelicopter = [
  "assets/helicoptero-militar-1.jpg",
  "assets/helicoptero-militar-2.jpg",
  "assets/helicoptero-militar-3.jpg",
  "assets/helicoptero-militar-4.jpg",
  "assets/helicoptero-militar-5.jpg",
];

class Gallery {
  constructor(civilImages, militaryImages) {
    this.civilImages = civilAircrafts;
    this.militaryImages = militaryAircrafts;
  }

  getRandomCivil() {
    let num = Math.floor(Math.random() * 4);
    return this.civilImages[num]
    //document.body.imageUrl = this.civilImages[num];
  }

  getRandomMilitary() {
    let num = Math.floor(Math.random() * 4);
   return this.militaryImages[num]
   // document.body.imageUrl = this.militaryImages[num];
  }

  getAll() {
    let num = Math.floor(Math.random() * 4);
    return this.militaryImages[num], this.civilImages[num]
  //  (document.body.imageUrl = this.militaryImages[num]), this.civilImages[num];
  }
}

class Painter {
  constructor(civilImages, militaryImages) {
    this.civilImages = civilAircrafts, civilHelicopters;
    this.militaryImages = militaryAircrafts, militaryHelicopter;
  }

  createGallery() {
    let gallery = document.createElement("section")
    document.body.appendChild()
  }

  createImageTag(imageUrl) {
    
  }

  paintSingleImage(imageUrl) {}

  paintMultipleImages(arrayOfImages) {}
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();
