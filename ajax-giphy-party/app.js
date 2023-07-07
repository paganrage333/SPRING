const $gifArea = $('#gif-area');
const $searchInput = $('#search')

function addGIF(res){
    let numResults = res.data.length;
    if (numResults) {
        let randomIDX = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>")
        let $newGIF = $("<img>", {src: res.data[randomIDX].images.original.url});
        $newCol.append($newGIF);
        $gifArea.append($newCol)
    }
}

$("form").on("submit", async function(evt){
    evt.preventDefault();
    let searchTerm = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchTerm,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
      });
      addGIF(response.data);
});

$("#remove").on("click", function(){
    $gifArea.empty()
})