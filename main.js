const searchInput = document.getElementById('search-input');
		const devlogList = document.getElementById('devlog-list');

		searchInput.addEventListener('input', () => {
			const searchTerm = searchInput.value.toLowerCase();

			const filteredItems = Array.from(devlogList.children).filter(item => {
				const titleElement = item.querySelector('h2');
				const dateElement = item.querySelector('.text-zinc-500');

				if (!titleElement || !dateElement) {
					return false; // Ignore items without title or date elements
				}

				const titleText = titleElement.textContent.toLowerCase();
				const dateText = dateElement.textContent.toLowerCase();

				return titleText.includes(searchTerm) || dateText.includes(searchTerm);
			});

			Array.from(devlogList.children).forEach(item => {
				if (!filteredItems.includes(item)) {
					item.style.display = 'none';
				} else {
					item.style.display = 'block';
				}
			});
		});


const darkModeToggle = document.getElementById('dark-mode-toggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

darkModeToggle.addEventListener('click', toggleDarkMode);