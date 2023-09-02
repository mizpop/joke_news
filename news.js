$("#menu_icon").click(function () { 
    $("#menu_item_list").toggleClass("open");
});

$(document).ready(function () {
    $("#top_title_mask").addClass("load");
});

$("#page *").on("inview", function () {
    $(this).addClass("view");
});

let title =  document.getElementById("top_title").textContent + " | NEWS";
document.title = title;