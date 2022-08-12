import fs from "fs";
import fetch from "node-fetch";
import cheerio from "cheerio";

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
             let content = obj["content"]["__text"];
            const $ = cheerio.load(content);
            let description = $("p:first-child").text();
            result["posts"].push({
                "id":++k,
                "title": obj["title"]["__text"],
                "description":description,
                "image":obj["image"],
                "author":obj["author"]["name"],
                "date":obj["published"],
                "content":content,
            });
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