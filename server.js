const axios = require('axios');
const jsdom = require('jsdom');

const main = async () => {
    const data = await (await axios.default.get('https://jollyplastic.ph/product-category/living-room/table/')).data;

    // console.log(data);
    const doc = new jsdom.JSDOM(data);
    // console.log(doc);
    const products = doc.window.document.querySelectorAll(".product_thumbnail");
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].innerHTML);
    }
    // console.log(doc.firstChild.firstChild.innerHTML);
}

main();