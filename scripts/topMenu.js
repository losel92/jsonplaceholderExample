var menuPoints = (Array.from(document.querySelectorAll("#menu > li")));
console.log(menuPoints);
menuPoints.forEach(function (elem) {
    console.log(elem);
    elem.addEventListener("click", function (_a) {
        var target = _a.target;
        console.log(target);
        menuPoints.forEach(function (point) {
            point.classList.remove("selected");
        });
        var targetElem = target;
        targetElem.classList.add("selected");
    });
});
