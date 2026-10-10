// Function to add -ai parameter to Google search URLs
function addAiParameter() {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);

    // Check if we're on a Google search page
    if (url.hostname.includes('google.com') && url.pathname.includes('/search')) {
        const searchParams = url.searchParams;
        const query = searchParams.get('q');

		if (query && !query.toLowerCase().includes('giveai')) {
        // Only modify if there's a search query and it doesn't already contain udm=14
			if (currentUrl && !currentUrl.includes('udm=') && !currentUrl.includes('dpr=')) {
				// Add -ai to the search query
				// const newQuery = query;
				// searchParams.set('q', newQuery);

				// Update the URL without reloading the page
				const newUrl = url.toString() + '&udm=14';
				window.history.replaceState({}, '', newUrl);

				// Reload the page to get results without AI overviews
				window.location.reload();
			}
		} else {
			const newQuery = query.replace("giveai", "").replaceAll("\\s+", " ").trim();
			searchParams.set('q', newQuery);

			// Update the URL without reloading the page
			const newUrl = url.toString() + '&dpr=1';
			window.history.replaceState({}, '', newUrl);

			// Reload the page to get results without AI overviews
			window.location.reload();
		}
    }
}

// Run the function when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addAiParameter);
} else {
    addAiParameter();
}

// Also run when navigating (for SPA behavior)
let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        addAiParameter();
    }
}).observe(document, { subtree: true, childList: true });