const orders = [
  {
    id: 18,
    name: "سیب",
    amount: 20,
    price: 20000,
    status: 0,
  },
  {
    id: 12,
    name: "موز",
    amount: 15,
    price: 30000,
    status: 1,
  },
  {
    id: 32,
    name: "انبه",
    amount: 3,
    price: 60000,
    status: 2,
  },
  {
    id: 45,
    name: "لیمو",
    price: 45000,
    amount: 5,
    status: 3,
  },
];
// get table id from html document
const table = document.getElementById("table");
// for each order in orders list array we make <tr></tr>
orders.forEach((order, index) => {
  let status_text = "";
  switch(order.status) {
    case 0:
      status_text = "لغو شده"
      break;
    case 1:
      status_text = "درحال بررسی"
      break;
    case 2:
      status_text = "پرداخت شده"
      break;
    default:
      status_text = "نامشخص"
      break;
  }
  const text = `
      <tr id="order${order.id}">
        <td>${index + 1}</td>
        <td>${order.name}</td>
        <td>${order.amount}</td>
        <td>${order.price}</td>
        <td>${order.amount * order.price}</td>
        <td data-status="${order.status}">${status_text}</td>
      </tr>
    `;
    // put <tr></tr> into table in html document
    table.innerHTML += text
});
