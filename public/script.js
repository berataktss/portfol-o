// Elite Professional Portfolio JavaScript - Advanced Implementation
// Berat Aktaş - Senior Developer Portfolio with Enhanced Details

// Multi-language translations with enhanced content
const translations = {
    tr: {
        nav_home: "Ana Sayfa",
        nav_about: "Hakkımda",
        nav_projects: "Projeler",
        nav_contact: "İletişim",
        hero_greeting: "Merhaba, Ben",
        hero_description: "Profesyonel yazılım geliştirici ve teknoloji uzmanı. Modern web teknolojileri ile ölçeklenebilir, performanslı ve estetik çözümler üretiyorum.",
        hero_cta_projects: "Projelerimi İncele",
        hero_cta_contact: "İletişime Geç",
        about_title: "Hakkımda",
        about_role: "Yazılım Geliştirici",
        about_description1: "Modern web teknolojileri konusunda uzman bir geliştiriciyim. Kullanıcı deneyimini ön planda tutarak, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.",
        about_description2: "Sürekli öğrenme odaklı yaklaşımımla, endüstrinin en güncel teknolojilerini takip ediyor ve projelerimde uyguluyorum.",
        about_experience: "Deneyim",
        about_skills: "Teknik Yetenekler",
        projects_title: "Projeler",
        projects_subtitle: "Profesyonel web geliştirme projelerim. Her biri farklı teknolojiler kullanılarak geliştirilmiş ve gerçek dünya problemlerine çözüm üretmektedir.",
        project1_title: "Admin Dashboard",
        project1_desc: "Modern ve responsive admin panel tasarımı. Kullanıcı yönetimi, istatistikler ve grafik entegrasyonu ile gelişmiş yönetim paneli.",
        project2_title: "Landing Page",
        project2_desc: "SEO optimizasyonu ve responsive tasarımla geliştirilmiş modern landing page. Animasyonlar ve form entegrasyonu dahil.",
        project3_title: "E-Ticaret Platformu",
        project3_desc: "Tam özellikli e-ticaret çözümü. Ürün yönetimi, sepet işlemleri, ödeme entegrasyonu ve kullanıcı paneli.",
        project_demo: "Demo",
        project_code: "Kod",
        contact_title: "İletişim",
        contact_subtitle: "Profesyonel bir projeniz var mı? Birlikte çalışalım ve kaliteli çözümler üretelim.",
        contact_get_in_touch: "İletişim Bilgileri",
        contact_name: "İsim",
        contact_message: "Mesaj",
        contact_send: "Mesaj Gönder",
        footer_rights: "Tüm hakları saklıdır.",
        footer_handcoded: "Elite seviyede elle kodlanmıştır"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_description: "Professional software developer and technology expert. Creating scalable, performant, and aesthetic solutions with modern web technologies.",
        hero_cta_projects: "View My Projects",
        hero_cta_contact: "Get In Touch",
        about_title: "About Me",
        about_role: "Software Developer",
        about_description1: "I'm an expert developer in modern web technologies. I develop performant and scalable applications while prioritizing user experience.",
        about_description2: "With my continuous learning-focused approach, I follow the industry's latest technologies and apply them in my projects.",
        about_experience: "Experience",
        about_skills: "Technical Skills",
        projects_title: "Projects",
        projects_subtitle: "My professional web development projects. Each developed using different technologies and providing solutions to real-world problems.",
        project1_title: "Admin Dashboard",
        project1_desc: "Modern and responsive admin panel design. Advanced management panel with user management, statistics, and chart integration.",
        project2_title: "Landing Page",
        project2_desc: "Modern landing page developed with SEO optimization and responsive design. Including animations and form integration.",
        project3_title: "E-Commerce Platform",
        project3_desc: "Full-featured e-commerce solution. Product management, cart operations, payment integration, and user panel.",
        project_demo: "Demo",
        project_code: "Code",
        contact_title: "Contact",
        contact_subtitle: "Do you have a professional project? Let's work together and create quality solutions.",
        contact_get_in_touch: "Contact Information",
        contact_name: "Name",
        contact_message: "Message",
        contact_send: "Send Message",
        footer_rights: "All rights reserved.",
        footer_handcoded: "Hand-crafted at elite level"
    },
    lv: {
        nav_home: "Sākums",
        nav_about: "Par mani",
        nav_projects: "Projekti",
        nav_contact: "Kontakti",
        hero_greeting: "Sveiki, es esmu",
        hero_description: "Profesionāls programmatūras izstrādātājs un tehnoloģiju eksperts. Radot mērogojamus, veiktspējīgus un estētiskus risinājumus ar mūsdienīgām web tehnoloģijām.",
        hero_cta_projects: "Apskatīt projektus",
        hero_cta_contact: "Sazināties",
        about_title: "Par mani",
        about_role: "Programmatūras izstrādātājs",
        about_description1: "Es esmu eksperts izstrādātājs mūsdienīgās web tehnoloģijās. Izstrādāju veiktspējīgas un mērogojamas lietojumprogrammas, prioritizējot lietotāja pieredzi.",
        about_description2: "Ar nepārtrauktas mācīšanās orientēto pieeju, sekoju nozares jaunākajām tehnoloģijām un tās lieto projektos.",
        about_experience: "Pieredze",
        about_skills: "Tehniskās prasmes",
        projects_title: "Projekti",
        projects_subtitle: "Mani profesionālie web izstrādes projekti. Katrs izstrādāts ar dažādām tehnoloģijām un sniedz risinājumus reālām problēmām.",
        project1_title: "Administratora panelis",
        project1_desc: "Moderns un responsīvs administratora paneļa dizains. Uzlabots pārvaldības panelis ar lietotāju pārvaldību, statistiku un diagrammu integrāciju.",
        project2_title: "Galvenā lapa",
        project2_desc: "Moderna galvenā lapa ar SEO optimizāciju un responsīvu dizainu. Iekļaujot animācijas un formu integrāciju.",
        project3_title: "E-komercijas platforma",
        project3_desc: "Pilnīgi aprīkota e-komercijas risinājums. Produktu pārvaldība, groza operācijas, maksājumu integrācija un lietotāju panelis.",
        project_demo: "Demo",
        project_code: "Kods",
        contact_title: "Kontakti",
        contact_subtitle: "Vai jums ir profesionāls projekts? Strādāsim kopā un radīsim kvalitatīvus risinājumus.",
        contact_get_in_touch: "Kontaktinformācija",
        contact_name: "Vārds",
        contact_message: "Ziņojums",
        contact_send: "Sūtīt ziņojumu",
        footer_rights: "Visas tiesības aizsargātas.",
        footer_handcoded: "Izstrādāts elite līmenī"
    }
};

