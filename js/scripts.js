function Pizza(size, sauce, protein, toppings, cost) {
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
  if (this.toppings) {
    toppings.forEach(function(topping) {
      this.cost += 1;
    })
  }
  console.log(this.cost);
  return this.cost;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    
    let size = "medium";
    let protein = "none";
    // $("input:checkbox[name=toppings]:checked").each(function() {

    // })
    let toppings = ["topping", "topping"];

    let pizza = new Pizza(size, protein, toppings);

    let pizzaCost = pizza.finalCost();
    alert(pizzaCost);
  })
})
