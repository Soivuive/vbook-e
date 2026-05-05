load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let images = [];
        doc.select("img[src*='media.omegascans.org/file']").forEach(e => {
            let src = e.attr("src");
            if (src && src.indexOf("/uploads/series/") > 0) {
                images.push(src);
            }
        });
        return Response.success(images);
    }
    return null;
}
