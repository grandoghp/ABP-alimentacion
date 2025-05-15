// Archivo para integrar las calculadoras con la base de datos
// Este archivo conecta las calculadoras de IMC y calorías con las funciones de almacenamiento

document.addEventListener('DOMContentLoaded', () => {
    // Verificar si la base de datos está lista
    if (window.bodyRunDB) {
        initCalculadoras();
    } else {
        // Esperar a que la base de datos esté lista
        document.addEventListener('db-ready', initCalculadoras);
    }
});

// Inicializar las calculadoras y conectarlas con la base de datos
function initCalculadoras() {
    // Calculadora de IMC
    const calculateBmiButton = document.getElementById('calculateBmi');
    if (calculateBmiButton) {
        const originalClickHandler = calculateBmiButton.onclick;
        
        calculateBmiButton.onclick = function() {
            // Ejecutar el cálculo original de IMC si existe
            if (typeof originalClickHandler === 'function') {
                originalClickHandler.call(this);
            } else {
                // Si no hay manejador original, realizar el cálculo básico
                const weight = parseFloat(document.getElementById('weight').value);
                const height = parseFloat(document.getElementById('height').value);
                
                if (isNaN(weight) || isNaN(height) || height === 0) {
                    document.getElementById('result').textContent = 'Por favor, ingresa valores válidos.';
                    return;
                }
                
                const bmi = weight / (height * height);
                let estado = '';
                
                if (bmi < 18.5) {
                    estado = 'Bajo peso';
                } else if (bmi < 25) {
                    estado = 'Peso normal';
                } else if (bmi < 30) {
                    estado = 'Sobrepeso';
                } else {
                    estado = 'Obesidad';
                }
                
                document.getElementById('result').innerHTML = `Tu IMC es: <strong>${bmi.toFixed(2)}</strong> - ${estado}`;
            }
            
            // Añadir botón para guardar el resultado en la base de datos
            const resultElement = document.getElementById('result');
            if (resultElement && resultElement.textContent.includes('IMC')) {
                // Extraer los valores calculados
                const weight = parseFloat(document.getElementById('weight').value);
                const height = parseFloat(document.getElementById('height').value);
                const bmiMatch = resultElement.textContent.match(/IMC es: ([0-9.]+)/);
                const estadoMatch = resultElement.textContent.match(/- (.+)$/);
                
                if (bmiMatch && estadoMatch) {
                    const bmi = parseFloat(bmiMatch[1]);
                    const estado = estadoMatch[1].trim();
                    
                    // Verificar si ya existe el botón para evitar duplicados
                    if (!document.getElementById('saveImcButton')) {
                        const saveButton = document.createElement('button');
                        saveButton.id = 'saveImcButton';
                        saveButton.className = 'btn btn-success mt-3';
                        saveButton.textContent = 'Guardar resultado';
                        saveButton.onclick = async function() {
                            try {
                                const resultado = await guardarRegistroIMC(weight, height, bmi, estado);
                                if (resultado) {
                                    alert('Resultado guardado correctamente');
                                    this.disabled = true;
                                    this.textContent = 'Guardado ✓';
                                }
                            } catch (error) {
                                alert('Error al guardar: ' + error);
                            }
                        };
                        
                        resultElement.parentNode.insertBefore(saveButton, resultElement.nextSibling);
                    }
                }
            }
        };
    }
    
    // Calculadora de déficit calórico
    const calculateDeficitButton = document.getElementById('calculateDeficit');
    if (calculateDeficitButton) {
        const originalClickHandler = calculateDeficitButton.onclick;
        
        calculateDeficitButton.onclick = function() {
            // Ejecutar el cálculo original si existe
            if (typeof originalClickHandler === 'function') {
                originalClickHandler.call(this);
            }
            
            // Añadir botón para guardar el resultado
            const resultElement = document.getElementById('deficitResult');
            if (resultElement && resultElement.textContent.includes('calorías')) {
                // Extraer los valores calculados
                const calorias = parseFloat(resultElement.textContent.match(/([0-9.]+)\s*calorías/)[1]);
                
                // Verificar si ya existe el botón para evitar duplicados
                if (!document.getElementById('saveDeficitButton')) {
                    const saveButton = document.createElement('button');
                    saveButton.id = 'saveDeficitButton';
                    saveButton.className = 'btn btn-success mt-3';
                    saveButton.textContent = 'Guardar resultado';
                    saveButton.onclick = async function() {
                        try {
                            const resultado = await guardarRegistroCalorias('deficit', calorias, {
                                peso: document.getElementById('deficitWeight').value,
                                altura: document.getElementById('deficitHeight').value,
                                edad: document.getElementById('deficitAge').value,
                                genero: document.querySelector('input[name="deficitGender"]:checked').value,
                                actividad: document.getElementById('deficitActivity').value
                            });
                            
                            if (resultado) {
                                alert('Resultado guardado correctamente');
                                this.disabled = true;
                                this.textContent = 'Guardado ✓';
                            }
                        } catch (error) {
                            alert('Error al guardar: ' + error);
                        }
                    };
                    
                    resultElement.parentNode.insertBefore(saveButton, resultElement.nextSibling);
                }
            }
        };
    }
    
    // Calculadora de superávit calórico
    const calculateSurplusButton = document.getElementById('calculateSurplus');
    if (calculateSurplusButton) {
        const originalClickHandler = calculateSurplusButton.onclick;
        
        calculateSurplusButton.onclick = function() {
            // Ejecutar el cálculo original si existe
            if (typeof originalClickHandler === 'function') {
                originalClickHandler.call(this);
            }
            
            // Añadir botón para guardar el resultado
            const resultElement = document.getElementById('surplusResult');
            if (resultElement && resultElement.textContent.includes('calorías')) {
                // Extraer los valores calculados
                const calorias = parseFloat(resultElement.textContent.match(/([0-9.]+)\s*calorías/)[1]);
                
                // Verificar si ya existe el botón para evitar duplicados
                if (!document.getElementById('saveSurplusButton')) {
                    const saveButton = document.createElement('button');
                    saveButton.id = 'saveSurplusButton';
                    saveButton.className = 'btn btn-success mt-3';
                    saveButton.textContent = 'Guardar resultado';
                    saveButton.onclick = async function() {
                        try {
                            const resultado = await guardarRegistroCalorias('superavit', calorias, {
                                peso: document.getElementById('surplusWeight').value,
                                altura: document.getElementById('surplusHeight').value,
                                edad: document.getElementById('surplusAge').value,
                                genero: document.querySelector('input[name="surplusGender"]:checked').value,
                                actividad: document.getElementById('surplusActivity').value
                            });
                            
                            if (resultado) {
                                alert('Resultado guardado correctamente');
                                this.disabled = true;
                                this.textContent = 'Guardado ✓';
                            }
                        } catch (error) {
                            alert('Error al guardar: ' + error);
                        }
                    };
                    
                    resultElement.parentNode.insertBefore(saveButton, resultElement.nextSibling);
                }
            }
        };
    }
    
    // Calculadora de mantenimiento calórico
    const calculateMaintenanceButton = document.getElementById('calculateMaintenance');
    if (calculateMaintenanceButton) {
        const originalClickHandler = calculateMaintenanceButton.onclick;
        
        calculateMaintenanceButton.onclick = function() {
            // Ejecutar el cálculo original si existe
            if (typeof originalClickHandler === 'function') {
                originalClickHandler.call(this);
            }
            
            // Añadir botón para guardar el resultado
            const resultElement = document.getElementById('maintenanceResult');
            if (resultElement && resultElement.textContent.includes('calorías')) {
                // Extraer los valores calculados
                const calorias = parseFloat(resultElement.textContent.match(/([0-9.]+)\s*calorías/)[1]);
                
                // Verificar si ya existe el botón para evitar duplicados
                if (!document.getElementById('saveMaintenanceButton')) {
                    const saveButton = document.createElement('button');
                    saveButton.id = 'saveMaintenanceButton';
                    saveButton.className = 'btn btn-success mt-3';
                    saveButton.textContent = 'Guardar resultado';
                    saveButton.onclick = async function() {
                        try {
                            const resultado = await guardarRegistroCalorias('mantenimiento', calorias, {
                                peso: document.getElementById('maintenanceWeight').value,
                                altura: document.getElementById('maintenanceHeight').value,
                                edad: document.getElementById('maintenanceAge').value,
                                genero: document.querySelector('input[name="maintenanceGender"]:checked').value,
                                actividad: document.getElementById('maintenanceActivity').value
                            });
                            
                            if (resultado) {
                                alert('Resultado guardado correctamente');
                                this.disabled = true;
                                this.textContent = 'Guardado ✓';
                            }
                        } catch (error) {
                            alert('Error al guardar: ' + error);
                        }
                    };
                    
                    resultElement.parentNode.insertBefore(saveButton, resultElement.nextSibling);
                }
            }
        };
    }
}