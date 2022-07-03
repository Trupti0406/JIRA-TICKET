let allColors = document.querySelectorAll(".color");
let main = document.querySelector(".main");
const addBtn = document.querySelector(".add");
const colors = ["pink", "blue", "green", "black"];
const colorBoxes = document.querySelectorAll(".color_boxes");
const lock = document.querySelector(".lock");
const unlock = document.querySelector(".unlock");
const deleteBtn = document.querySelector(".delete");



for (let i = 0; i < allColors.length; i++) {
  allColors[i].addEventListener("click", changeColor);
}
// e-> is the object that will be given by browser
function changeColor(e) {
  // e.currentarget -> refers the element on which event has
  // occurred
  let elem = e.currentTarget;
  // all the classes present on the element
  let allclasses = elem.classList;
  let color = allclasses[1];
  console.log(color);
  main.style.backgroundColor = color;
}
function createTicket() {
  // 2. main -> ticket add
  let id = uuidv4();
  let ticket = document.createElement("div");
  ticket.setAttribute("class", "ticket");
  ticket.innerHTML = `
    <div class="ticket_header black"></div>
    <div class="ticket_content">
        <div class="ticket_id ">
            #${id}
        </div>
        <textarea name=""></textarea>
    </div>
`;
  main.appendChild(ticket);
  // ticket should have some functionalites

  // 3. change color
  // header pe click ho -> change the color
  let header = ticket.querySelector(".ticket_header");
  header.addEventListener("click", changeColor);
  // 4. lock and unlock,color filtering
  // diificult
}
