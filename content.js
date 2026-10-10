// Function to add -ai parameter to Google search URLs
function addAiParameter() {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);

    // Check if we're on a Google search page
    if (url.hostname.includes('google.com') && url.pathname.includes('/search')) {
        const searchParams = url.searchParams;
        const query = searchParams.get('q');

		if (query && !query.toLowerCase().includes('giveai')) {
        // Only modify if there's a search query and it doesn't already contain a udm= or dpr= mode
			if (currentUrl && !currentUrl.includes('udm=') && !currentUrl.includes('dpr=')) {

				// Update the URL without reloading the page
				const newUrl = url.toString() + '&udm=14';
				window.history.replaceState({}, '', newUrl);

				// Reload the page to get results without AI overviews
				window.location.reload();
			}
		} else {
			// Strip the giveai keyword out of the actual query, since it's not actually part of the search, just a trigger
			const newQuery = query.replace("giveai", "").replaceAll("\\s+", " ").trim();
			searchParams.set('q', newQuery);

			// Update the URL without reloading the page (dpr=1 is default mode)
			const newUrl = url.toString() + '&dpr=1';
			window.history.replaceState({}, '', newUrl);

			// Reload the page for dpr=1 mode
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