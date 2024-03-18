// strip the last <br><br> off the end of the works list
// doing this in its own function means it'll always be the end, instead of get messed
// up when doing the class order or omitted on Derby works where there is no class order.

export function stripEnd(workslist) {
    // clean up the unnecessary extra lines at the end
    const extraLines = /<br><br>$/
    let strippedworks = workslist.replace(extraLines, "");
    return strippedworks;
}