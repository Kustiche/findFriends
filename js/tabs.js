import { tabsSidebar ,sidebarItem, contentItem } from "./view.js";
import { sidebarItemArray } from "./sidebarItemArray.js";

let itemIndex = '';

export function tabs() {
	sidebarItem.forEach((item) => {
		sidebarItemArray.push({name: item.textContent});
	});

	tabsSidebar.addEventListener('click', (e) => {
		const isItemClick = e.target.classList.contains('tabs__sidebar-item');
		const isItemActive = e.target.classList.contains('active');

		if(isItemClick && !isItemActive) {
			const item = document.querySelector('.active');

			item.classList.remove('active');
			e.target.classList.add('active');

			itemIndex = sidebarItemArray.findIndex((item) => item.name === e.target.textContent);

			contentItem.forEach((item) => {
				item.classList.add('hidden');
			});

			contentItem[itemIndex].classList.remove('hidden');
		};
	});
};