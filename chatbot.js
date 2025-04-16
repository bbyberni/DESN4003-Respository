// Chatbot functionality
class Chatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        // Create chatbot container
        const chatbotContainer = document.createElement('div');
        chatbotContainer.className = 'chatbot-container';
        chatbotContainer.innerHTML = `
            <div class="chatbot-header">
                <span>Climate Assistant</span>
                <button class="minimize-btn">−</button>
            </div>
            <div class="chatbot-messages"></div>
            <div class="chatbot-input">
                <input type="text" placeholder="Type your message...">
                <button class="send-btn">Send</button>
            </div>
        `;

        // Add to body
        document.body.appendChild(chatbotContainer);

        // Add event listeners
        const minimizeBtn = chatbotContainer.querySelector('.minimize-btn');
        const sendBtn = chatbotContainer.querySelector('.send-btn');
        const input = chatbotContainer.querySelector('input');
        const messagesContainer = chatbotContainer.querySelector('.chatbot-messages');

        minimizeBtn.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Add welcome message
        this.addMessage('Hello! I\'m your Climate Assistant. How can I help you today?', 'bot');
    }

    toggleChat() {
        const container = document.querySelector('.chatbot-container');
        this.isOpen = !this.isOpen;
        container.classList.toggle('minimized');
    }

    sendMessage() {
        const input = document.querySelector('.chatbot-input input');
        const message = input.value.trim();
        
        if (message) {
            this.addMessage(message, 'user');
            input.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                this.addMessage('I understand you\'re interested in climate resilience. How can I assist you with your research?', 'bot');
            }, 1000);
        }
    }

    addMessage(text, sender) {
        const messagesContainer = document.querySelector('.chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
}); 