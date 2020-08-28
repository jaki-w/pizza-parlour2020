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
    for(let i = 1; i < this.toppings.length; i ++) {
      this.cost += 1;
    }
  }
  console.log(this.cost);
  return this.cost;
}

Pizza.prototype.reviewOrder = function(toppingsList) {
  $("#reviewOrder").html("Size: " + this.size +"<br>" + "Sauce: " + this.sauce + "<br>" + "Protein: " + this.protein + "<br>" + "Toppings: " + toppingsList + "<br>" + "Total: $" + this.cost);
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    
    let size = $("input:radio[name=size]:checked").val();
    let sauce = $("input:radio[name=sauce]:checked").val();
    let protein = $("input:radio[name=protein]:checked").val();
    let toppingsList = [];
    let toppings = $("input:checkbox[name=toppings]:checked");
    toppings.each(function() {
      let toppingItem = " " + $(this).val();
      toppingsList.push(toppingItem);
    });
    let pizza = new Pizza(size, sauce, protein, toppings);
    console.log(pizza);

    let pizzaCost = pizza.finalCost();
    pizza.reviewOrder(toppingsList);
    alert(pizzaCost);
  })
})
