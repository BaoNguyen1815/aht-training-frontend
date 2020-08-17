function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    console.log("open");
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    console.log("open");
}

function openSearch() {
    let height = $("#search-responsive").innerHeight();
    console.log(height);
    if (height === 0) {
        $("#search-responsive").css({
            height: "auto",
            padding: ".5rem .5rem .5rem .5rem",
        });
    } else {
        $("#search-responsive").css({
            height: "0",
            padding: "0rem 0rem 0rem 0rem",
        });
    }
}
