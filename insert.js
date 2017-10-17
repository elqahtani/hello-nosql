var insert = function(db) {
  // Get the documents collection
  db
  .collection("users")
  // Insert some documents
  .insertMany(
    [{username: "Huda"}, {username: "Ahmed"}, {username : "Elqahtani"}],
    function(err, result) {
    console.log("Inserted 3 documents into the document collection");
  })
}

module.exports = insert