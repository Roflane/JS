let currentPage = 1;
let totalPages = 1;
let secret = '';

function createPopupWindow(item) {
    if (document.querySelector(".window-overlay")) return;

    const overlay = document.createElement("div");
    overlay.classList.add("window-overlay");

    const windowEl = document.createElement("div");
    windowEl.classList.add("window");

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("window-close");
    closeBtn.textContent = "×";
    closeBtn.onclick = () => overlay.remove();

    const image = document.createElement("img");
    image.src = item.Poster && item.Poster !== "N/A" ? item.Poster : "";
    image.classList.add("window-book-image");

    const info = document.createElement("div");
    info.classList.add("window-info");

    const title = document.createElement("h2");
    title.textContent = item.Title || 'No title';
    title.classList.add("window-book-title");

    const type = document.createElement("p");
    type.textContent = `Type: ${item.Type || 'N/A'}`;
    type.classList.add("window-book-type");

    const year = document.createElement("p");
    year.textContent = `Year: ${item.Year || 'N/A'}`;
    year.classList.add("window-book-year");

    info.append(title, type, year);
    windowEl.append(closeBtn, image, info);
    overlay.appendChild(windowEl);

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
    });

    document.body.appendChild(overlay);
}

function makeBook(data) {
    if (!data || !data.Search) return;
    const wrapper = document.querySelector('.books-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = '';

    data.Search.forEach((item) => {
        const book_container = document.createElement("div");
        book_container.classList.add("books-container");

        const image = document.createElement("img");
        image.src = item.Poster && item.Poster !== "N/A" ? item.Poster : "";
        image.classList.add("book-image");

        const type = document.createElement("a");
        type.textContent = item.Type || '';
        type.classList.add("book-type");

        const title = document.createElement("a");
        title.textContent = item.Title || '';
        title.classList.add("book-title");

        const year = document.createElement("a");
        year.textContent = item.Year || '';
        year.classList.add("book-year");

        const details = document.createElement("button");
        details.textContent = "Details";
        details.classList.add("button-details");
        details.onclick = () => createPopupWindow(item);

        book_container.append(image, title, type, year, details);
        wrapper.appendChild(book_container);
    });
}

function getInfo(page = 1) {
    const titleInput = document.querySelector('#title-data');
    if (!titleInput) return null;
    return `https://www.omdbapi.com/?s=${titleInput.value}&page=${page}&apikey=${secret}`;
}

function updatePaginationButtons() {
    const prevBtn = document.querySelector("#prev-page");
    const nextBtn = document.querySelector("#next-page");
    const pageLabel = document.querySelector("#page-label");

    if (prevBtn) prevBtn.disabled = currentPage <= 1;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages;
    if (pageLabel) pageLabel.textContent = `Page ${currentPage} of ${totalPages}`;
}

async function fetchData(page = 1) {
    const info = getInfo(page);
    if (!info) {
        alert("Please enter a title to search.");
        return;
    }

    try {
        const res = await fetch(info);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const jsonData = await res.json();

        if (!jsonData || jsonData.Response === "False") {
            alert(jsonData && jsonData.Error ? jsonData.Error : "No results");
            return;
        }

        const totalResults = Number(jsonData.totalResults) || 0;
        totalPages = totalResults > 0 ? Math.ceil(totalResults / 10) : 1;
        currentPage = page;

        makeBook(jsonData);
        updatePaginationButtons();
    } catch (err) {
        console.error("fetchData error:", err);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('#search-button');
    const prevBtn = document.querySelector("#prev-page");
    const nextBtn = document.querySelector("#next-page");

    if (!searchButton) {
        console.warn("search-button not found in DOM");
        return;
    }

    searchButton.addEventListener("click", async () => {
        currentPage = 1;
        await fetchData(currentPage);
    });

    if (prevBtn) {
        prevBtn.addEventListener("click", async () => {
            if (currentPage > 1) {
                currentPage--;
                await fetchData(currentPage);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", async () => {
            if (currentPage < totalPages) {
                currentPage++;
                await fetchData(currentPage);
            }
        });
    }

    updatePaginationButtons();
});
