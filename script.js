const scenarioText = document.getElementById('scenarioText');
const feedback = document.getElementById('feedback');
const goodButton = document.getElementById('goodButton');
const badButton = document.getElementById('badButton');
const nextButton = document.getElementById('nextButton');
const scoreDisplay = document.getElementById('score');
const badgeContainer = document.getElementById('badgeContainer');

let currentScenarioIndex = 0;
let score = 0;

// 10 Scenarios and answers
const scenarios = [
    {
        text: "तुमचा पासवर्ड मित्रासोबत शेअर करणे.",
        answer: "bad",
        explanation: "तुमचा पासवर्ड कधीही इतरांशी शेअर करू नका. हे तुमच्या खात्यासाठी धोकादायक असू शकते."
    },
    {
        text: "फोटो पोस्ट करण्यापूर्वी पालकांची परवानगी विचारणे.",
        answer: "good",
        explanation: "फोटो पोस्ट करण्यापूर्वी नेहमी तुमच्या पालकांची परवानगी घ्या. हे सुरक्षित राहण्यासाठी महत्त्वाचे आहे."
    },
    {
        text: "अनजान व्यक्तीचे फ्रेंड रिक्वेस्ट स्वीकारणे.",
        answer: "bad",
        explanation: "परिचित नसलेल्या व्यक्तीचे फ्रेंड रिक्वेस्ट स्वीकारणे सुरक्षित नाही. यामुळे तुमची गोपनीयता धोक्यात येऊ शकते."
    },
    {
        text: "फेसबुकवर तुमचे फोन नंबर शेअर करणे.",
        answer: "bad",
        explanation: "फेसबुकवर वैयक्तिक माहिती जसे की फोन नंबर शेअर करणे धोकादायक असू शकते."
    },
    {
        text: "तुमच्या पोस्टला कोण प्रतिसाद देऊ शकतो हे सेटिंगमध्ये नियंत्रित करणे.",
        answer: "good",
        explanation: "सेटिंगमध्ये तुमच्या पोस्टची गोपनीयता व्यवस्थापित करणे चांगले असते."
    },
    {
        text: "वाईट अनुभव आलेली गोष्ट ऑनलाइन शेअर करणे.",
        answer: "bad",
        explanation: "वाईट अनुभव शेअर केल्याने लोकांचा गैरवापर होऊ शकतो. योग्य व्यक्तींशी चर्चा करणे योग्य आहे."
    },
    {
        text: "सतत तुमच्या प्रोफाईलवरील पोस्ट अपडेट करणे.",
        answer: "bad",
        explanation: "सतत पोस्ट करणे तुमची गोपनीयता धोक्यात आणू शकते आणि ऑनलाइन थोडी सावधगिरी महत्त्वाची आहे."
    },
    {
        text: "तुमच्या सोशल मीडिया प्रोफाइलवरील मित्रांच्या सुरक्षिततेची काळजी घेणे.",
        answer: "good",
        explanation: "मित्रांची सुरक्षितता सांभाळणे आणि योग्य गोपनीयता सेटिंग्ज वापरणे चांगले आहे."
    },
    {
        text: "अनजान लोकांच्या ईमेल्सना उत्तर देणे.",
        answer: "bad",
        explanation: "अपरिचित ईमेल्सला उत्तर देणे हे धोका असू शकते. जसे फिशिंगचा धोका असतो."
    },
    {
        text: "तुमच्या मित्रांची सोशल मीडिया प्रोफाइलसाठी गोपनीयता सेटिंग्ज तपासणे.",
        answer: "good",
        explanation: "प्रोफाईल गोपनीयता सेटिंग्ज तपासणे सुरक्षित राहण्याचा एक चांगला मार्ग आहे."
    }
];

// Display initial scenario
displayScenario();

function displayScenario() {
    const scenario = scenarios[currentScenarioIndex];
    scenarioText.innerText = scenario.text;
    feedback.innerText = '';
    nextButton.style.display = 'none';
    goodButton.disabled = false;
    badButton.disabled = false;
}

// Handle answer selection
goodButton.addEventListener('click', () => handleAnswer('good'));
badButton.addEventListener('click', () => handleAnswer('bad'));

function handleAnswer(selectedAnswer) {
    const scenario = scenarios[currentScenarioIndex];

    // Disable buttons after selection
    goodButton.disabled = true;
    badButton.disabled = true;

    // Check if the answer is correct
    if (selectedAnswer === scenario.answer) {
        score++;
        scoreDisplay.innerText = score;
        feedback.innerText = `बरोबर उत्तर! ${scenario.explanation}`;
        addBadge();
    } else {
        feedback.innerText = `चुकीचे उत्तर. ${scenario.explanation}`;
    }

    // Show the next button after feedback
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentScenarioIndex++;
    if (currentScenarioIndex < scenarios.length) {
        displayScenario();
    } else {
        scenarioText.innerText = "तुम्ही सर्व प्रश्न पूर्ण केले आहेत!";
        feedback.innerText = `तुमचे एकूण गुण: ${score}`;
        goodButton.style.display = 'none';
        badButton.style.display = 'none';
        nextButton.style.display = 'none';
    }
});

// Add a virtual badge
function addBadge() {
    const badge = document.createElement('div');
    badge.classList.add('badge');
    badgeContainer.appendChild(badge);
}
