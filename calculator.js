// ===== CALCULADORA DE POBLACIÓN =====

function calculatePopulation() {
    const basic = parseInt(document.getElementById('basicBuildings').value) || 0;
    const premium = parseInt(document.getElementById('premiumBuildings').value) || 0;
    const epic = parseInt(document.getElementById('epicBuildings').value) || 0;

    // Cálculos
    const basicPop = basic * 15; // Promedio 15 por edificio básico
    const premiumPop = premium * 30; // Promedio 30 por edificio premium
    const epicPop = epic * 75; // Promedio 75 por edificio épico

    const totalPop = basicPop + premiumPop + epicPop;
    const estimatedTax = (basic * 150) + (premium * 300) + (epic * 800);

    const resultDiv = document.getElementById('populationResult');
    resultDiv.innerHTML = `
        <h4>📊 Resultados:</h4>
        <div class="result-item">
            <strong>Población Total:</strong> ${totalPop.toLocaleString()} habitantes
        </div>
        <div class="result-item">
            <strong>Población de Básicos:</strong> ${basicPop.toLocaleString()}
        </div>
        <div class="result-item">
            <strong>Población de Premium:</strong> ${premiumPop.toLocaleString()}
        </div>
        <div class="result-item">
            <strong>Población de Épicos:</strong> ${epicPop.toLocaleString()}
        </div>
        <hr style="margin: 15px 0; border: none; border-top: 1px solid #e0e0e0;">
        <div class="result-item" style="color: #6bcf7f; font-size: 1.2em;">
            <strong>💰 Impuestos Estimados/día:</strong> §${estimatedTax.toLocaleString()}
        </div>
        <div class="result-tip">
            💡 Tip: Los edificios épicos generan 5x más impuestos que los básicos
        </div>
    `;
    resultDiv.style.display = 'block';
}

// ===== CALCULADORA DE SERVICIOS =====

function calculateServices() {
    const citySize = parseInt(document.getElementById('citySize').value) || 10;
    const serviceType = document.getElementById('serviceType').value;

    const coverageData = {
        fire: { coverage: 16, cost: 1500, name: 'Estación de Bomberos' },
        police: { coverage: 16, cost: 1500, name: 'Estación de Policía' },
        health: { coverage: 25, cost: 2000, name: 'Centro de Salud' },
        park: { coverage: 4, cost: 500, name: 'Parque' }
    };

    const service = coverageData[serviceType];
    const cityArea = citySize * citySize;
    const servicesNeeded = Math.ceil(cityArea / service.coverage);
    const totalCost = servicesNeeded * service.cost;

    const resultDiv = document.getElementById('servicesResult');
    resultDiv.innerHTML = `
        <h4>🏗️ Planificación de ${service.name}</h4>
        <div class="result-item">
            <strong>Área de tu ciudad:</strong> ${cityArea} casillas
        </div>
        <div class="result-item">
            <strong>Cobertura por edificio:</strong> ${service.coverage} casillas
        </div>
        <div class="result-item" style="color: #667eea; font-size: 1.2em;">
            <strong>🏢 Edificios necesarios:</strong> ${servicesNeeded}
        </div>
        <div class="result-item">
            <strong>💰 Costo total:</strong> §${totalCost.toLocaleString()}
        </div>
        <div class="result-tip">
            💡 Tip: Distribuye los servicios uniformemente para máxima cobertura
        </div>
        <div class="result-tip">
            ⚡ Mejora a versiones élite para +50% de cobertura
        </div>
    `;
    resultDiv.style.display = 'block';
}

// ===== CALCULADORA DE PRODUCCIÓN =====

function calculateProduction() {
    const factoryType = document.getElementById('factoryType').value;
    const hours = parseInt(document.getElementById('productionHours').value) || 24;

    const factoryData = {
        basic: { slots: 2, name: 'Básica', timePerItem: 30 },
        expanded: { slots: 3, name: 'Expandida', timePerItem: 30 },
        full: { slots: 5, name: 'Completa', timePerItem: 30 }
    };

    const factory = factoryData[factoryType];
    const cyclesPerHour = 60 / factory.timePerItem;
    const itemsPerHour = factory.slots * cyclesPerHour;
    const totalItems = itemsPerHour * hours;

    // Estimación de valor (promedio §50 por item)
    const estimatedValue = totalItems * 50;

    const resultDiv = document.getElementById('productionResult');
    resultDiv.innerHTML = `
        <h4>🏭 Producción de Fábrica ${factory.name}</h4>
        <div class="result-item">
            <strong>Slots disponibles:</strong> ${factory.slots}
        </div>
        <div class="result-item">
            <strong>Items por hora:</strong> ${itemsPerHour}
        </div>
        <div class="result-item" style="color: #667eea; font-size: 1.2em;">
            <strong>📦 Total en ${hours}h:</strong> ${totalItems} items
        </div>
        <div class="result-item">
            <strong>💰 Valor estimado:</strong> §${estimatedValue.toLocaleString()}
        </div>
        <div class="result-tip">
            💡 Tip: Produce items de alta demanda como cemento, ladrillos y textiles
        </div>
        <div class="result-tip">
            ⏰ Optimiza: Inicia producción larga antes de dormir (8h)
        </div>
    `;
    resultDiv.style.display = 'block';
}

// ===== CALCULADORA DE EXPANSIÓN =====

function calculateExpansion() {
    const expansionNumber = parseInt(document.getElementById('expansionNumber').value) || 1;

    const baseCost = 3000;
    const multiplier = 1.15;

    // Calcular costo de esta expansión y las siguientes 5
    let results = [];
    let totalCost = 0;

    for (let i = 0; i < 5; i++) {
        const cost = Math.floor(baseCost * Math.pow(multiplier, (expansionNumber + i - 1)));
        totalCost += cost;
        results.push({
            number: expansionNumber + i,
            cost: cost
        });
    }

    let resultHTML = `
        <h4>🌍 Costos de Expansión</h4>
        <div class="expansion-list">
    `;

    results.forEach((item, index) => {
        resultHTML += `
            <div class="result-item ${index === 0 ? 'highlight' : ''}">
                <strong>Expansión #${item.number}:</strong> §${item.cost.toLocaleString()}
            </div>
        `;
    });

    resultHTML += `
        </div>
        <hr style="margin: 15px 0; border: none; border-top: 1px solid #e0e0e0;">
        <div class="result-item" style="color: #667eea; font-size: 1.2em;">
            <strong>💰 Costo total (próximas 5):</strong> §${totalCost.toLocaleString()}
        </div>
        <div class="result-tip">
            💡 Tip: Guarda items de expansión en lugar de comprarlos con simoleones
        </div>
        <div class="result-tip">
            🎯 Completa misiones de expansión para obtener items gratis
        </div>
    `;

    const resultDiv = document.getElementById('expansionResult');
    resultDiv.innerHTML = resultHTML;
    resultDiv.style.display = 'block';
}

// ===== FUNCIÓN HELPER PARA FORMATO =====

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}