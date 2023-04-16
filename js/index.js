const links = document.querySelectorAll('nav > a');
const sections = document.querySelectorAll('main > section');

function navbarLinks () {
	let scrollTop = document.documentElement.scrollTop;
	
	sections.forEach((section, index) => {
		if (scrollTop >= section.offsetTop - section.offsetHeight / 4 && scrollTop < section.offsetTop + section.offsetHeight) {
			for (let link of links) {
				link.classList.remove('font-semibold');
			}
			links[index].classList.add('font-semibold');
		}
	});
}

window.addEventListener('scroll', navbarLinks);

function toggleMenu () {
	document.querySelector('nav').classList.toggle('sm:inset-x-full');
	document.querySelector('nav').classList.toggle('sm:inset-x-0');
	document.querySelector('nav > i').classList.toggle('sm:scale-100');
}

document.getElementById('menu-open').addEventListener('click', toggleMenu);
document.getElementById('menu-close').addEventListener('click', toggleMenu);
for (let link of links) {
	link.addEventListener('click', toggleMenu);
}
