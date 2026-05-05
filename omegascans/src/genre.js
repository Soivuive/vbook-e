load('config.js');
function execute() {
    return Response.success([
        { title: "Comics", input: BASE_URL + "/comics", script: "gen.js" },
        { title: "Novels", input: BASE_URL + "/novels", script: "gen.js" }
    ]);
}
