// ===== VARIABLES GLOBALES =====
let uploadedImage = null;
let currentLevel = null;

// ===== ELEMENTOS DEL DOM =====
const imageUpload = document.getElementById('imageUpload');
const uploadArea = document.getElementById('uploadArea');
const imagePreview = document.getElementById('imagePreview');
const analysisOptions = document.getElementById('analysisOptions');
const results = document.getElementById('results');
const adviceContainer = document.getElementById('adviceContainer');

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeImageUpload();
    initializeLevelSelector();
    initializeAnalysisOptions();
    initializeChecklist();
    showRandomTip();
});

// ===== SISTEMA DE TABS =====
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // Remover active de todos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Activar el seleccionado
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // Scroll suave al inicio
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ===== SELECTOR DE NIVEL =====
function initializeLevelSelector() {
    const levelBtns = document.querySelectorAll('.level-btn');

    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.dataset.level;
            currentLevel = level;

            // Actualizar UI
            levelBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Mostrar consejos del nivel
            showLevelAdvice(level);
        });
    });
}

function showLevelAdvice(level) {
    const advice = levelAdvice[level];
    const adviceDiv = document.getElementById('levelAdvice');

    let html = `
        <h3>${advice.icon} ${advice.title}</h3>
        <ul style="margin-top: 15px; line-height: 1.8;">
    `;

    advice.tips.forEach(tip => {
        html += `<li>${tip}</li>`;
    });

    html += `</ul>`;

    adviceDiv.innerHTML = html;
    adviceDiv.classList.remove('hidden');
    adviceDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== MANEJO DE IMÁGENES =====
function initializeImageUpload() {
    imageUpload.addEventListener('change', handleImageUpload);
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('drop', handleDrop);
    uploadArea.addEventListener('click', () => imageUpload.click());
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        displayImage(file);
    }
}

function handleDragOver(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#764ba2';
    uploadArea.style.background = '#f0f2ff';
}

function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        displayImage(file);
    }
    uploadArea.style.borderColor = '#667eea';
    uploadArea.style.background = '#f8f9ff';
}

function displayImage(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedImage = e.target.result;
        imagePreview.innerHTML = `
            <img src="${uploadedImage}" alt="Ciudad de SimCity BuildIt">
            <p style="margin-top: 15px; color: #667eea; font-weight: bold;">
                ✅ Imagen cargada correctamente - Ahora selecciona qué quieres analizar abajo
            </p>
        `;
        imagePreview.classList.remove('hidden');
        
        // Scroll suave a las opciones
        setTimeout(() => {
            analysisOptions.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    };
    reader.readAsDataURL(file);
}

// ===== OPCIONES DE ANÁLISIS =====
function initializeAnalysisOptions() {
    const optionBtns = document.querySelectorAll('.option-btn');

    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            showAdvice(category);
        });
    });
}

function showAdvice(category) {
    const advice = adviceDatabase[category];
    
    let html = `
        <div class="advice-card">
            <h3>
                <span>${advice.icon}</span>
                <span>${advice.title}</span>
                <span class="priority ${advice.priority}">
                    ${advice.priority === 'high' ? 'Alta Prioridad' : 
                      advice.priority === 'medium' ? 'Prioridad Media' : 'Recomendado'}
                </span>
            </h3>
            <ul>
    `;

    advice.tips.forEach(tip => {
        html += `<li>${tip}</li>`;
    });

    html += `
            </ul>
        </div>
    `;

    // Si hay imagen, agregar análisis personalizado
    if (uploadedImage) {
        html += `
            <div class="advice-card" style="border-left-color: #6bcf7f;">
                <h3>
                    <span>📸</span>
                    <span>Análisis de tu Imagen</span>
                </h3>
                <p style="color: #666; margin-bottom: 10px;">
                    Basado en la imagen de tu ciudad, aquí hay consejos adicionales:
                </p>
                <ul>
                    <li>Revisa que todos los edificios visibles tengan cobertura de servicios</li>
                    <li>Identifica áreas donde puedas añadir más espacios verdes</li>
                    <li>Busca oportunidades para crear edificios épicos en zonas estratégicas</li>
                    <li>Evalúa si tu distribución de carreteras permite buen flujo de tráfico</li>
                </ul>
            </div>
        `;
    }

    // Agregar tip aleatorio
    const randomTip = quickTips[Math.floor(Math.random() * quickTips.length)];
    html += `
        <div class="advice-card" style="background: linear-gradient(135deg, #fff9c4 0%, #fff 100%); border-left-color: #ffd93d;">
            <h3>
                <span>💡</span>
                <span>Tip Aleatorio</span>
            </h3>
            <p style="font-size: 1.1em; color: #555;">${randomTip}</p>
        </div>
    `;

    adviceContainer.innerHTML = html;
    results.classList.remove('hidden');
    results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== CHECKLIST =====
function initializeChecklist() {
    // Cargar estado guardado
    loadChecklistState();

    // Event listeners para checkboxes
    const checkboxes = document.querySelectorAll('.task-check');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', saveChecklistState);
    });
}

function saveChecklistState() {
    const checkboxes = document.querySelectorAll('.task-check');
    const state = {};

    checkboxes.forEach(checkbox => {
        state[checkbox.dataset.task] = checkbox.checked;
    });

    localStorage.setItem('simcity-checklist', JSON.stringify(state));
}

function loadChecklistState() {
    const savedState = localStorage.getItem('simcity-checklist');
    
    if (savedState) {
        const state = JSON.parse(savedState);
        
        Object.keys(state).forEach(taskId => {
            const checkbox = document.querySelector(`[data-task="${taskId}"]`);
            if (checkbox) {
                checkbox.checked = state[taskId];
            }
        });
    }
}

function resetChecklist() {
    if (confirm('¿Estás seguro de que quieres resetear todo el checklist?')) {
        const checkboxes = document.querySelectorAll('.task-check');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        localStorage.removeItem('simcity-checklist');
        alert('✅ Checklist reseteado correctamente');
    }
}

// ===== TIP ALEATORIO AL CARGAR =====
function showRandomTip() {
    const randomTip = quickTips[Math.floor(Math.random() * quickTips.length)];
    console.log(`%c${randomTip}`, 'color: #667eea; font-size: 14px; font-weight: bold;');
}

// ===== ANIMACIONES AL SCROLL =====
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.advice-card, .calc-card, .guide-card');
    
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

// ===== ATAJOS DE TECLADO =====
document.addEventListener('keydown', (e) => {
    // Alt + 1, 2, 3, 4 para cambiar tabs
    if (e.altKey && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const tabs = ['analyzer', 'calculator', 'guides', 'checklist'];
        const tabIndex = parseInt(e.key) - 1;
        const targetTab = tabs[tabIndex];
        
        document.querySelector(`[data-tab="${targetTab}"]`).click();
    }
});

console.log('%c🏙️ SimCity BuildIt Asesor PRO v2.0', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c💡 Presiona Alt+1,2,3,4 para cambiar entre tabs', 'color: #764ba2; font-size: 12px;');