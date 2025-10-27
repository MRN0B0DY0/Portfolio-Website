// all the buttons from navbar
const homebtn = document.getElementById("home-btn");
const projectbtn = document.getElementById("project-btn");
const educationbtn = document.getElementById("education-btn");
const skillbtn = document.getElementById("skill-btn");
const contactbtn = document.getElementById("contact-btn");

// all the sections to be display by navbar button
const homesection = document.getElementById("home-section");
const projectsection = document.getElementById("project-section");
const educationsection = document.getElementById("education-section");
const skillsection = document.getElementById("skill-section");
const contactsection = document.getElementById("contact-section");

// all the projects button 
const DreamHarmoneyBTN = document.getElementById("DreamHarmoneyBTN");
const FoodMunchBTN = document.getElementById("FoodMunchBTN");
const TodoListBTN = document.getElementById("TodoListBTN");
const GallaryAppBTN = document.getElementById("GallaryAppBTN");
const SearchLocationBTN = document.getElementById("SearchLocationBTN");
const BrowserHistoryBTN = document.getElementById("BrowserHistoryBTN");
const CapitalSearchBTN = document.getElementById("CapitalSearchBTN");

// all the sections to be displayed by project button
const dreamHarmoneyDIS = document.getElementById("dreamHarmoneyDIS");
const FoodMunchDIS = document.getElementById("FoodMunchDIS");
const TodoListDIS = document.getElementById("TodoListDIS");
const GallaryAppDIS = document.getElementById("GallaryAppDIS");
const SearchLocationDIS = document.getElementById("SearchLocationDIS");
const BrowserHistoryDIS = document.getElementById("BrowserHistoryDIS");
const CapitalSearchDIS = document.getElementById("CapitalSearchDIS");

// it hiddes the section of projects
const displaySection = document.getElementById("display-section");

// navbar button
homebtn.addEventListener("click", () => {
  projectsection.classList.add("hidden");
  educationsection.classList.add("hidden");
  skillsection.classList.add("hidden");
  contactsection.classList.add("hidden");
  displaySection.classList.add("hidden");
  homesection.classList.remove("hidden");

  //hide all the opened projects before opening this section
  dreamHarmoneyDIS.classList.add("hidden");
  FoodMunchDIS.classList.add("hidden");
  TodoListDIS.classList.add("hidden");
  GallaryAppDIS.classList.add("hidden");
  SearchLocationDIS.classList.add("hidden");
  BrowserHistoryDIS.classList.add("hidden");
  CapitalSearchDIS.classList.add("hidden");
});

projectbtn.addEventListener("click", () => {
  homesection.classList.add("hidden");
  educationsection.classList.add("hidden");
  skillsection.classList.add("hidden");
  contactsection.classList.add("hidden");
  displaySection.classList.remove("hidden");
  dreamHarmoneyDIS.classList.remove("hidden");
  projectsection.classList.remove("hidden");
});

educationbtn.addEventListener("click", () => {
  homesection.classList.add("hidden");
  projectsection.classList.add("hidden");
  skillsection.classList.add("hidden");
  contactsection.classList.add("hidden");
  displaySection.classList.add("hidden");
  educationsection.classList.remove("hidden");

  //hide all the opened projects before opening this section
  dreamHarmoneyDIS.classList.add("hidden");
  FoodMunchDIS.classList.add("hidden");
  TodoListDIS.classList.add("hidden");
  GallaryAppDIS.classList.add("hidden");
  SearchLocationDIS.classList.add("hidden");
  BrowserHistoryDIS.classList.add("hidden");
  CapitalSearchDIS.classList.add("hidden");
});

skillbtn.addEventListener("click", () => {
  homesection.classList.add("hidden");
  projectsection.classList.add("hidden");
  educationsection.classList.add("hidden");
  contactsection.classList.add("hidden");
  displaySection.classList.add("hidden");
  skillsection.classList.remove("hidden");

  //hide all the opened projects before opening this section
  dreamHarmoneyDIS.classList.add("hidden");
  FoodMunchDIS.classList.add("hidden");
  TodoListDIS.classList.add("hidden");
  GallaryAppDIS.classList.add("hidden");
  SearchLocationDIS.classList.add("hidden");
  BrowserHistoryDIS.classList.add("hidden");
  CapitalSearchDIS.classList.add("hidden");
});

