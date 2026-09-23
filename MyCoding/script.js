// Scroll Reveal Animation Observer
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.10
    });

    revealElements.forEach(element => {
        scrollObserver.observe(element);
    });
});

// Typing Effect with Services
const words = ["🚀 Web Developer", "📊 Data Entry Specialist", "📝 MS Word Expert & Coder"];
let i = 0;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typingEffect').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        setTimeout(loopTyping, 80);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typingEffect').innerHTML = word.join("");
        } else {
            i = (i + 1) % words.length;
            setTimeout(typingEffect, 400);
            return false;
        }
        setTimeout(loopDeleting, 40);
    };
    loopDeleting();
}
typingEffect();

// Theme Toggle Function
function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('themeToggleBtn');
    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        btn.innerHTML = '☀️';
    } else {
        html.setAttribute('data-theme', 'dark');
        btn.innerHTML = '🌙';
    }
}

// Enhanced Data Entry Modal with Professional Trust Indicators
function openDataEntryModal() {
    const content = `
        <h3>📊 ProData Manager & Entry Suite</h3>
        <p>Yahan professional MS Excel spreadsheet aur high-accuracy data sorting ka live sample diya gaya hai:</p>
        
        <div class="trust-badge-box">
            ✅ 100% Accuracy Guaranteed | Fast Turnaround | CCA & DCA Verified
        </div>

        <table class="excel-table">
            <tr>
                <th>ID</th>
                <th>Client Name</th>
                <th>Task Type</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>101</td>
                <td>Rahul Sharma</td>
                <td>Excel Sheet Formatting</td>
                <td>✅ Completed</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Pooja Verma</td>
                <td>Data Cleaning & Entry</td>
                <td>✅ Completed</td>
            </tr>
            <tr>
                <td>103</td>
                <td>Amit Kumar</td>
                <td>PDF to Excel Typing</td>
                <td>✅ Completed</td>
            </tr>
        </table>
        <p style="font-size: 12px; margin-bottom: 12px;">💡 <b>Expertise:</b> Large database sorting, formula calculation, and error-free typing.</p>
        <a href="https://wa.me/919243266485?text=Hello%20Aditya,%20I%20want%20to%20give%20you%20Data%20Entry%20work!" target="_blank" class="modal-btn">💬 Hire for Data Entry on WhatsApp</a>
    `;
    document.getElementById('modalBodyContent').innerHTML = content;
    document.getElementById('projectModal').style.display = 'flex';
}

// Enhanced MS Word Modal with Professional Trust Indicators
function openWordModal() {
    const content = `
        <h3>📝 ProDoc Word Suite</h3>
        <p>Yahan professional MS Word documentation aur official report formatting ka sample preview hai:</p>
        
        <div class="trust-badge-box">
            ✅ Professional Typography | Clean Margins & Layouts
        </div>

        <div class="word-doc-preview">
            <b>SUBJECT: Professional Business Report & Documentation</b><br><br>
            1. Clean typography and structured paragraph layout.<br>
            2. Proper margin, heading hierarchy, and bullet formatting.<br>
            3. Suitable for official letters, assignments, resumes, and project documentation.
        </div>
        <p style="font-size: 12px; margin-bottom: 12px;">💡 <b>CCA & DCA Certified:</b> Flawless typing speed with zero spelling errors.</p>
        <a href="https://wa.me/919243266485?text=Hello%20Aditya,%20I%20want%20MS%20Word%20documentation%20work!" target="_blank" class="modal-btn">💬 Hire for Word Work on WhatsApp</a>
    `;
    document.getElementById('modalBodyContent').innerHTML = content;
    document.getElementById('projectModal').style.display, document.getElementById('projectModal').style.display = 'flex';
}

// Open Normal Web Project Modal
function openWebModal(title, desc, link) {
    const content = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <a href="${link}" target="_blank" class="modal-btn">Visit Live Website &rarr;</a>
    `;
    document.getElementById('modalBodyContent').innerHTML = content;
    document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

function closeModalOutside(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
}
