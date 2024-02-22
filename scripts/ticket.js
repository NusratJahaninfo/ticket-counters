let add = [];
let total_price = 0;
let t_seat = 40;
let num = 0;

function buscounteer(name, name2, price) {
  add.push({ name, name2, price });
  total_price += price;

  reload();
}

function reload() {
  const cartelement = document.getElementById("itmes");
  const totalprice = document.getElementById("price");
  totalprice.textContent = total_price;
  cartelement.innerHTML = "";
  add.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = ${item.name}---------------------${item.name2}--------------${item.price};
    cartelement.appendChild(li);
  });

  let counter = num++;
  let caller = document.getElementById("cc");
  caller.textContent = num;

  let calc = --t_seat;
  let must = document.getElementById("XL");
  must.textContent = calc + " Seat left";

  if (t_seat == 0) {
    alert("No seat availabe");
    let dis = document.getElementById("count");
  }

  pricer();
}

function pricer() {
  let price1 = total_price;
  let call = document.getElementById("Gp");
  call.textContent = "BDT" + price1;
  Cuppon();
}

function Cuppon() {
  let take = total_price;
  if (take >= 2000) {
    let cut = parseInt(take * 0.2);
    let final = take - cut;
    document.getElementById("Gp").textContent = final;
  }
}