let currentLang = 'tr';

// Enhanced Performance Monitor with detailed metrics
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            fps: 0,
            memory: 0,
            loadTime: 0,
            renderTime: 0,
            interactionTime: 0
        };
        this.initMonitoring();
    }

    initMonitoring() {
        // Enhanced FPS monitoring with render time tracking
        let fps = 0;
        let lastTime = performance.now();
        let renderStart = performance.now();

        const measureFPS = (currentTime) => {
            fps++;
            const renderTime = currentTime - renderStart;
            
            if (currentTime >= lastTime + 1000) {
                this.metrics.fps = Math.round((fps * 1000) / (currentTime - lastTime));
                this.metrics.renderTime = Math.round(renderTime);
                fps = 0;
                lastTime = currentTime;
            }
            
            renderStart = performance.now();
            requestAnimationFrame(measureFPS);
        };

        requestAnimationFrame(measureFPS);

        // Enhanced memory monitoring
        if (performance.memory) {
            setInterval(() => {
                this.metrics.memory = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
            }, 2000);
        }

        // Load time with detailed breakdown
        window.addEventListener('load', () => {
            const timing = performance.timing;
            this.metrics.loadTime = timing.loadEventEnd - timing.navigationStart;
            this.metrics.interactionTime = timing.domInteractive - timing.navigationStart;
            
            console.log(`🚀 Elite Portfolio Performance:`);
            console.log(`⚡ Load Time: ${this.metrics.loadTime}ms`);
            console.log(`🎯 Interactive: ${this.metrics.interactionTime}ms`);
            console.log(`💫 Status: ${this.metrics.loadTime < 2000 ? 'Elite' : 'Good'}`);
        });
    }
}

