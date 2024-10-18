const orders = [
  {
    id: 18,
    name: "Apple",
    amount: 20,
    price: 20000,
    status: 1,
  },
  {
    id: 12,
    name: "banana",
    amount: 15,
    price: 30000,
    status: 1,
  },
  {
    id: 32,
    name: "mango",
    amount: 3,
    price: 60000,
    status: 1,
  },
  {
    id: 45,
    name: "lemon",
    price: 45000,
    amount: 5,
    status: 1,
  },
];

const table = document.getElementById("table");

orders.forEach((order, index) => {
  const text = `
      <tr id="order${order.id}">
        <td>${index + 1}</td>
        <td>${order.name}</td>
        <td>${order.amount}</td>
        <td>${order.price}</td>
        <td>${order.amount * order.price}</td>
        <td data-status="${order.status}">${order.status == 1? "پرداخت شده" : "لغو شده"}</td>
      </tr>
    `;
    table.innerHTML += text
});
