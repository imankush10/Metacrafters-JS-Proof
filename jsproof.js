/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, worth, platform) {
    const NFT = {
        name,
        description,
        worth,
        platform
    }
    NFTs.push(NFT);
    console.log(`${NFT.name} is minted`);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log(
           `Name: ${NFTs[i].name}\nDescription: ${NFTs[i].description}\nWorth: ${NFTs[i].worth}$\nPlatform: ${NFTs[i].platform}\n`
        );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total number of NFTs minted: ${NFTs.length}`);
}

// call your functions below this line
mintNFT('Proof of learning 1', 'This NFT represt the proof of learning of module 1 of JavaScript from metacrafters', 3333, 'Solanart');
mintNFT('Proof of learning 2', 'This NFT represt the proof of learning of module 2 of JavaScript from metacrafters', 4444, 'OpeanSea');
mintNFT('Proof of learning 3', 'This NFT represt the proof of learning of module 3 of JavaScript from metacrafters', 5555, 'Rarible');

listNFTs();

getTotalSupply();
