function render(rows) {
    const columnWidths = {};

    // first, get header (keys) length and set as default
    // note keys in array of keys so the name is keys[idx]
    let keys = (rows[0] != undefined) ? Object.keys(rows[0]) : {};
    for (let i in keys) {
        columnWidths[keys[i]] = keys[i].length;
    }

    // Calculate column width based on max row size for each column
    rows.forEach(row => {
        for (let key in row) {
            let str = row[key].toString();
            columnWidths[key] = Math.max(columnWidths[key], str.length);
        }
    });

    // display the header
    let headerText = "|";
    for (let key in columnWidths) {
        headerText += " " + key + " ".repeat(columnWidths[key] - key.length) + " |";
    }
    console.log();
    console.log(headerText.toUpperCase());

    headerText = "|";
    for (let key in columnWidths) {
        headerText += " " + "-".repeat(key.length) + "-".repeat(columnWidths[key] - key.length) + " |";
    }
    console.log(headerText.toUpperCase());

    // Now, print the data
    rows.forEach(row => {
        let rowText = "|";
        for (let key in row) {
            let str = row[key].toString();
            rowText += " " + row[key] + " ".repeat(columnWidths[key] - str.length) + " |";
        }
        console.log(rowText);

    });
}

module.exports = {render};