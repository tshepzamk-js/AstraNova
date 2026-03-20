window.onload = () => {
    const textElement = document.getElementById('welcome-text');

    // NEW LOGIC: A "relay" sequence for each phrase
    function runPhraseSequence(newText, startTime) {
        
        // Phase 1: Preparation (Fade old text out, reset position off-screen)
        // We do this instantly, but it is necessary so the text doesn't "flicker"
        setTimeout(() => {
            textElement.className = ''; // Remove ALL animation classes
            textElement.style.opacity = '0'; // Ensure it's hidden
            textElement.style.transform = 'translateY(40px)'; // Reset to bottom
        }, startTime);

        // Phase 2: Show "Pop In"
        // (40px -> 0px)
        setTimeout(() => {
            textElement.innerText = newText;
            textElement.classList.add('animate-pop-in');
        }, startTime + 500); // Wait 0.5s after resetting

        // Phase 3: Show "Slide Out"
        // (0px -> -60px)
        setTimeout(() => {
            // CRITICAL: We remove the 'In' class before adding the 'Out' class
            // This is like a baton pass.
            textElement.classList.remove('animate-pop-in');
            textElement.classList.add('animate-slide-out');
        }, startTime + 3000); // Happens at 3s mark (gives phrase time to be read)
    }

    // --- Start the Relay ---
    
    // Relay 1: "Welcome"
    // Settle time: 0.5s - 3s
    runPhraseSequence("Welcome", 0);

    // Relay 2: "Reach for the stars"
    // This relay STARTS at 4s mark (gives Relays 1 time to complete)
    // Settle time: 4.5s - 7s
    runPhraseSequence("Reach for the stars", 4000);

    // Phase 4: Final Reveal (Fade out the whole mat)
    // We do this at 8 seconds, once everything is complete.
    setTimeout(() => {
        textElement.className = ''; // Quick reset
        // We fade out the entire Welcome Mat (this part hasn't changed!)
        document.getElementById('welcome-mat').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('welcome-mat').style.display = 'none';
        }, 1000);
    }, 8000); 
};
