// Interface for clock configuration
interface ClockConfig {
    is24HourFormat: boolean;
    isVisible: boolean;
    showSeconds: boolean;
    showDate: boolean;
}

// Digital Clock Class
class DigitalClock {
    private hoursElement: HTMLElement | null = null;
    private minutesElement: HTMLElement | null = null;
    private secondsElement: HTMLElement | null = null;
    private ampmElement: HTMLElement | null = null;
    private dateElement: HTMLElement | null = null;
    private clockContainer: HTMLElement | null = null;
    private toggleFormatButton: HTMLButtonElement | null = null;
    private toggleVisibilityButton: HTMLButtonElement | null = null;
    
    private config: ClockConfig = {
        is24HourFormat: false,
        isVisible: true,
        showSeconds: true,
        showDate: true
    };
    
    private updateInterval: number = 0;

    constructor() {
        this.initializeElements();
        this.loadConfigFromStorage();
        this.setupEventListeners();
        this.startClock();
    }

    // Initialize DOM elements
    private initializeElements(): void {
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
        this.ampmElement = document.getElementById('ampm');
        this.dateElement = document.getElementById('clockDate');
        this.clockContainer = document.querySelector('.digital-clock-container');
        this.toggleFormatButton = document.getElementById('toggleClockFormat') as HTMLButtonElement;
        this.toggleVisibilityButton = document.getElementById('toggleClockVisibility') as HTMLButtonElement;
    }

    // Load configuration from localStorage
    private loadConfigFromStorage(): void {
        const savedConfig = localStorage.getItem('digitalClockConfig');
        if (savedConfig) {
            try {
                this.config = { ...this.config, ...JSON.parse(savedConfig) };
                this.applyConfig();
            } catch (e) {
                console.error('Error loading clock configuration:', e);
            }
        }
    }

    // Save configuration to localStorage
    private saveConfigToStorage(): void {
        localStorage.setItem('digitalClockConfig', JSON.stringify(this.config));
    }

    // Apply current configuration to the clock
    private applyConfig(): void {
        // Update format button text
        if (this.toggleFormatButton) {
            this.toggleFormatButton.textContent = this.config.is24HourFormat ? '24' : '12';
        }
        
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
            const colonAfterMinutes = this.secondsElement.previousSibling as HTMLElement;
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
    private setupEventListeners(): void {
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
    private showContextMenu(e: MouseEvent): void {
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
        const closeMenu = (event: MouseEvent) => {
            if (!contextMenu.contains(event.target as Node)) {
                contextMenu.remove();
                document.removeEventListener('click', closeMenu);
            }
        };
        
        setTimeout(() => {
            document.addEventListener('click', closeMenu);
        }, 100);
    }

    // Start the clock update interval
    private startClock(): void {
        this.updateTime(); // Initial update
        this.updateInterval = window.setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    // Pad number with leading zero
    private padNumber(num: number): string {
        return num < 10 ? '0' + num : num.toString();
    }

    // Update the time display
    private updateTime(): void {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        // Format hours based on 12/24 hour setting
        let displayHours: number;
        let ampm = '';
        
        if (this.config.is24HourFormat) {
            displayHours = hours;
        } else {
            // 12-hour format
            displayHours = hours % 12;
            if (displayHours === 0) displayHours = 12;
            ampm = hours >= 12 ? 'PM' : 'AM';
        }
        
        // Update DOM elements with animation
        if (this.hoursElement) {
            this.updateElementWithAnimation(this.hoursElement, this.padNumber(displayHours));
        }
        
        if (this.minutesElement) {
            this.updateElementWithAnimation(this.minutesElement, this.padNumber(minutes));
        }
        
        if (this.config.showSeconds && this.secondsElement) {
            this.updateElementWithAnimation(this.secondsElement, this.padNumber(seconds));
        }
        
        if (this.ampmElement) {
            this.ampmElement.textContent = ampm;
        }
        
        // Update date
        if (this.config.showDate && this.dateElement) {
            const options: Intl.DateTimeFormatOptions = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            this.dateElement.textContent = now.toLocaleDateString('id-ID', options);
        }
    }

    // Update an element with animation
    private updateElementWithAnimation(element: HTMLElement, newValue: string): void {
        if (element.textContent !== newValue) {
            element.classList.remove('time-update');
            // Trigger reflow
            void element.offsetWidth;
            element.textContent = newValue;
            element.classList.add('time-update');
        }
    }

    // Clean up when clock is no longer needed
    public destroy(): void {
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