function escala_grises(filtro) {

    switch (filtro.value) {

        case "color":

            document.body.style.filter = "none";

            break;

        case "gray":

            document.body.style.filter = "grayscale(100%)";

            break;

        case "prota":

            document.body.style.filter = "hue-rotate(118deg)";

            break;

        case "deut":

            document.body.style.filter = "hue-rotate(100deg)";

            break;

        case "trita":

            document.body.style.filter = "hue-rotate(18deg)";

            break;

        default:

            document.body.style.filter = "none";

            break;
    }

}