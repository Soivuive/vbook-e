load('config.js');
function execute(key, page) {
    let response = fetch(BASE_URL + "/search?query=" + encodeURIComponent(key));
    if (response.ok) {
        let doc = response.html();
        let results = [];
        doc.select("a[href*='/series/']").forEach(e => {
            let link = e.attr("href");
            if (!link.includes("/chapter")) {
                let cover = e.select("img").attr("src");
                let name = e.select("img").attr("alt");
                if (!name) name = e.text().trim();
                if (link && name) {
                    results.push({
                        name: name,
                        link: link,
                        host: BASE_URL,
                        cover: cover,
                        description: ""
                    });
                }
            }
        });
        return Response.success(results, null);
    }
    return null;
}
