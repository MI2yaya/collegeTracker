
const allCollegesList = document.querySelector("#allColleges ul");
const paginationContainer = document.createElement("div");
let currentPage = 1;

function fetchColleges(page = 1) {
    fetch(`/api/get_colleges?page=${page}`)
        .then(res => res.json())
        .then(data => {
            renderColleges(data.colleges);
            renderPagination(data.total_pages, data.current_page);
        });
}

function renderColleges(colleges) {
    allCollegesList.innerHTML = ""; // clear list
    colleges.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        allCollegesList.appendChild(li);
    });
}

function renderPagination(totalPages, currentPage) {
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = i === currentPage ? "active" : "";
        btn.onclick = () => fetchColleges(i);
        paginationContainer.appendChild(btn);
    }

    if (!paginationContainer.parentNode)
        document.querySelector("#allColleges").appendChild(paginationContainer);
}

document.addEventListener("DOMContentLoaded", () => {
    fetchColleges(currentPage);
});
