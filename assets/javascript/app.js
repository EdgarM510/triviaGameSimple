let jq = function() {
    // Handler for .ready() called.
    let mindYourQs  = ["Q1. What color is the sea?", "Q2. What is love?", "Q3. What is going on?", "Q4. At what time is it brightest?", "Q5. What has two legs?", "Q6. Why did the chicken cross the road?", "Q7. WTF Edgar? Why would you type like this?", "Q8. What is the biggest?", "Q9. two plus one equals", "Q10. Who's that behind you?"];
    let watchYourAs = ["a1", "a2", "a3", "a4", "a4", "a3", "a2", "a1", "a1", "a2"];
    let whatAC      = 0;
    
    $(".submit").on("click", datAs);

    function datAs() {
        whatAC = 0;
        for (let i=0; i<mindYourQs.length; i++){
            let selector = ".tehForm input[name=q" + (i+1) + "]:checked"
            console.log("Slecting:", $(selector).val()); 
            let whatQ = $(selector).val();
            console.log('whatq', whatQ);
            if (watchYourAs[i] == whatQ){
                whatAC++;
            }
        }
        console.log("whatAC", whatAC)
    }    
}

$(jq);