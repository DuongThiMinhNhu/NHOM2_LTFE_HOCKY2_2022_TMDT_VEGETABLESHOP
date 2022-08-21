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
            let description = $("p:first-child").first().text();
            // https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg
            let image = $("img").first().attr("src");
            let imageResult = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
            if (image == null || image === "") {
                image = imageResult;
            }
            let dateTemp = obj["published"].toString().substring(0, 10).split("-");

            console.log(dateTemp.toString() + " - " + dateTemp[2] + " - " + dateTemp[1] + " - " + dateTemp[0])
            let date = (dateTemp[2].length <= 1 ? "0" + dateTemp[2] : dateTemp[2])
                + "/" + (dateTemp[1].length <= 1 ? "0" + dateTemp[1] : dateTemp[1])
                + "/" + dateTemp[0];
            console.log(date);
            result["posts"].push({
                "id": ++k,
                "title": obj["title"]["__text"],
                "description": description,
                "image": image,
                "author": obj["author"]["name"],
                "date": date,
                "content": content,
            });
        }
        return result;
    }
}

async function main() {
    const scraper = new PostsCrawl();
    // console.log(await scraper.crawlProducts())
    fs.writeFileSync("D://Test/posts.json", JSON.stringify(await scraper.crawlPosts()));
}


main();