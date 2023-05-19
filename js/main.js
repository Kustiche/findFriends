import { heart } from "./view.js";
import { tabs } from "./tabs.js";
import { addArrayQuestionnaire } from "./addArrayQuestionnaire.js";

tabs();

heart.forEach((item) => {
  item.addEventListener('click', () => {
    addArrayQuestionnaire(item);
  });
});