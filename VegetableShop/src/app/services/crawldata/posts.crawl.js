import fs from "fs";
import fetch from "node-fetch";

class PostsCrawl {
    async crawlPosts() {
        const data = fs.readFileSync('D:/Test/test/json.json', 'utf8');
        //console.log(data);
        let json = JSON.parse(data);
        // console.log(json);
        let result = {"posts": []}
        let k = 0;
        // product (id,name, price,image,description,id_type,number,active)
        for (let i = 0; i < json['feed']["entry"].length; i++) {
             let obj = json['feed']["entry"][i];
            result["posts"].push({
                "id":++k,
                "title": obj["title"]["__text"],
                "image":obj["image"],
                "author":obj["author"]["name"],
                "date":obj["published"],
                "content":obj["content"]["__text"],
            });
            // if (obj[''].length < 1) {
            //     let id_coll = obj["collection_ids"];
            //     let code_coll = obj["raw_url"].substring("/collections/".length);
            //     result['products'] = result['products'].concat(await this.getProducts(40, id_coll, code_coll,obj['id']));
            // } else {
            //     console.log(obj['categories_child'].length);
            //     for (let j = 0; j < obj['categories_child'].length; j++) {
            //         let objChild = obj['categories_child'][j];
            //         let id_coll = objChild["collection_ids"];
            //         let code_coll = objChild["raw_url"].substring("/collections/".length);
            //         result['products'] = result['products'].concat(await this.getProducts(40, id_coll, code_coll,obj['id']));
            //     }
            // }
        }
        return result;
    }
}
async function main() {
    const scraper = new PostsCrawl();
    // console.log(await scraper.crawlProducts())
    fs.writeFileSync("D://Test/posts.json",JSON.stringify(await scraper.crawlPosts()));
}


main();