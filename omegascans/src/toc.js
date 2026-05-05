load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let list = [];
        doc.select("a[href*='/chapter-']").forEach(e => {
            let chapUrl = e.attr("href");
            let name = e.text().trim();
            if (!name) name = chapUrl;
            if (chapUrl && name) {
                list.push({
                    name: name,
                    url: chapUrl,
                    host: BASE_URL
                });
            }
        });
        list.reverse();
        return Response.success(list);
    }
    return null;
}
