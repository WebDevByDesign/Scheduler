// Get the current date and time
const dateElement = document.getElementById('date');
setInterval(() => {
  const now = dayjs();
  // Format date and time
  const dateFormatted = now.format('dddd, MMMM D, YYYY');
  const timeFormatted = now.format('HH:mm');
  // Update date and time every second
  dateElement.innerText = `${dateFormatted}\n${timeFormatted}`;
}, 1000);

  
  // Save input value to local storage
  function saveInputToLocalStorage() {
  // Get the id of the parent time-block element
    const timeBlockId = this.parentNode.id;
  // Get the input value from the corresponding textarea
    const inputVal = this.parentNode.querySelector(".description").value;
    localStorage.setItem(timeBlockId, inputVal);
  }
  // Loop through each save button and add a click event listener to it
  const saveButtons = document.querySelectorAll(".saveBtn");
  saveButtons.forEach(function(button) {
    button.addEventListener("click", saveInputToLocalStorage);
  });
  // Loop through each time block and get the saved event from local storage
const timeBlocks = document.querySelectorAll(".time-block");
timeBlocks.forEach(function(timeBlock) {
  const timeBlockId = timeBlock.id;
  const savedEvent = localStorage.getItem(timeBlockId);
  // If a saved event exists, set the value of the textarea to it
  if (savedEvent) {
    timeBlock.querySelector(".description").value = savedEvent;
  }
});

 

