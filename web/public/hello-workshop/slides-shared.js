/* Shared Slide Framework JavaScript */

class SlidePresentation {
    constructor() {
        this.currentSlideIndex = 0;
        this.slides = document.querySelectorAll('.slide');
        this.totalSlides = this.slides.length;
        this.navItems = document.querySelectorAll('.nav-item');
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.init();
    }

    init() {
        // Update total slides display
        const totalSlidesEl = document.getElementById('totalSlides');
        if (totalSlidesEl) {
            totalSlidesEl.textContent = this.totalSlides;
        }

        // Nav item click handlers
        this.navItems.forEach((item, index) => {
            item.addEventListener('click', () => this.goToSlide(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeydown(e));

        // Click outside to close nav
        document.addEventListener('click', (e) => this.handleOutsideClick(e));

        // Touch/swipe support
        document.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        // Initialize UI
        this.updateUI();
    }

    updateSlide(newIndex, direction = 'next') {
        if (newIndex < 0 || newIndex >= this.totalSlides) return;

        const oldSlide = this.slides[this.currentSlideIndex];
        const newSlide = this.slides[newIndex];

        // Remove all state classes
        this.slides.forEach(slide => {
            slide.classList.remove('active', 'prev');
        });

        // Set prev class for animation
        if (direction === 'next') {
            oldSlide.classList.add('prev');
        }

        // Activate new slide
        newSlide.classList.add('active');

        this.currentSlideIndex = newIndex;
        this.updateUI();
    }

    updateUI() {
        // Update counter
        const currentSlideEl = document.getElementById('currentSlide');
        if (currentSlideEl) {
            currentSlideEl.textContent = this.currentSlideIndex + 1;
        }

        // Update progress bar
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            const progress = ((this.currentSlideIndex + 1) / this.totalSlides) * 100;
            progressFill.style.width = `${progress}%`;
        }

        // Update buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (prevBtn) prevBtn.disabled = this.currentSlideIndex === 0;
        if (nextBtn) nextBtn.disabled = this.currentSlideIndex === this.totalSlides - 1;

        // Update nav items
        this.navItems.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentSlideIndex);
        });
    }

    nextSlide() {
        if (this.currentSlideIndex < this.totalSlides - 1) {
            this.updateSlide(this.currentSlideIndex + 1, 'next');
        }
    }

    prevSlide() {
        if (this.currentSlideIndex > 0) {
            this.updateSlide(this.currentSlideIndex - 1, 'prev');
        }
    }

    goToSlide(index) {
        const direction = index > this.currentSlideIndex ? 'next' : 'prev';
        this.updateSlide(index, direction);
        this.closeSideNav();
    }

    toggleNav() {
        const sideNav = document.getElementById('sideNav');
        if (sideNav) {
            sideNav.classList.toggle('open');
        }
    }

    closeSideNav() {
        const sideNav = document.getElementById('sideNav');
        if (sideNav) {
            sideNav.classList.remove('open');
        }
    }

    handleKeydown(e) {
        switch(e.key) {
            case 'ArrowRight':
            case ' ':
                e.preventDefault();
                this.nextSlide();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                this.prevSlide();
                break;
            case 'm':
            case 'M':
                this.toggleNav();
                break;
            case 'Escape':
                this.closeSideNav();
                break;
            case 'Home':
                e.preventDefault();
                this.goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                this.goToSlide(this.totalSlides - 1);
                break;
        }
    }

    handleOutsideClick(e) {
        const sideNav = document.getElementById('sideNav');
        const navToggle = document.querySelector('.nav-toggle');
        if (sideNav && navToggle && !sideNav.contains(e.target) && !navToggle.contains(e.target)) {
            this.closeSideNav();
        }
    }

    handleSwipe() {
        const diff = this.touchStartX - this.touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
}

// Global functions for onclick handlers
let slidePresentation;

function toggleNav() {
    if (slidePresentation) slidePresentation.toggleNav();
}

function nextSlide() {
    if (slidePresentation) slidePresentation.nextSlide();
}

function prevSlide() {
    if (slidePresentation) slidePresentation.prevSlide();
}

function goToSlide(index) {
    if (slidePresentation) slidePresentation.goToSlide(index);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    slidePresentation = new SlidePresentation();
});
