load('config.js');
function execute(url, page) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let books = [];
        doc.select("a[href*='/series/']").forEach(e => {
            let link = e.attr("href");
            if (!link.includes("/chapter")) {
                let cover = e.select("img").attr("src");
                let name = e.select("img").attr("alt");
                if (!name) name = e.text().trim();
                if (link && name) {
                    books.push({
                        name: name,
                        link: link,
                        host: BASE_URL,
                        cover: cover
                    });
                }
            }
        });
        return Response.success(books, null);
    }
    return null;
}
