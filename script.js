$(".start").click(function(){
    alert("Instructions : Click on 'Give me a clue!' button until you've gathered 3 clues, and write down the exact words down down from left to right.");
	$(".start").hide();
    $(".explanation").hide();
    $(".body").css("visibility","visible");
});
$(".reload").click(function(){
            location.reload(true);
        });
$(".button").click(function(){
    let randomnumber = Math.floor((Math.random() * 6) + 1);
    	if (randomnumber === 1) {
    		$(".spiritbox").css("visibility","visible");
            
    } else if(randomnumber === 2) {
    		$(".ghostwriting").css("visibility","visible");
        
    } else if(randomnumber === 3) {
    		$(".ghostorb").css("visibility","visible");
        
    } else if(randomnumber === 4) {
    		$(".fingerprints").css("visibility","visible");
        
    } else if(randomnumber === 5) {
    		$(".emf").css("visibility","visible");
        
    } else if(randomnumber === 6) {
    		$(".therm").css("visibility","visible");
        
    }
    console.log(randomnumber);
});
$(".submit").click(function(){
    let answer1 = $(".answer1").val();
    let answer2 = $(".answer2").val();
    let answer3 = $(".answer3").val();
    
    if((answer1==="ghostwriting") && (answer2==="ghostorb") &&	(answer3==="emf5")) {
    	$("h1").text("Your ghost is a shade! They are known to be shy and will look for you when you're alone!");
        
    } else if((answer1==="ghostorb") && (answer2==="emf5") &&(answer3==="freezingtemp")) {
    	$("h1").text("Your ghost is a phantom! They are the slowest of the ghosts, but don't underestimate them because they will make you go insane!");
        
    } else if((answer1==="spiritbox") && (answer2==="ghostorb") &&(answer3==="emf5")) {
    	$("h1").text("Your ghost is a jinn! They are known to be very territorial, careful in that room!");
        
    } else if((answer1==="ghostwriting") && (answer2==="ghostorb") &&(answer3==="freezingtemp")) {
    	$("h1").text("Your ghost is a yurei! They are known to have the greatest affect on your sanity, have one of your friends watch out for your sanity!");
        
    } else if((answer1==="spiritbox") && (answer2==="ghostorb") &&(answer3==="freezingtemp")) {
    	$("h1").text("Your ghost is a mare! Watch out when the lights go off, because a mare might be behind you!");
        
    } else if((answer1==="spiritbox") && (answer2==="ghostwriting") &&(answer3==="freezingtemp")) {
    	$("h1").text("Your ghost is a demon! Just don't, just don't even go into the house, they are known to be the most violent!");
        
    } else if((answer1==="fingerprints") && (answer2==="emf5") &&(answer3==="freezingtemp")) {
    	$("h1").text("Your ghost is a banshee! Make sure to hold onto that crucifix! the banshee won't like it");
        
    } else if((answer1==="ghostwriting") && (answer2==="fingerprints") &&(answer3==="emf5")) {
    	$("h1").text("Your ghost is a revenant! They are known to be great hunters, make sure to stick together!");
        
    } else if((answer1==="spiritbox") && (answer2==="ghostwriting") &&(answer3==="emf5")) {
    	$("h1").text("Your ghost is a oni! They move the fastest when nearby players, wait whats that behind you!?");
        
    } else if((answer1==="spiritbox") && (answer2==="ghostorb") &&(answer3==="fingerprints")) {
    	$("h1").text("Your ghost is a poltergeist! They are known to move around objects in the room, careful for that flying vase!");
    
    } else if((answer1==="spiritbox") && (answer2==="ghostwriting") &&(answer3==="fingerprints")) {
    	$("h1").text("Your ghost is a spirit! They are the most common type of ghost, and usually appear due to an unexplained death!");
                
    } else if((answer1==="spiritbox") && (answer2==="fingerprints") &&(answer3==="freezingtemp")) {
    	$("h1").text("Your ghost is a wraith! Wooh! it just came through the wall!!!");
        
    } else {
    	$("h1").text("Sorry, the clues don't add up to a ghost, it outplayed you!");
        $(".gif").css("visibility","visible");
    }
                                                
});
