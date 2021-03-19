var roll20maps = document.getElementsByClassName("chooseablepage")

for (const map in roll20maps) {
  console.log(map.dataset.pageId);
  console.log(map.innerText)
}


//todo
//build object with title and map id
//send to db
//how will discord bot communicate with chrome extension
//how will we save data (link for yt vids and maps)
//add listener for new maps (so user does not need to refresh to upload new maps)
//

