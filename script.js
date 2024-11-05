const faqs = [
    {
        question: "hi",
        answer: "Hello how can I help you?"
    },
     {
        question: "How long does shipping take?",
        answer: "Shipping usually takes 5-7 business days."
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes, we offer 24/7 customer support via chat and email."
    }
];

document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        addMessage(userInput, 'user-message');
        const answer = getAnswer(userInput);
        addMessage(answer, 'bot-message');
        document.getElementById('user-input').value = '';
    }
});

function addMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = text;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function getAnswer(userQuestion) {
    const lowerCaseQuestion = userQuestion.toLowerCase();
    for (const faq of faqs) {
        if (lowerCaseQuestion.includes(faq.question.toLowerCase())) {
            return faq.answer;
        }
    }
    return "I'm sorry, I don't have an answer for that.";
}