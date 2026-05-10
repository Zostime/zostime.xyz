fetch("/components/footer/index.html")
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const contentElement = doc.querySelector(".footer");
        if (contentElement) {
            document.querySelectorAll(".footer").forEach(element => {
                element.innerHTML = contentElement.innerHTML;
            });
        }
    });