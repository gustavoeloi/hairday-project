import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export function schedulesDay() {
  const date = selectedDate.value;

  // display the available schedules
  hoursLoad({ date });
}
