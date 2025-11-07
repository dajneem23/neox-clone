// ===================================
// Animated Gradient Canvas (Stripe-like)
// ===================================

class GradientCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.width = 0;
        this.height = 0;
        this.time = 0;
        
        // Gradient colors (purple theme)
        this.colors = [
            { r: 124, g: 58, b: 237 },   // #7C3AED
            { r: 167, g: 139, b: 250 },  // #A78BFA
            { r: 109, g: 40, b: 217 },   // #6D28D9
            { r: 196, g: 181, b: 253 },  // #C4B5FD
        ];
        
        this.init();
    }
    
    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }
    
    resize() {
        this.width = this.canvas.offsetWidth;
        this.height = this.canvas.offsetHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    
    animate() {
        this.time += 0.003;
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
    
    draw() {
        const ctx = this.ctx;
        const w = this.width;
        const h = this.height;
        
        // Create gradient layers with animation
        const gradient1 = ctx.createRadialGradient(
            w * (0.5 + Math.sin(this.time) * 0.3),
            h * (0.3 + Math.cos(this.time * 0.8) * 0.2),
            0,
            w * 0.5,
            h * 0.5,
            w * 0.8
        );
        
        const gradient2 = ctx.createRadialGradient(
            w * (0.7 + Math.cos(this.time * 1.2) * 0.2),
            h * (0.6 + Math.sin(this.time * 0.9) * 0.3),
            0,
            w * 0.7,
            h * 0.6,
            w * 0.9
        );
        
        const gradient3 = ctx.createRadialGradient(
            w * (0.2 + Math.sin(this.time * 1.5) * 0.2),
            h * (0.7 + Math.cos(this.time * 1.1) * 0.2),
            0,
            w * 0.3,
            h * 0.7,
            w * 0.7
        );
        
        // Clear canvas
        ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
        ctx.fillRect(0, 0, w, h);
        
        // First gradient layer
        const c1 = this.colors[0];
        gradient1.addColorStop(0, `rgba(${c1.r}, ${c1.g}, ${c1.b}, 0.15)`);
        gradient1.addColorStop(0.5, `rgba(${c1.r}, ${c1.g}, ${c1.b}, 0.08)`);
        gradient1.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient1;
        ctx.fillRect(0, 0, w, h);
        
        // Second gradient layer
        const c2 = this.colors[1];
        gradient2.addColorStop(0, `rgba(${c2.r}, ${c2.g}, ${c2.b}, 0.12)`);
        gradient2.addColorStop(0.5, `rgba(${c2.r}, ${c2.g}, ${c2.b}, 0.06)`);
        gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, w, h);
        
        // Third gradient layer
        const c3 = this.colors[2];
        gradient3.addColorStop(0, `rgba(${c3.r}, ${c3.g}, ${c3.b}, 0.1)`);
        gradient3.addColorStop(0.5, `rgba(${c3.r}, ${c3.g}, ${c3.b}, 0.05)`);
        gradient3.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient3;
        ctx.fillRect(0, 0, w, h);
        
        // Reset composite operation
        ctx.globalCompositeOperation = 'source-over';
    }
}

// Initialize gradient canvas
document.addEventListener('DOMContentLoaded', () => {
    new GradientCanvas('gradientCanvas');
});

// ===================================
// Navigation and UI
// ===================================

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .compliance-item, .partner-logo');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Dropdown menu for mobile
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = toggle.closest('.nav-dropdown');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            // Toggle visibility
            if (menu.style.position === 'relative') {
                menu.style.position = 'absolute';
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            } else {
                menu.style.position = 'relative';
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
                menu.style.transform = 'translateY(0)';
            }
        }
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    const globeContainer = document.querySelector('.globe-container');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (globeContainer) {
        globeContainer.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in-out';

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
    // Your scroll handler code here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Add click analytics (placeholder - replace with your analytics service)
document.querySelectorAll('.btn, .product-link').forEach(element => {
    element.addEventListener('click', (e) => {
        const action = e.target.textContent.trim();
        console.log('Button clicked:', action);
        // Add your analytics tracking here
        // Example: gtag('event', 'click', { 'event_category': 'button', 'event_label': action });
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.transform = 'rotate(360deg)';
        document.body.style.transition = 'transform 2s ease-in-out';
        setTimeout(() => {
            document.body.style.transform = '';
        }, 2000);
    }
});


// ===================================
// Chat Widget Functionality
// ===================================

const chatWidget = document.getElementById('chatWidget');
const chatBubble = document.getElementById('chatBubble');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

// Toggle chat window
function toggleChat() {
    chatWidget.classList.toggle('active');
    if (chatWidget.classList.contains('active')) {
        chatInput.focus();
    }
}

chatBubble.addEventListener('click', toggleChat);
chatClose.addEventListener('click', toggleChat);

// Handle quick reply buttons
const quickReplyButtons = document.querySelectorAll('.quick-reply-btn');
quickReplyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const message = button.getAttribute('data-message');
        sendMessage(message);
        // Remove quick replies after first interaction
        document.querySelector('.quick-replies').style.display = 'none';
    });
});

// Send message function
function sendMessage(message) {
    if (!message.trim()) return;

    // Add user message
    const userMessageHTML = `
        <div class="chat-message user-message">
            <div class="message-content">
                <p>${escapeHtml(message)}</p>
            </div>
        </div>
    `;

    const messagesContainer = chatMessages;
    messagesContainer.insertAdjacentHTML('beforeend', userMessageHTML);

    // Scroll to bottom
    chatMessages.parentElement.scrollTop = chatMessages.parentElement.scrollHeight;

    // Simulate bot response after a delay
    setTimeout(() => {
        addBotResponse(message);
    }, 1000);
}

