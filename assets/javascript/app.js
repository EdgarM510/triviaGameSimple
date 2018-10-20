let jq = function() {
    // Handler for .ready() called.
    let qs      = ["Q1. What color is the sea?", "Q2. What is love?", "Q3. What is going on?", "Q4. At what time is it brightest?", "Q5. What has two legs?", "Q6. Why did the chicken cross the road?", "Q7. WTF Edgar? Why would you type like this?", "Q8. What is the biggest?", "Q9. two plus one equals", "Q10. What is that behind you?"];
    let as      = ["blue", "a special feeling", "edgar is typing in leet", "high noon", "a person", "to get to the other side", "it is stupid", "the sun", "three", "nothing bad"];
    let correct = 0;
    let secs    = setInterval(myTimer, 1000);
    let remain  = 120;

function myTimer() {
  $(`.msgscrn`).html(`<h2>About ${remain} seconds left.</h2>`);
  remain--;
  if (remain == 0) {
    datAs();
    console.log('auto donezo')
  }
}

    $(".submit").on("click", datAs);

    function datAs(){
        correct = 0;
        for (let i=0; i<qs.length; i++){
            let selector    = `.tehForm input[name=q${i+1}]:checked`
            let clicked     = $(selector).val();
            if (as[i] == clicked){
                correct++;
                console.log(`${qs[i]} "${clicked}" clicked (correct)`);
            }
            else{
                console.log(`${qs[i]} "${clicked}" clicked (wrong)`);
            }
        }
        console.log("correct", correct);
        $(`.msgscrn`).html(`<h2>You got ${correct} questions correct, and ${10-correct} incorrect.</h2>`);
        clearInterval(secs);
        $('#tehDiv').css({"background-color": "#333333", "color": "#09ff00"});
    }    
}

$(jq);