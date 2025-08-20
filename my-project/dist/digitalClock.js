// Digital Clock Class
class DigitalClock {
    constructor() {
        this.config = {
            is24HourFormat: false,
            isVisible: true,
            showSeconds: true,
            showDate: true
        };
        this.initializeElements();
        this.loadConfigFromStorage();
        this.setupEventListeners();
        this.startClock();
    }
    // Initialize DOM elements
    initializeElements() {
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
        this.ampmElement = document.getElementById('ampm');
        this.dateElement = document.getElementById('clockDate');
        this.clockContainer = document.querySelector('.digital-clock-container');
        this.toggleFormatButton = document.getElementById('toggleClockFormat');
        this.toggleVisibilityButton = document.getElementById('toggleClockVisibility');
    }
    // Load configuration from localStorage
    loadConfigFromStorage() {
        const savedConfig = localStorage.getItem('digitalClockConfig');
        if (savedConfig) {
            try {
                this.config = Object.assign(Object.assign({}, this.config), JSON.parse(savedConfig));
                this.applyConfig();
            }
            catch (e) {
                console.error('Error loading clock configuration:', e);
            }
        }
    }
    // Save configuration to localStorage
    saveConfigToStorage() {
        localStorage.setItem('digitalClockConfig', JSON.stringify(this.config));
    }
    // Apply current configuration to the clock
    applyConfig() {
        // Update format button text
        this.toggleFormatButton.textContent = this.config.is24HourFormat ? '24' : '12';
        // Update visibility button text and container visibility
        if (this.toggleVisibilityButton) {
            this.toggleVisibilityButton.textContent = this.config.isVisible ? 'Sembunyikan' : 'Tampilkan';
        }
        if (this.clockContainer) {
            this.clockContainer.style.display = this.config.isVisible ? 'block' : 'none';
        }
        // Toggle seconds visibility
        if (this.secondsElement) {
            this.secondsElement.style.display = this.config.showSeconds ? 'inline' : 'none';
            const colonAfterMinutes = this.secondsElement.previousSibling;
            if (colonAfterMinutes && colonAfterMinutes.nodeType === 3) {
                colonAfterMinutes.textContent = this.config.showSeconds ? ':' : '';
            }
        }
        // Toggle date visibility
        if (this.dateElement) {
            this.dateElement.style.display = this.config.showDate ? 'block' : 'none';
        }
    }
    // Set up event listeners for user interactions
    setupEventListeners() {
        // Toggle 12/24 hour format
        if (this.toggleFormatButton) {
            this.toggleFormatButton.addEventListener('click', () => {
                this.config.is24HourFormat = !this.config.is24HourFormat;
                this.saveConfigToStorage();
                this.applyConfig();
                this.updateTime(); // Immediate update to reflect format change
            });
        }
        // Toggle clock visibility
        if (this.toggleVisibilityButton) {
            this.toggleVisibilityButton.addEventListener('click', () => {
                this.config.isVisible = !this.config.isVisible;
                this.saveConfigToStorage();
                this.applyConfig();
            });
        }
        // Add context menu for additional options
        if (this.clockContainer) {
            this.clockContainer.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                this.showContextMenu(e);
            });
        }
    }
    // Show context menu for additional clock options
    showContextMenu(e) {
        // Remove any existing context menu
        const existingMenu = document.getElementById('clockContextMenu');
        if (existingMenu) {
            existingMenu.remove();
        }
        // Create context menu
        const contextMenu = document.createElement('div');
        contextMenu.id = 'clockContextMenu';
        contextMenu.style.position = 'fixed';
        contextMenu.style.left = `${e.pageX}px`;
        contextMenu.style.top = `${e.pageY}px`;
        contextMenu.style.background = '#2c3e50';
        contextMenu.style.borderRadius = '5px';
        contextMenu.style.padding = '10px';
        contextMenu.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        contextMenu.style.zIndex = '1000';
        // Toggle seconds option
        const toggleSeconds = document.createElement('div');
        toggleSeconds.textContent = this.config.showSeconds ? 'Sembunyikan Detik' : 'Tampilkan Detik';
        toggleSeconds.style.padding = '8px';
        toggleSeconds.style.cursor = 'pointer';
        toggleSeconds.style.borderRadius = '3px';
        toggleSeconds.addEventListener('mouseover', () => {
            toggleSeconds.style.background = 'rgba(255,255,255,0.1)';
        });
        toggleSeconds.addEventListener('mouseout', () => {
            toggleSeconds.style.background = 'transparent';
        });
        toggleSeconds.addEventListener('click', () => {
            this.config.showSeconds = !this.config.showSeconds;
            this.saveConfigToStorage();
            this.applyConfig();
            contextMenu.remove();
        });
        // Toggle date option
        const toggleDate = document.createElement('div');
        toggleDate.textContent = this.config.showDate ? 'Sembunyikan Tanggal' : 'Tampilkan Tanggal';
        toggleDate.style.padding = '8px';
        toggleDate.style.cursor = 'pointer';
        toggleDate.style.borderRadius = '3px';
        toggleDate.addEventListener('mouseover', () => {
            toggleDate.style.background = 'rgba(255,255,255,0.1)';
        });
        toggleDate.addEventListener('mouseout', () => {
            toggleDate.style.background = 'transparent';
        });
        toggleDate.addEventListener('click', () => {
            this.config.showDate = !this.config.showDate;
            this.saveConfigToStorage();
            this.applyConfig();
            contextMenu.remove();
        });
        contextMenu.appendChild(toggleSeconds);
        contextMenu.appendChild(toggleDate);
        document.body.appendChild(contextMenu);
        // Close menu when clicking elsewhere
        const closeMenu = (event) => {
            if (!contextMenu.contains(event.target)) {
                contextMenu.remove();
                document.removeEventListener('click', closeMenu);
            }
        };
        setTimeout(() => {
            document.addEventListener('click', closeMenu);
        }, 100);
    }
    // Start the clock update interval
    startClock() {
        this.updateTime(); // Initial update
        this.updateInterval = window.setInterval(() => {
            this.updateTime();
        }, 1000);
    }
    // Update the time display
    updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        // Format hours based on 12/24 hour setting
        let displayHours;
        let ampm = '';
        if (this.config.is24HourFormat) {
            displayHours = hours;
        }
        else {
            // 12-hour format
            displayHours = hours % 12;
            if (displayHours === 0)
                displayHours = 12;
            ampm = hours >= 12 ? 'PM' : 'AM';
        }
        // Update DOM elements with animation
        this.updateElementWithAnimation(this.hoursElement, displayHours.toString().padStart(2, '0'));
        this.updateElementWithAnimation(this.minutesElement, minutes.toString().padStart(2, '0'));
        if (this.config.showSeconds) {
            this.updateElementWithAnimation(this.secondsElement, seconds.toString().padStart(2, '0'));
        }
        if (this.ampmElement) {
            this.ampmElement.textContent = ampm;
        }
        // Update date
        if (this.config.showDate && this.dateElement) {
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            this.dateElement.textContent = now.toLocaleDateString('id-ID', options);
        }
    }
    // Update an element with animation
    updateElementWithAnimation(element, newValue) {
        if (element.textContent !== newValue) {
            element.classList.remove('time-update');
            void element.offsetWidth; // Trigger reflow
            element.textContent = newValue;
            element.classList.add('time-update');
        }
    }
    // Clean up when clock is no longer needed
    destroy() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
    }
}
// Initialize the clock when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new DigitalClock();
});
// Export for use in other modules if needed
export default DigitalClock;
