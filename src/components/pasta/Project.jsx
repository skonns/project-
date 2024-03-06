export default class Project {
  id = "";
  name = ""
  description = ""
  ingredients = ""
  price = ""
  image = ""

  constructor(initilizer) {
    this.id = initilizer.id;
    this.name = initilizer.name
    this.description = initilizer.description
    this.ingredients = initilizer.ingredients
    this.price = initilizer.price
    this.image = initilizer.image
  }
}
