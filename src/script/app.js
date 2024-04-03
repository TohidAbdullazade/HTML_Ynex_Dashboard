// note:Selectors
let currentArrow = document.querySelector("#down-arrow");
let firstDropDownMenu = document.querySelector(".sidebar-first-dropmenu");
let sidebarFirstli = document.querySelector(".sidebar-first-li");
let secondAccordion = document.querySelector(".pages-menu-container");
document.addEventListener("DOMContentLoaded", ActiveAllEvents);

// note:Active All Events
function ActiveAllEvents(e) {
  if (e.target) {
    sidebarFirstli.addEventListener("click", changeArrow);
    console.log("DOM loaded successful");
  } else {
    alert(
      "There is an error occured when DOM loaded the page auto reload after 1 second"
    );
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}

// note:Change the Arrow Direction
function changeArrow(e) {
  if (e.target) {
    currentArrow.classList.toggle("fa-rotate-90");
    firstDropDownMenu.classList.toggle("ShowFirstDropdown");
    secondAccordion.classList.toggle("pushSecondMenu");
  }
}
