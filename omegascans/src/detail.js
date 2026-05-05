load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let name = doc.select("h1").first().text().trim();
        let cover = doc.select("img[src*='media.omegascans']").first().attr("src");
        let description = doc.select("p").first().text().trim();
        let author = "";
        doc.select("div, span, p").forEach(e => {
            if (e.text().contains("Author")) {
                author = e.text().replace("Author", "").replace(":", "").trim();
            }
        });
        let ongoing = doc.html().indexOf("Ongoing") > 0;
        let suggests = [];
        suggests.push({
            title: "More Comics",
            input: BASE_URL + "/comics",
            script: "gen.js"
        });
        return Response.success({
            name: name,
            cover: cover,
            host: BASE_URL,
            author: author,
            description: description,
            detail: "",
            ongoing: ongoing,
            genres: [],
            suggests: suggests
        });
    }
    return null;
}
