import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';
import fetch from 'node-fetch';

class ProductsCrawl {
    async crawlProducts() {
        const data = fs.readFileSync('./src/assets/data/categories.json', 'utf8');
        //console.log(data);
        let json = JSON.parse(data);
        // console.log(json);
        let result = {"products": []}
        let k = 0;
        // product (id,name, price,image,description,id_type,number,active)
        for (let i = 0; i < json['categories'].length; i++) {
            let obj = json['categories'][i];
            if (obj['categories_child'].length < 1) {
                let id_coll = obj["collection_ids"];
                let code_coll = obj["raw_url"].substring("/collections/".length);
                result['products'] = result['products'].concat(await this.getProducts(40, id_coll, code_coll, obj['id']));
            } else {
                console.log(obj['categories_child'].length);
                for (let j = 0; j < obj['categories_child'].length; j++) {
                    let objChild = obj['categories_child'][j];
                    let id_coll = objChild["collection_ids"];
                    let code_coll = objChild["raw_url"].substring("/collections/".length);
                    result['products'] = result['products'].concat(await this.getProducts(40, id_coll, code_coll, obj['id']));
                }
            }
        }
        return result;
    }

    async getProducts(num, typeID, typeCode, type) {
        const response = await fetch('https://qlfo0ts0tc-3.algolianet.com/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser%20(lite)%3B%20instantsearch.js%20(4.0.0)%3B%20JS%20Helper%20(0.0.0-5a0352a)&x-algolia-application-id=QLFO0TS0TC&x-algolia-api-key=896c91981660e8ea665b60077a93f46c',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: `{
                   "requests":[{"indexName":"shopify_products_title_asc","params":"hitsPerPage=60&clickAnalytics=true&query=&highlightPreTag=%3Cspan%20class%3D%22ais-highlight%22%3E&highlightPostTag=%3C%2Fspan%3E&page=0&filters=collection_ids%3A%22${typeID}%22%20AND%20inventory_quantity%20%3E%200%20AND%20price%3E0%20AND%20options.store%3A73%20AND%20inventory_quantity%3E0&ruleContexts=%5B%22${typeCode}%22%5D&facets=%5B%5D&tagFilters="}]
                }`,
            });
        // product (id,name, price,image,description,id_type,number,active)

        return response.json().then(data => {
            let result = [];
            for (let i = 0; data["results"][0]["hits"].length > i; i++) {
                if (i > num) break;
                let obj = data["results"][0]["hits"][i];
                // console.log(obj);
                result.push({
                    "id": obj["id"],
                    "name": obj["title"],
                    "price": obj["price"],
                    "image": obj["image"],
                    "description": obj["body_html_safe"],
                    "id_type": typeID,
                    "id_collection": type,
                    "grams": obj["grams"],
                    "number": obj["inventory_quantity"],
                    "updated_at": obj["updated_at"],
                });
            }
            return result;
        });

    }
}

async function main() {
    const scraper = new ProductsCrawl();
    // console.log(await scraper.crawlProducts())
    fs.writeFileSync("D://Test/products.json", JSON.stringify(await scraper.crawlProducts()));
}


main();
