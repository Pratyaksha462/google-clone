const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1GCEA_enIN1037IN1037&oq=" + input + "&aqs=chrome..69i57j69i59j69i65j69i60l3.628505131j0j15&sourceid=chrome&ie=UTF-8"
}