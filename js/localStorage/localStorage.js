export function getItemProduct() {
    const item = localStorage.getItem("adToCart");

    if (item === null) {
        return [ ];
    } else {
        return JSON.parse(item);
    }
}

export function saveProduct(item) {
    localStorage.setItem("adToCart", JSON.stringify(item))
}