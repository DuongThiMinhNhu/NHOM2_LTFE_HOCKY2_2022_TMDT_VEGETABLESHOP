const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
// const data = require('/src/assets/data/category.json');

class ProductsCrawl {
    async crawlProducts(url) {
        const data = fs.readFileSync('./src/assets/data/category.json', 'utf8');
        //console.log(data);
        let json = JSON.parse(data);
       // console.log(json);
        for(let i = 0;i<json['categories'].length;i++){
            console.log(json['categories'][i]);
        }
        //
        // const response = await axios.get(url);
        //
        // const html = response.data;
        //
        // const $ = cheerio.load(html);
        //
        // const links = $('#sub-main-menu .font-nav .nav-item').get();
        // let result = {"categories":[]};
        // let k = 0;
        // for (let link of links) {
        //     // const href = $(link).attr('href');
        //     // const countryPageUrl = new URL(href, url).toString();
        //    // console.log(cheerio.load(link).html().trim());
        //     let nav = cheerio.load(link);
        //     let id = ++k;
        //     let name = nav(".nav-item > .nav-item-link").text();
        //     let raw_url = nav('.nav-item > .nav-item-link').attr("href");
        //     let child_categories = [];
        //
        //     let linkChilds = nav('.hover-div .hover-link');
        //     let kChild = 0;
        //     for(let linkChild of linkChilds){
        //         child_categories.push(
        //             {
        //                 "id":(++kChild)+k*10,
        //                 "name":nav(linkChild).text(),
        //                 "description":"",
        //                 "active":true,
        //                 "raw_url":nav(linkChild).filter("a").attr("href"),
        //             }
        //         )
        //     }
        //     result["categories"].push({
        //         "id":id,
        //         "name":name,
        //         "description":"",
        //         "active":true,
        //         "raw_url":raw_url,
        //         "categories_child": child_categories,
        //     });
        //     // fs.writeFile('D://Test/vegetableCategory.html', cheerio.load(link).html().trim(), err => {
        //     //         if (err) {
        //     //             console.error(err);
        //     //         }
        //     //     }
        //     // )
        // }
        // return JSON.stringify(result);
    }


}
async function main() {
    const scraper = new ProductsCrawl();
   await scraper.crawlProducts("https://www.harrisfarm.com.au/collections/vegies");

}

main();
