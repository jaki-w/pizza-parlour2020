function Pizza(size, sauce, protein, toppings, cost) {
  this.size = size;
  this.sauce = sauce;
  this.protein = protein;
  this.toppings = [];
  this. cost = 10;
}

Pizza.prototype.finalCost = function(size, protein, toppings) {
  if (this.size == "small") {
    this.cost += 0;
  } else if (this.size == "medium") {
    this.cost += 2;
  } else {
    this.cost =+ 4;
  }
  if (this.protein == "none") {
    this.cost += 0;
  } else {
    this.cost += 2;
  }
  if (this.toppings == "none") {
    this.cost += 0;
  } else {
    toppings.forEach(function(topping) {
      this.cost += 1;
    })
  }
  return this.cost;
}
