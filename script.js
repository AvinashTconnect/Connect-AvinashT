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
