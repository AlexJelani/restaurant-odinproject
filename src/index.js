import {intialPageLoad} from "./intial-page-load";
import { menu } from "./menu";
import { contact } from "./contact";
import "./assets/style.css";

intialPageLoad();


//Tab switching module 
let tabSwitchModule = (function () {
    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", intialPageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menu);

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click", contact);

})();