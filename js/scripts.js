function Pizza(size, sauce, protein, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.protein = protein;
  this.toppings = toppings;
  this.cost = 10;
}

Pizza.prototype.finalCost = function() {
  console.log(this.cost);
  if (this.size == "small") {
    this.cost += 0;
  } else if (this.size == "medium") {
    this.cost += 2;
  } else {
    this.cost += 4;
  }
  console.log(this.cost);
  if (this.protein == "none") {
    this.cost += 0;
  } else {
    this.cost += 2;
  }
  console.log(this.cost);
  if (this.toppings.length == 1) {
    this.cost += 0;
  } else {
    let chosenToppings = this.toppings;
    for(let i = 1; i < this.toppings.length; i ++) {
      this.cost += 1;
    }
  }
  console.log(this.cost);
  return this.cost;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    
    let size = "medium";
    let protein = "pepperoni";
    // $("input:checkbox[name=toppings]:checked").each(function() {

    // })
    let toppings = ["1", "2"];
    let sauce = "white";

    let pizza = new Pizza(size, sauce, protein, toppings);
    console.log(pizza);

    let pizzaCost = pizza.finalCost();
    alert(pizzaCost);
  })
})
