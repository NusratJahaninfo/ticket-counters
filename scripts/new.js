let cartItems = [];
let totalPrice = 0;
let availableSeats = 40;
let numberOfItems = 0;

function selectSeat(name, classType, price) {
  cartItems.push({ name, classType, price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById("cart_items");
  const totalElement = document.getElementById("cart_price");
  totalElement.textContent = totalPrice;
  cartElement.innerHTML = "";
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} ${item.classType} $${item.price}`;
    cartElement.appendChild(li);
  });

  numberOfItems++;
  document.getElementById("cart_count").textContent = numberOfItems;

  if(numberOfItems > 4) {
    alert("Can't purchase more than 4 items.");
    document.getElementById("next_button").style.display = "none";
  }

  availableSeats--;
  document.getElementById("XL").textContent = `${availableSeats} Seats left`;

  if (availableSeats === 0) {
    alert("No seats available.");
  }

  updatePrice();
}

function updatePrice() {
  document.getElementById("grand_total").textContent = "BDT " + totalPrice;
  applyCoupons();
}

function applyCoupons() {
  const couponInput = document.getElementById('coupon_input').value;
  let discount = 0;

  if (couponInput === "NEW15") {
    discount = totalPrice * 0.15;
  } else if (couponInput === "Couple20") {
    discount = totalPrice * 0.20;
  }

  const discountedPrice = totalPrice - discount;
  document.getElementById("grand_total").textContent = `BDT ${discountedPrice}`;
}

document.getElementById('apply_coupon').addEventListener('click', applyCoupons);

document.getElementById('next_button').addEventListener('click', function() {
  document.getElementById('success').style.display = 'block';
});

document.getElementById('close').addEventListener('click', function() {
  document.getElementById('success').style.display = 'none';
});

function clickme(){
  document.getElementById("ticket_selection").style.display="none";
}

function proceedToNext() {
  document.getElementById("ticket_selection").style.display = "none";
}
