import KittyContract from "./KittyContract.js";

let kittyContractInstance;
let provider;

$(document).ready(function() {
    initialize();
})

async function initialize () {
    console.log("initialized");
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
	// Prompt user for account connections
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();
    
	kittyContractInstance = new ethers.Contract(
        "0xF2E246BB76DF876Cef8b38ae84130F4F55De395b",
		KittyContract,
		signer
        );
}

function getEventData(
	eventName,
	contract,
	txResult
  ) {
	for (let log of txResult.logs) {
	  try {
		const decoded = contract.interface.parseLog(log);
		if (decoded.name === eventName)
		  return {
			...decoded,
			...decoded.args
		  };
	  } catch (error) {}
	}
	return null;
  };

async function createKitty() {
	var dnaString = getDna();
	console.log(dnaString);
	try {
		const tx = await kittyContractInstance.createKittyGen0(dnaString);
		const receipt = await tx.wait(1);
    	const event = getEventData("Birth", kittyContractInstance, receipt);
		console.log("My Data: ", event.args);
			$("#kittyCreation").css("display", "block");
			$("#kittyCreation").text("owner: " + event.args.owner
									+ "\nkittyId: " + event.args.tokenId
									+ "\nmomId: " + event.args.momId
									+ "\ndadId: " + event.args.dadId
									+ "\ngenes: " + event.args.genes)
	} catch (error) {
		console.log("Error");
	}
}

window.createKitty = createKitty;
