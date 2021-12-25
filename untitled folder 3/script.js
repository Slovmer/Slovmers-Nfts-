// DEPENDENCES
//      jQuery

console.log(nftList)

$(()=>{
    for (var i = 0; i < nftList.length; i++) {
        $('#nft-view').append(`<a href="" class="nft-wrap" id=""><img class="nft" id="" src="./nft/${nftList[i]}"></a>`)
    }
});