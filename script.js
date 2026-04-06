        const mathFacts = [
            "The first computer 'bug' was a real moth found in a relay.",
            "Binary (0 and 1) was invented by Gottfried Leibniz in 1679.",
            "A 'Nibble' is exactly 4 bits, or half a Byte.",
            "The first 1GB hard drive (1980) weighed 500 pounds.",
            "Domain names were free until 1995.",
            "Python is named after 'Monty Python', not the snake.",
            "The sum of 1 to 100 is exactly 5,050.",
            "A 'Googol' is 10^100; Google was originally named after it.",
            "There are 10 types of people: those who know binary, and those who don't.",
            "The QWERTY keyboard was designed to slow down typing.",
            "Every odd number contains the letter 'e'.",
            "A 'jiffy' is a real unit of time (1/100th of a second).",
            "The first website (1991) is still online today.",
            "The number 0 was first used in India by Brahmagupta.",
            "The '@' symbol was chosen for email in 1971.",
            "The first computer mouse was made of wood in 1964.",
            "The sum of all numbers on a Roulette wheel is 666.",
            "12,345,678,987,654,321 is the square of 111,111,111.",
            "A 'googolplex' is 10 to the power of a googol.",
            "CAPTCHA stands for: Completely Automated Public Turing test.",
            "The first domain name ever registered was Symbolics.com.",
            "The Fibonacci sequence appears in pinecones and sunflowers.",
            "Typewriter was the longest word you could type on one row.",
            "The first webcam was used to monitor a coffee pot.",
            "A 'Perfect Number' equals the sum of its divisors (like 6).",
            "Linux powers 100% of the world's top 500 supercomputers.",
            "The equal sign (=) was invented in 1557 by Robert Recorde.",
            "The first website (1991) is still live at info.cern.ch."
        ];

        let lastIndex = -1;

        function getRandomFact() {
            const textElement = document.getElementById('math-fact-text');
            textElement.style.opacity = 0;
            
            setTimeout(() => {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * mathFacts.length);
                } while (randomIndex === lastIndex);
                
                lastIndex = randomIndex;
                textElement.innerText = mathFacts[randomIndex];
                textElement.style.opacity = 1;
            }, 250);
        }

        function toggleTheme() {
            const body = document.documentElement;
            const btn = document.querySelector('.theme-switch');
            const currentTheme = body.getAttribute('data-theme');
            
            if (currentTheme === 'light') {
                body.removeAttribute('data-theme');
                btn.innerText = "SYSTEM_MODE: DARK";
            } else {
                body.setAttribute('data-theme', 'light');
                btn.innerText = "SYSTEM_MODE: LIGHT";
            }
        }

        window.onload = getRandomFact;
// Hidden greeting for developers
console.log(
    "%c Systems Online. Welcome, Developer. ", 
    "color: #00d2ff; background: #05050a; font-weight: bold; font-size: 14px; border: 1px solid #00d2ff; padding: 4px;"
);

console.log("Status: Unauthorized access detected... just kidding. Enjoy the site!");
