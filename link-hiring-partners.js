
InboxSDK.load('1', 'sdk_hr-hiring-link_6e178ad679').then(function(sdk){	
	// the SDK has been loaded, now do something with it!		
	sdk.Conversations.registerMessageViewHandlerAll(function(messageView){		
		var threadView = messageView.getThreadView();		
		var content = messageView.getBodyElement();
		var cleanContent = content.getElementsByTagName('div');
		var rawWords = jQuery(cleanContent).text();
		var myTestString = "3TEN8,8tracks,aboutLife,AccelOps,Acupera,Adara Media,AdsNative,Advisor Software,Amazon,AnalyticsMD,Apigee,Apollo Lightspeed (SkilledUp),Appbackr,Apple,Art.com,Asana,Autodesk,Avi Networks,AxiomZen,Bigcommerce,Bina Technologies,BinWise,Blackbird Technologies,BlackLocus,Blast Analytics,Blend Labs,BloomSky,Blue Shell,BlueTalon,Blurb,Bolt Threads,bop.fm,Brandcast,Breeze,BuildingConnected,Caarbon,Captricity,Cask.io,Change.org,CheckMate,Choice Hotels,Clara Labs,ClassDojo,Clearmob,Clever,Cloud Physics,Clutch Analytics,Coinbase,CollectivePoint,CoverHound,Creative Channel Services,Creativebug,Crunchyroll,Dailymotion,Digital Insight,DocuSign,EAT Club,Edthena,Educents,Enfos,Entertainment Partners,eShares inc.,Exabeam,ExtendTV,Famous Industries,FEM Inc.,FiveStars,Fixstream,FoundersCard,Front Gate Tickets,Funding Circle,Fundly,FunnelEnvy,GearLaunch,General Things,GeneStamp,GlassLab Games,Gliffy,GoGoGab,Green Dot,GSPANN,Hearsay Social,HelloSign,Hero Digital,Hightail,Hint Health,Hiplead,Homejoy,Human Diagnosis Project,Indiegogo,InkaBinka,Inkling,Intro (formally Workalytics),Intuit,Jolata,JPMorgan Chase,JVST,KISSmetrics,Klout/Lithium Technologies,Komprise,Kumu,Learning Ray,Left Field Labs,LEVEL Studios,Life Assistant Technologies Inc.,LIVESTRONG,Local Libations,Lonely Planet,Loudr.FM,Loup,Lumiata,LuxeValet,Macys.com,Maestro.io,Maker,Man Crates,Manhattan Prep (Kaplan),Mavenlink,McKinsey & Company,MerchantAtlas,MetroDigi,Microsoft,Mimosa Networks,Mindbits,Minerva Project,Minted,Mixpanel,mNectar,Model N,MuleSoft,MyVest,Netpulse,Neustar,Newsbound,NextdoorPros,Nisum Technologies,NodePrime,Nyansa,One North,Onor,OpenTable,Oseberg,Pantry Labs,Pariveda Solutions,Pathbrite,Pearlshare,Pivotal Labs,Pixc,Pixlee,Place (Formerly The Backplane),Poll Everywhere,Popsugar,Pure Energies,Qubit,Rdio,RealtyShares,Rebilly, Recurly,Redbird Advanced Learning,Relevvant,Remedy,Reputation.com,Restless Bandit,RethinkDB,Revinate,ROI DNA,Roostify,Sapho,Sauce Labs,Scripted,ScriptRock,Segment.io,SFG Media Group,SHIFT,ShipHawk,Shipwire,Siberia.io,Sipree,Slice Technologies,SoFi,SolarCity,Soldsie,Sparked.com,Springbox,Steelbrick,StitchFix,StoryBox (formally VideoGenie),Stroll Health,Swisscom Cloud Lab,Syapse,SYNQY,Sysdig Cloud (formerly Draios),Tachyus,Tapp.TV,Teespring,The RealReal,Touch of Modern,Traction Labs,Tripping,Trove,Upstart,UserTesting,uStudio,Velope,VentureBeat,Versal,Vertical Mass,VerticalResponse,Vida Health,Vitagene,Vulcun (EmailCherry),Wagon,Walker & Co Brands,Wealthfront,Weather Underground,WibiData,Yammer,Yerdle,YesTattoo,Yiftee,Yuzu,Zendesk,Zenefits,Ziploop,"						
		var partnersArray = myTestString.split(',');		
		var partners = [];
		
		// Papa.parse(file, {
		// 	complete: function(results) {
		// 		console.log("Finished:", results.data);
		// 	}
		// });	

		var partnerList = myTestString.split(/\s*,\s*/),
		    wordsFromEmail = rawWords.split(/\s+/g),
		    i,
		    j;		    
		
		var partnerTmp = partnerList.join(',').toLowerCase();
		var emailTmp = wordsFromEmail.join(',').toLowerCase();
		var partnerArray = partnerTmp.split(',');
		var emailArray = emailTmp.split(',');
		
		console.log( partnerArray.diff(emailArray) );
		console.log('---------');  

		// for (i = 0; i < partnerList.length; i++) {
		// 	for (j = 0; j < wordsFromEmail.length; j++) {
		// 	    if (partnerList[i].toLowerCase() == wordsFromEmail[j].toLowerCase()) {
		// 	       console.log('word: '+partnerList[i]+' was found in both strings');
		// 	       partners.push(partnerList[i] + ' ')			       	
		// 	    }
		// 	}
		// }
		var newNew = partnerArray.diff(emailArray)		
		var cleanedArr = cleanUpArray(newNew)
		addHiringPartnerSidebar(threadView, cleanedArr);
	});

});

// array1.filter(function(n) {
//     return array2.indexOf(n) != -1
// });

Array.prototype.diff = function(arr2) {
    var ret = [];
    this.sort();
    arr2.sort();
    for(var i = 0; i < this.length; i += 1) {
        if(arr2.indexOf( this[i] ) > -1){
            ret.push( this[i] );
        }
    }
    return ret;
};

Array.prototype.unique = function () {
    var arr = this.sort(), i; // input must be sorted for this to work
    for( i=arr.length; i--; )
      arr[i] === arr[i-1] && arr.splice(i,1); // remove duplicate item

    return arr;
}

function cleanUpArray(partnersList){
	var cleanArr = partnersList.join(" ");	
	return cleanArr;
}

function addHiringPartnerSidebar(threadView, hiringPartner){	
	var el = document.createElement('div');
		el.innerHTML = hiringPartner;

		threadView.addSidebarContentPanel({
			title: 'Hiring Partners',
			el: el
		});
}

function removeDuplicates(value, index, self) {   
    return self.indexOf(value) === index;
}