contactbtn.addEventListener("click", () => {
  homesection.classList.add("hidden");
  projectsection.classList.add("hidden");
  educationsection.classList.add("hidden");
  skillsection.classList.add("hidden");
  displaySection.classList.add("hidden");
  contactsection.classList.remove("hidden");

  //hide all the opened projects before opening this section
  dreamHarmoneyDIS.classList.add("hidden");
  FoodMunchDIS.classList.add("hidden");
  TodoListDIS.classList.add("hidden");
  GallaryAppDIS.classList.add("hidden");
  SearchLocationDIS.classList.add("hidden");
  BrowserHistoryDIS.classList.add("hidden");
  CapitalSearchDIS.classList.add("hidden");
});

// all the button of project 
DreamHarmoneyBTN.addEventListener("click", () => {
  FoodMunchDIS.classList.add("hidden");
  TodoListDIS.classList.add("hidden");
  GallaryAppDIS.classList.add("hidden");
  SearchLocationDIS.classList.add("hidden");
  BrowserHistoryDIS.classList.add("hidden");
  CapitalSearchDIS.classList.add("hidden");
  dreamHarmoneyDIS.classList.remove("hidden");
});

FoodMunchBTN.addEventListener("click", () => {
  dreamHarmoneyDIS.classList.add("hidden");
  TodoListDIS.classList.add("hidden");
  GallaryAppDIS.classList.add("hidden");
  SearchLocationDIS.classList.add("hidden");
  BrowserHistoryDIS.classList.add("hidden");
  CapitalSearchDIS.classList.add("hidden");
  FoodMunchDIS.classList.remove("hidden");
});

TodoListBTN.addEventListener("click", () => {
  FoodMunchDIS.classList.add("hidden");
  dreamHarmoneyDIS.classList.add("hidden");
  GallaryAppDIS.classList.add("hidden");
  SearchLocationDIS.classList.add("hidden");
  BrowserHistoryDIS.classList.add("hidden");
  CapitalSearchDIS.classList.add("hidden");
  TodoListDIS.classList.remove("hidden");
});

GallaryAppBTN.addEventListener("click", () => {
  FoodMunchDIS.classList.add("hidden");
  TodoListDIS.classList.add("hidden");
  dreamHarmoneyDIS.classList.add("hidden");
  SearchLocationDIS.classList.add("hidden");
  BrowserHistoryDIS.classList.add("hidden");
  CapitalSearchDIS.classList.add("hidden");
  GallaryAppDIS.classList.remove("hidden");
});

SearchLocationBTN.addEventListener("click", () => {
  FoodMunchDIS.classList.add("hidden");
  TodoListDIS.classList.add("hidden");
  GallaryAppDIS.classList.add("hidden");
  dreamHarmoneyDIS.classList.add("hidden");
  BrowserHistoryDIS.classList.add("hidden");
  CapitalSearchDIS.classList.add("hidden");
  SearchLocationDIS.classList.remove("hidden");
});

BrowserHistoryBTN.addEventListener("click", () => {
  FoodMunchDIS.classList.add("hidden");
  TodoListDIS.classList.add("hidden");
  GallaryAppDIS.classList.add("hidden");
  SearchLocationDIS.classList.add("hidden");
  dreamHarmoneyDIS.classList.add("hidden");
  CapitalSearchDIS.classList.add("hidden");
  BrowserHistoryDIS.classList.remove("hidden");
});

CapitalSearchBTN.addEventListener("click", () => {
  FoodMunchDIS.classList.add("hidden");
  TodoListDIS.classList.add("hidden");
  GallaryAppDIS.classList.add("hidden");
  SearchLocationDIS.classList.add("hidden");
  BrowserHistoryDIS.classList.add("hidden");
  dreamHarmoneyDIS.classList.add("hidden");
  CapitalSearchDIS.classList.remove("hidden");
});


// animated word
const textBox = document.getElementById("animatedword");
const words = ["Developer", "Designer", "Learner", "Innovator"];
let index = 0;

setInterval(() => {
  textBox.classList.add("opacity-0");

  setTimeout(() => {
    index = (index + 1) % words.length;
    textBox.textContent = words[index];
    textBox.classList.remove("opacity-0");
  }, 700);
}, 2000);