// Advanced Animation Engine with Enhanced Features
class AnimationEngine {
    constructor() {
        this.observers = new Map();
        this.animations = new Set();
        this.particles = [];
        this.initAnimations();
    }

    initAnimations() {
        this.initIntersectionObserver();
        this.initParticleSystem();
        this.initAdvancedAnimations();
        this.initScrollProgress();
    }

    initIntersectionObserver() {
        const observerOptions = {
            threshold: [0.1, 0.3, 0.7],
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Enhanced staggered animations
                    const children = entry.target.querySelectorAll('.fade-up, .fade-left, .fade-right');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate');
                            this.addRippleEffect(child);
                        }, index * 150);
                    });

                    // Trigger special animations for specific elements
                    if (entry.target.classList.contains('text-display')) {
                        setTimeout(() => {
                            entry.target.classList.add('animate');
                        }, 500);
                    }
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.fade-up, .fade-left, .fade-right, .reveal, .text-display').forEach(el => {
            observer.observe(el);
        });

        this.observers.set('scroll', observer);
    }

    initParticleSystem() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '2';
        canvas.style.opacity = '0.3';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let animationId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create particles
        for (let i = 0; i < 15; i++) {
            this.particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            this.particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Boundary collision
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Draw particle with red glow
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(239, 68, 68, ${particle.opacity})`;
                ctx.fill();
                
                // Add glow effect
                ctx.shadowColor = '#ef4444';
                ctx.shadowBlur = 10;
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();
    }

    initScrollProgress() {
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset;
                const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / documentHeight) * 100;
                progressBar.style.width = scrollPercent + '%';
            });
        }
    }

    initAdvancedAnimations() {
        this.initParallaxEffect();
        this.initMagneticEffect();
        this.initCustomCursor();
        this.initAdvancedHovers();
    }

    initParallaxEffect() {
        const parallaxElements = document.querySelectorAll('.floating');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.1 + (index * 0.05);
                const yPos = scrolled * speed;
                const rotation = scrolled * 0.02;
                element.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
            });
        });
    }

    initMagneticEffect() {
        const magneticElements = document.querySelectorAll('.magnetic');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const moveX = x * 0.15;
                const moveY = y * 0.15;
                
                element.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0px, 0px)';
            });
        });
    }

    initCustomCursor() {
        if (window.innerWidth < 768) return; // Skip on mobile
        
        const cursor = document.querySelector('.custom-cursor');
        if (!cursor) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        const updateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(updateCursor);
        };

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Enhanced cursor interactions
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .magnetic');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });

        updateCursor();
    }

    initAdvancedHovers() {
        // Enhanced project card hovers with 3D effects
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 8;
                const rotateY = (centerX - x) / 8;
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateY(-12px)
                    scale(1.02)
                `;
            });

            card.addEventListener('mouseleave', () => {
                // 3D transform değerlerinin tamamı sıfırlandı
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
            });
        });

        // Enhanced skill item animations
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const randomRotation = (Math.random() - 0.5) * 15;
                const randomScale = 1.05 + Math.random() * 0.1;
                item.style.transform = `translateY(-8px) scale(${randomScale}) rotate(${randomRotation}deg)`;
                
                // Add particle burst effect
                this.createParticleBurst(item);
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0px) scale(1) rotate(0deg)';
            });
        });
    }

    addRippleEffect(element) {
        if (!element.classList.contains('ripple')) return;

        element.addEventListener('click', (e) => {
            const rect = element.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(239, 68, 68, 0.3);
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out;
                z-index: 1;
            `;
            
            element.style.position = 'relative';
            element.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    createParticleBurst(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #ef4444;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${centerX}px;
                top: ${centerY}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 8) * 2 * Math.PI;
            const velocity = 100 + Math.random() * 50;
            const x = Math.cos(angle) * velocity;
            const y = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                particle.remove();
            };
        }
    }
}

// Enhanced UI Controller with Advanced Features
class UIController {
    constructor() {
        this.navigation = null;
        this.mobileMenu = null;
        this.langSwitcher = null;
        this.init();
    }

    init() {
        this.initNavigation();
        this.initMobileMenu();
        this.initLanguageSwitcher();
        this.initFormHandling();
        this.initAdvancedInteractions();
        this.initKeyboardShortcuts();
    }

    initNavigation() {
        const nav = document.querySelector('nav');
        const navItems = document.querySelectorAll('.nav-item');
        
        // Enhanced smooth scrolling with easing
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = item.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    this.smoothScrollTo(offsetTop, 1200);
                }
                
                // Enhanced active states with animation
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            });
        });

        // Enhanced navbar background with multiple states
        let lastScrollY = 0;
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            // Hide/show navbar on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenuBtn.classList.toggle('active');
                
                // Animate hamburger icon
                const spans = mobileMenuBtn.querySelectorAll('span');
                if (mobileMenu.classList.contains('hidden')) {
                    // İkonun eski durumuna dönmesi için sıfırlama
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '';
                    spans[2].style.transform = '';
                } else {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                }
            });

            // Enhanced mobile menu animations
            const mobileNavItems = mobileMenu.querySelectorAll('a');
            mobileNavItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                        mobileMenuBtn.classList.remove('active');
                    }, index * 100);
                });
            });
        }
    }

    initLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        const langSwitcher = document.querySelector('.lang-switcher');
        
        langButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.switchLanguage(lang);
                
                // İyileştirme: Dinamik CSS değişkeni ile arka planı kaydır
                if (langSwitcher.style.setProperty) {
                    langSwitcher.style.setProperty('--active-index', index);
                }
                
                // Update active states
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Sayfa yüklendiğinde varsayılan dilin aktif butonunu ayarlama
        const initialLangBtn = document.querySelector(`[data-lang="${currentLang}"]`);
        if (initialLangBtn) {
            const initialIndex = Array.from(langButtons).indexOf(initialLangBtn);
            if (langSwitcher.style.setProperty) {
                langSwitcher.style.setProperty('--active-index', initialIndex);
            }
            langButtons.forEach(b => b.classList.remove('active'));
            initialLangBtn.classList.add('active');
        }
    }

    switchLanguage(lang) {
        currentLang = lang;
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                // Animate text change
                element.style.opacity = '0';
                setTimeout(() => {
                    element.textContent = translations[lang][key];
                    element.style.opacity = '1';
                }, 150);
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Store preference
        localStorage.setItem('preferred-language', lang);
    }

    initFormHandling() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm);
            });

            // Enhanced form input animations with validation
            const inputs = contactForm.querySelectorAll('.form-input');
            inputs.forEach(input => {
                input.addEventListener('focus', () => {
                    input.parentNode.classList.add('focused');
                    this.addInputGlow(input);
                });

                input.addEventListener('blur', () => {
                    if (!input.value) {
                        input.parentNode.classList.remove('focused');
                    }
                    this.removeInputGlow(input);
                    this.validateInput(input);
                });

                input.addEventListener('input', () => {
                    this.validateInput(input);
                });

                // Check if input has value on load
                if (input.value) {
                    input.parentNode.classList.add('focused');
                }
            });
        }
    }

    async handleFormSubmission(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const submitText = submitBtn.querySelector('.form-submit-text');
        const submitIcon = submitBtn.querySelector('.form-submit-icon');
        const originalText = submitText.textContent;
        const originalIcon = submitIcon.innerHTML;

        // Basit form validasyon kontrolü
        let isFormValid = true;
        form.querySelectorAll('.form-input').forEach(input => {
            if (!input.checkValidity()) {
                isFormValid = false;
                this.validateInput(input); // Hatalı alanları işaretle
            }
        });

        if (!isFormValid) {
             this.showNotification('Lütfen tüm alanları doğru şekilde doldurunuz.', 'error');
             return; // Formu göndermeyi durdur
        }
        
        // Enhanced loading state with animated dots
        submitText.innerHTML = 'Gönderiliyor';
        submitIcon.style.display = 'none';
        
        const loadingDots = document.createElement('div');
        loadingDots.className = 'loading-dots ml-2';
        loadingDots.innerHTML = '<div class="loading-dot"></div><div class="loading-dot"></div><div class="loading-dot"></div>';
        submitBtn.appendChild(loadingDots);
        
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');

        // Simulate enhanced form submission with validation
        try {
            await new Promise(resolve => setTimeout(resolve, 2500));
            
            // Success state with celebration effect
            loadingDots.remove();
            submitText.textContent = 'Gönderildi!';
            submitIcon.style.display = 'inline';
            submitIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>';
            submitBtn.classList.add('success');
            
            // Show enhanced success notification
            this.showNotification('Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.', 'success');
            
            // Create success particle effect
            this.createSuccessEffect(submitBtn);
            
            // Reset form with animation
            this.resetFormWithAnimation(form);
            
            // Reset button after delay
            setTimeout(() => {
                submitText.textContent = originalText;
                submitIcon.innerHTML = originalIcon;
                submitBtn.disabled = false;
                submitBtn.classList.remove('success', 'loading', 'error');
            }, 4000);
            
        } catch (error) {
            // Enhanced error state
            loadingDots.remove();
            submitText.textContent = 'Hata oluştu';
            submitIcon.style.display = 'inline';
            submitIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
            submitBtn.classList.add('error');
            
            this.showNotification('Bir hata oluştu, lütfen tekrar deneyin.', 'error');
            
            setTimeout(() => {
                submitText.textContent = originalText;
                submitIcon.innerHTML = originalIcon;
                submitBtn.disabled = false;
                submitBtn.classList.remove('error', 'loading', 'success');
            }, 4000);
        }
    }

    addInputGlow(input) {
        input.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.2)';
    }

    removeInputGlow(input) {
        input.style.boxShadow = '';
    }

    validateInput(input) {
        const isValid = input.checkValidity();
        const parent = input.parentNode;
        
        parent.classList.toggle('valid', isValid && input.value);
        parent.classList.toggle('invalid', !isValid && input.value);
    }

    resetFormWithAnimation(form) {
        const inputs = form.querySelectorAll('.form-input');
        inputs.forEach((input, index) => {
            setTimeout(() => {
                input.value = '';
                input.parentNode.classList.remove('focused', 'valid', 'invalid');
                
                // Add reset animation
                input.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    input.style.transform = 'scale(1)';
                }, 150);
            }, index * 100);
        });
    }

    createSuccessEffect(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create celebration particles
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: #ef4444;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${centerX}px;
                top: ${centerY}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 12) * 2 * Math.PI;
            const velocity = 150 + Math.random() * 100;
            const x = Math.cos(angle) * velocity;
            const y = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1500,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                particle.remove();
            };
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        const bgColor = {
            success: 'bg-green-600',
            error: 'bg-red-600',
            info: 'bg-blue-600'
        }[type] || 'bg-blue-600';
        
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform translate-x-full transition-all duration-500 ${bgColor} text-white max-w-md`;
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="text-xl">
                    ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
                </div>
                <div>${message}</div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in with enhanced effect
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove with fade out
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        }, 5000);
    }

    initAdvancedInteractions() {
        // Add loading states to buttons
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (btn.classList.contains('loading')) {
                    e.preventDefault();
                    return;
                }
                
                // Add ripple effect
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                    transform: scale(0);
                    animation: rippleEffect 0.6s ease-out;
                `;
                
                btn.style.position = 'relative';
                btn.style.overflow = 'hidden';
                btn.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Alt + number shortcuts for navigation
            if (e.altKey && e.key >= '1' && e.key <= '4') {
                e.preventDefault();
                const sections = ['#home', '#about', '#projects', '#contact'];
                const targetSection = document.querySelector(sections[parseInt(e.key) - 1]);
                
                if (targetSection) {
                    this.smoothScrollTo(targetSection.offsetTop - 80, 1000);
                }
            }
            
            // Escape key to close mobile menu
            if (e.key === 'Escape') {
                const mobileMenu = document.getElementById('mobile-menu');
                const mobileMenuBtn = document.getElementById('mobile-menu-btn');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuBtn.classList.remove('active');
                    
                    // İkon sıfırlama
                    const spans = mobileMenuBtn.querySelectorAll('span');
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '';
                    spans[2].style.transform = '';
                }
            }
        });
    }

    smoothScrollTo(target, duration = 1000) {
        const start = window.pageYOffset;
        const distance = target - start;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutCubic(timeElapsed, start, distance, duration);
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    }

    easeInOutCubic(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    }
}

// Enhanced Portfolio Application with Advanced Features
class Portfolio {
    constructor() {
        this.performanceMonitor = null;
        this.animationEngine = null;
        this.uiController = null;
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        // Initialize all enhanced systems
        this.performanceMonitor = new PerformanceMonitor();
        this.animationEngine = new AnimationEngine();
        this.uiController = new UIController();

        // Initialize advanced features
        this.initThemeSystem();
        this.initAccessibilityFeatures();
        this.initAdvancedFeatures();
        this.initEasterEggs();

        // Add CSS animations dynamically
        this.addDynamicStyles();

        // Log enhanced initialization
        console.log('%c🔥 Elite Portfolio Initialized', 'color: #ef4444; font-size: 18px; font-weight: bold;');
        console.log('%c💼 Berat Aktaş - Senior Developer', 'color: #ffffff; font-size: 16px;');
        console.log('%c✨ Hand-crafted at elite level', 'color: #a0a0a0; font-size: 14px;');
        console.log('%c🚀 Performance: Optimized', 'color: #ef4444; font-size: 12px;');
        
        // Load saved preferences
        this.loadUserPreferences();
    }

    addDynamicStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rippleEffect {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            @keyframes glowPulse {
                0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
                50% { box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); }
            }
            
            .glow {
                animation: glowPulse 3s ease-in-out infinite;
            }
            
            .success { background: #10b981 !important; }
            .error { background: #ef4444 !important; }
            .loading { opacity: 0.8; pointer-events: none; }
        `;
        document.head.appendChild(style);
    }

    initThemeSystem() {
        // Enhanced theme system (could be expanded for light/dark modes)
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-theme', prefersDark);
    }

    initAccessibilityFeatures() {
        // Enhanced accessibility features
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.classList.add('reduced-motion');
            
            const style = document.createElement('style');
            style.innerHTML = `
                .reduced-motion *,
                .reduced-motion *::before,
                .reduced-motion *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                    scroll-behavior: auto !important;
                }
            `;
            document.head.appendChild(style);
        }

        // Focus management
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('using-keyboard');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('using-keyboard');
        });
    }

    initAdvancedFeatures() {
        // Advanced features like service worker, offline detection, etc.
        this.initOfflineDetection();
        this.initPerformanceOptimizations();
        this.initAdvancedCaching();
    }

    initOfflineDetection() {
        window.addEventListener('online', () => {
            this.uiController.showNotification('Bağlantı yeniden kuruldu!', 'success');
        });

        window.addEventListener('offline', () => {
            this.uiController.showNotification('Bağlantı kesildi. Çevrimdışı modda çalışıyorsunuz.', 'info');
        });
    }

    initPerformanceOptimizations() {
        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    initAdvancedCaching() {
        // Advanced caching strategies
        if ('caches' in window) {
            // Cache key resources
            caches.open('portfolio-v1').then(cache => {
                cache.addAll([
                    '/',
                    '/script.js',
                    'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@200;300;400;500;600;700;800&display=swap'
                ]);
            });
        }
    }

    initEasterEggs() {
        // Enhanced easter eggs
        let clickCount = 0;
        document.addEventListener('click', () => {
            clickCount++;
            
            if (clickCount === 50) {
                this.activateEliteMode();
            } else if (clickCount === 100) {
                this.activateMatrixMode();
            }
        });

        // Konami code for developer mode
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
        let konamiIndex = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.code === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    this.activateDeveloperMode();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
    }

    activateEliteMode() {
        console.log('🔥 Elite Mode Activated!');
        document.body.style.filter = 'hue-rotate(180deg) saturate(1.2)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 5000);
        
        this.uiController.showNotification('🔥 Elite Mode Activated!', 'success');
    }

    activateMatrixMode() {
        console.log('🎯 Matrix Mode Activated!');
        // Matrix rain effect would go here
        this.uiController.showNotification('🎯 Matrix Mode Activated!', 'success');
    }

    activateDeveloperMode() {
        console.log('👨‍💻 Developer Mode Activated!');
        
        // Show performance metrics overlay
        const metricsOverlay = document.createElement('div');
        metricsOverlay.className = 'fixed bottom-4 left-4 bg-black/90 text-red-400 p-4 rounded-lg font-mono text-sm z-50 border border-red-500';
        metricsOverlay.innerHTML = `
            <h4 class="text-red-300 font-bold mb-2">Elite Performance Metrics</h4>
            <div>🖥️ FPS: <span id="fps-display">--</span></div>
            <div>💾 Memory: <span id="memory-display">--</span> MB</div>
            <div>⚡ Load Time: ${this.performanceMonitor.metrics.loadTime}ms</div>
            <div>🎯 Status: Elite</div>
            <button onclick="this.parentElement.remove()" class="mt-2 text-xs text-red-300 hover:text-red-100">Close</button>
        `;
        document.body.appendChild(metricsOverlay);

        // Update metrics display
        const updateMetrics = () => {
            const fpsDisplay = document.getElementById('fps-display');
            const memoryDisplay = document.getElementById('memory-display');
            if (fpsDisplay) fpsDisplay.textContent = this.performanceMonitor.metrics.fps;
            if (memoryDisplay) memoryDisplay.textContent = this.performanceMonitor.metrics.memory;
        };

        setInterval(updateMetrics, 1000);
        this.uiController.showNotification('👨‍💻 Developer Mode Activated!', 'success');
    }

    loadUserPreferences() {
        // Load saved language preference
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && translations[savedLang]) {
            const langBtn = document.querySelector(`[data-lang="${savedLang}"]`);
            if (langBtn) {
                // Tıklama event'i tetiklendi
                langBtn.click();
            }
        }
    }
}

// Console developer tools
window.portfolioDev = {
    stats: () => window.portfolio.performanceMonitor.metrics,
    particles: () => window.portfolio.animationEngine.particles,
    performance: () => ({
        fps: window.portfolio.performanceMonitor.metrics.fps,
        memory: window.portfolio.performanceMonitor.metrics.memory,
        loadTime: window.portfolio.performanceMonitor.metrics.loadTime
    }),
    theme: (mode) => console.log(`Advanced theme switching: ${mode}`),
    reset: () => location.reload(),
    about: () => console.log('Elite Professional Portfolio by Berat Aktaş - Senior Developer\n🔥 Built with passion and precision')
};

// Initialize the enhanced portfolio application
window.portfolio = new Portfolio();

// Performance optimization and preloading
window.addEventListener('load', () => {
    // Preload critical resources
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap'
    ];

    criticalResources.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        link.as = 'style';
        document.head.appendChild(link);
    });

    // Advanced service worker registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('🔧 Service Worker registered'))
            .catch(() => console.log('Service Worker not available'));
    }
});