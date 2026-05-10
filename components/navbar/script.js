fetch("/components/navbar/index.html")
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const contentElement = doc.querySelector(".navbar");
        if (contentElement) {
            document.querySelectorAll(".navbar").forEach(element => {
                element.innerHTML = contentElement.innerHTML;
            });
        }
    });