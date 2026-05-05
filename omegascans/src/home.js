load('config.js');
function execute() {
    return Response.success([
        { title: "Latest Comics", input: BASE_URL + "/comics", script: "gen.js" },
        { title: "Latest Novels", input: BASE_URL + "/novels", script: "gen.js" }
    ]);
}
