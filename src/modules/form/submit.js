import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

const todayRef = dayjs(new Date()).format("YYYY-MM-DD");

// get the current date
selectedDate.value = todayRef;

// minium date
selectedDate.min = todayRef;

form.onsubmit = (event) => {
  event.preventDefault();

  console.log("Rodando o Script");
};
