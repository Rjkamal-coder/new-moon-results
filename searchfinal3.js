/**
 * ============================================
 * NEW MOON Community High School
 * Result Search & Display Logic
 * ============================================
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');
    const searchForm = document.getElementById('searchForm');
    const resultSection = document.getElementById('resultSection');
    const resultContainer = document.getElementById('resultContainer');

    // Form Fields
    const rollInput = document.getElementById('rollNumber');
    const regInput = document.getElementById('regNumber');
    const gradeSelect = document.getElementById('grade');
    const yearSelect = document.getElementById('academicYear');

    // Error Elements
    const rollError = document.getElementById('rollError');
    const regError = document.getElementById('regError');
    const gradeError = document.getElementById('gradeError');
    const yearError = document.getElementById('yearError');

    // Mobile Menu Toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });

    // Form Submit Handler
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleSearch();
    });

    /**
     * Main Search Handler
     * Validates inputs, searches student, and renders result
     */
    function handleSearch() {
        // Clear previous errors and results
        clearErrors();
        resultContainer.innerHTML = '';
        resultSection.classList.remove('active');

        // Get and sanitize values
        const roll = rollInput.value.trim();
        const reg = regInput.value.trim();
        const grade = gradeSelect.value;
        const year = yearSelect.value;

        // Validate inputs
        let isValid = true;

        if (!roll) {
            showError(rollError, 'Please enter your roll number.');
            isValid = false;
        }

        if (!reg) {
            showError(regError, 'Please enter your registration number.');
            isValid = false;
        }

        if (!grade) {
            showError(gradeError, 'Please select your grade.');
            isValid = false;
        }

        if (!year) {
            showError(yearError, 'Please select an Academic Year.');
            isValid = false;
        }

        if (!isValid) return;

        // Search for student
        const student = findStudent(roll, reg, grade, year);

        if (student) {
            renderResult(student);
        } else {
            renderNotFound();
        }
    }

    /**
     * Search Logic
     * Matches Roll Number OR Registration Number
     * AND matches Grade AND Academic Year
     */
    function findStudent(roll, reg, grade, year) {
        return students.find(s => {
            const rollMatch = s.roll === roll;
            const regMatch = s.registration === reg;
            const gradeMatch = s.grade === grade;
            const yearMatch = s.academicYear === year;

            // Must match (roll OR reg) AND grade AND year
            return rollMatch && regMatch && gradeMatch && yearMatch;
        });
    }

    /**
     * Render Student Result
     */
    function renderResult(student) {
        const distinctions = calculateDistinctions(student.marks);
        const totalMarks = calculateTotal(student.marks);
        const averageMarks = calculateAverage(student.marks);

        const html = `
            <div class="result-card" id="resultCard">
                <!-- Header -->
                <div class="result-header">
                    <div class="result-header-content">
                        <div class="result-school-name">NEW MOON Basic Education High School</div>
                        <div class="result-school-sub">Online Result Checking Portal</div>
                        <div class="result-header-badge">Academic Year ${escapeHtml(student.academicYear)}</div>
                    </div>
                </div>

                <!-- Student Profile -->
                <div class="result-profile">
                    <div class="student-photo-wrapper">
                        ${renderPhoto(student.photo, student.name)}
                    </div>
                    <div class="student-name">${escapeHtml(student.name)}</div>
                    <div class="student-meta-grid">
                        <div class="meta-item">
                            <div class="meta-label">Roll Number</div>
                            <div class="meta-value">${escapeHtml(student.roll)}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">Registration</div>
                            <div class="meta-value">${escapeHtml(student.registration)}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">Grade</div>
                            <div class="meta-value">${escapeHtml(student.grade)}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">Academic Year</div>
                            <div class="meta-value">${escapeHtml(student.academicYear)}</div>
                        </div>
                    </div>
                </div>

                <!-- Marks Table -->
                <div class="result-body">
                    <h3 class="section-title">
                        <i class="fas fa-table"></i>
                        Subject Marks
                    </h3>
                    <div class="marks-table-wrapper">
                        <table class="marks-table">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Marks</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${subjectsList.map((subject, index) => {
                                    const mark = student.marks[subject];
                                    const isDistinction = distinctions.includes(subject);
                                    return `
                                        <tr style="animation: fadeIn 0.4s ease-out ${index * 0.05}s backwards;">
                                            <td><strong>${escapeHtml(subject)}</strong></td>
                                            <td><span class="mark-value">${mark}</span></td>
                                            <td>
                                                ${isDistinction 
                                                    ? '<span style="color: var(--success); font-weight: 600;"><i class="fas fa-check-circle"></i> Distinction</span>' 
                                                    : '<span style="color: var(--text-muted);">—</span>'}
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>

                    <!-- Distinction List -->
                    <div class="distinction-section">
                        <h3 class="section-title">
                            <i class="fas fa-trophy"></i>
                            Distinction List
                        </h3>
                        ${distinctions.length > 0 
                            ? `<div class="distinction-badges">
                                ${distinctions.map(sub => `
                                    <span class="distinction-badge">
                                        <i class="fas fa-star"></i>
                                        ${escapeHtml(sub)}
                                    </span>
                                `).join('')}
                               </div>`
                            : '<p class="no-distinction">No distinction subjects</p>'
                        }
                    </div>

                    <!-- Summary -->
                    <h3 class="section-title">
                        <i class="fas fa-chart-pie"></i>
                        Result Summary
                    </h3>
                    <div class="summary-grid">
                        <div class="summary-card">
                            <div class="summary-icon"><i class="fas fa-calculator"></i></div>
                            <div class="summary-label">Total Marks</div>
                            <div class="summary-value">${totalMarks}</div>
                        </div>
                        <div class="summary-card accent">
                            <div class="summary-icon"><i class="fas fa-percentage"></i></div>
                            <div class="summary-label">Average Marks</div>
                            <div class="summary-value">${averageMarks}</div>
                        </div>
                        <div class="summary-card warning">
                            <div class="summary-icon"><i class="fas fa-book-open"></i></div>
                            <div class="summary-label">Total Subjects</div>
                            <div class="summary-value">6</div>
                        </div>
                    </div>
                </div>

                <!-- Actions -->
                <div class="result-actions">
                    <button class="action-btn btn-print" onclick="printResult()">
                        <i class="fas fa-print"></i>
                        Print Result
                    </button>
                    <button class="action-btn btn-download" onclick="downloadResult()">
                        <i class="fas fa-download"></i>
                        Download Result
                    </button>
                </div>
            </div>
        `;

        resultContainer.innerHTML = html;
        resultSection.classList.add('active');

        // Smooth scroll to result
        setTimeout(() => {
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    /**
     * Render Not Found Error
     */
    function renderNotFound() {
        const html = `
            <div class="error-card">
                <div class="error-icon">
                    <i class="fas fa-times"></i>
                </div>
                <h3 class="error-title">Result Not Found</h3>
                <p class="error-text">
                    No result was found for the information you entered.<br><br>
                    Please check your Roll Number, Registration Number,<br>
                    Grade, and Academic Year and try again.
                </p>
            </div>
        `;

        resultContainer.innerHTML = html;
        resultSection.classList.add('active');

        setTimeout(() => {
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    /**
     * Calculate Distinctions based on rules
     */
    function calculateDistinctions(marks) {
        const distinctions = [];
        for (const [subject, minMark] of Object.entries(distinctionRules)) {
            if (marks[subject] >= minMark) {
                distinctions.push(subject);
            }
        }
        return distinctions;
    }

    /**
     * Calculate Total Marks
     */
    function calculateTotal(marks) {
        return Object.values(marks).reduce((sum, mark) => sum + mark, 0);
    }

    /**
     * Calculate Average Marks (2 decimal places)
     */
    function calculateAverage(marks) {
        const total = calculateTotal(marks);
        const count = Object.keys(marks).length;
        return count > 0 ? (total / count).toFixed(2) : "0.00";
    }

    /**
     * Render Student Photo or Placeholder
     */
    function renderPhoto(photoPath, name) {
        if (photoPath && photoPath.trim() !== '') {
            return `<img src="${escapeHtml(photoPath)}" alt="${escapeHtml(name)}" class="student-photo" onerror="this.outerHTML='<div class=\\'student-photo-placeholder\\'>Student<br>Photo</div>'">`;
        }
        return `<div class="student-photo-placeholder">Student<br>Photo</div>`;
    }

    /**
     * Show Error Message
     */
    function showError(element, message) {
        element.textContent = message;
    }

    /**
     * Clear All Errors
     */
    function clearErrors() {
        rollError.textContent = '';
        regError.textContent = '';
        gradeError.textContent = '';
        yearError.textContent = '';
    }

    /**
     * Escape HTML to prevent XSS
     */
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});

/**
 * ============================================
 * Global Functions (attached to window)
 * ============================================
 */

/**
 * Print Result
 * Uses browser print with dedicated print CSS
 */
function printResult() {
    window.print();
}

/**
 * Download Result as PDF
 * Uses html2canvas + jsPDF for client-side PDF generation
 */
async function downloadResult() {
    const resultCard = document.getElementById('resultCard');
    if (!resultCard) return;

    const btn = document.querySelector('.btn-download');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    btn.disabled = true;

    try {
        // Wait for fonts and images to load
        await document.fonts.ready;

        // Capture the result card as canvas
        const canvas = await html2canvas(resultCard, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            windowWidth: resultCard.scrollWidth,
            windowHeight: resultCard.scrollHeight
        });

        const imgData = canvas.toDataURL('image/png');

        // Calculate PDF dimensions (A4 ratio)
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');

        let heightLeft = imgHeight;
        let position = 0;

        // Add first page
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add extra pages if content overflows
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // Download
        pdf.save('NEW-MOON-Result.pdf');

    } catch (error) {
        console.error('PDF generation failed:', error);
        alert('Failed to generate PDF. Please try printing instead.');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}