// Add bot response
function addBotResponse(userMessage) {
    let response = getAutomatedResponse(userMessage);

    const botMessageHTML = `
        <div class="chat-message bot-message">
            <div class="message-avatar">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="#764CF0"/>
                    <text x="16" y="21" text-anchor="middle" fill="white" font-size="14" font-weight="600">N</text>
                </svg>
            </div>
            <div class="message-content">
                <p>${response}</p>
            </div>
        </div>
    `;

    chatMessages.insertAdjacentHTML('beforeend', botMessageHTML);
    chatMessages.parentElement.scrollTop = chatMessages.parentElement.scrollHeight;
}

// Get automated response based on keywords
function getAutomatedResponse(message) {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('product') || lowerMessage.includes('collection') || lowerMessage.includes('payout') || lowerMessage.includes('control') || lowerMessage.includes('gateway')) {
        return "We offer four main products: NeoX Collection for payments, NeoX Payout for bulk transfers, NeoX Control for virtual cards, and Payment Gateway for seamless integrations. Which one interests you most?";
    } else if (lowerMessage.includes('integration') || lowerMessage.includes('api') || lowerMessage.includes('help') || lowerMessage.includes('setup')) {
        return "Our documentation at docs.neox.vn has comprehensive guides for integration. Would you like me to connect you with our technical team for personalized assistance?";
    } else if (lowerMessage.includes('sales') || lowerMessage.includes('contact') || lowerMessage.includes('demo')) {
        return "I'd be happy to connect you with our sales team! Please provide your email and we'll reach out within 24 hours. You can also contact us directly through our contact form.";
    } else if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) {
        return "Our pricing varies based on transaction volume and specific needs. I recommend speaking with our sales team to get a custom quote that fits your business. Shall I arrange a call?";
    } else if (lowerMessage.includes('security') || lowerMessage.includes('compliance') || lowerMessage.includes('safe')) {
        return "Security is our top priority! We're PCI DSS certified, licensed by the State Bank of Vietnam, and follow strict AML & KYC procedures. All transactions are encrypted and monitored 24/7.";
    } else if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
        return "Hello! 👋 Welcome to NeoX. How can I assist you with our payment solutions today?";
    } else if (lowerMessage.includes('thank')) {
        return "You're welcome! Is there anything else I can help you with?";
    } else {
        return "Thanks for your message! For specific questions, I recommend checking our documentation or speaking with our support team. Would you like me to connect you with a specialist?";
    }
}

// Handle form submission
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value;
    if (message.trim()) {
        sendMessage(message);
        chatInput.value = '';
    }
});

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Close chat when clicking outside
document.addEventListener('click', (e) => {
    if (chatWidget && chatWidget.classList.contains('active') &&
        !chatWidget.contains(e.target)) {
        // Close the chat widget
        chatWidget.classList.remove('active');
    }
});

// Add typing indicator (optional enhancement)
function showTypingIndicator() {
    const typingHTML = `
        <div class="chat-message bot-message typing-indicator">
            <div class="message-avatar">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="#764CF0"/>
                    <text x="16" y="21" text-anchor="middle" fill="white" font-size="14" font-weight="600">N</text>
                </svg>
            </div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    `;
    chatMessages.insertAdjacentHTML('beforeend', typingHTML);
    chatMessages.parentElement.scrollTop = chatMessages.parentElement.scrollHeight;
}

console.log('NeoX Chat Widget initialized! 💬');

// ===================================
// Dashboard Number Animation
// ===================================

function animateNumber(element, start, end, duration, formatFn) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * easeOut;

        element.textContent = formatFn ? formatFn(current) : Math.floor(current);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Format currency with commas
function formatCurrency(num) {
    return '$' + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Format percentage
function formatPercentage(num) {
    return '+' + num.toFixed(1) + '%';
}

// Format integer with commas
function formatInteger(num) {
    return Math.floor(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Initialize dashboard animations when in viewport
function initDashboardAnimations() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');

                // Animate stat values
                const statValues = entry.target.querySelectorAll('.stat-value');
                statValues.forEach(stat => {
                    const text = stat.textContent;

                    // Check if it's a currency value
                    if (text.includes('$')) {
                        const value = parseFloat(text.replace(/[$,]/g, ''));
                        animateNumber(stat, 0, value, 2000, formatCurrency);
                    }
                    // Check if it's a percentage
                    else if (text.includes('%')) {
                        const value = parseFloat(text.replace(/[+%]/g, ''));
                        animateNumber(stat, 0, value, 1500, formatPercentage);
                    }
                });

                // Animate stat numbers
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const value = parseInt(stat.textContent.replace(/,/g, ''));
                    animateNumber(stat, 0, value, 1800, formatInteger);
                });

                // Animate large currency values
                const statLarge = entry.target.querySelectorAll('.stat-value-large');
                statLarge.forEach(stat => {
                    const text = stat.textContent;
                    if (text.includes('$')) {
                        const value = parseFloat(text.replace(/[$,]/g, ''));
                        animateNumber(stat, 0, value, 2500, formatCurrency);
                    }
                });
            }
        });
    }, observerOptions);

    // Observe all dashboard mockups
    const dashboards = document.querySelectorAll('.dashboard-mockup');
    dashboards.forEach(dashboard => observer.observe(dashboard));
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboardAnimations);
} else {
    initDashboardAnimations();
}

console.log('Dashboard animations initialized! 📊');
