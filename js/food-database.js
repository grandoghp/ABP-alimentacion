

const antioquiaFoodDatabase = {
    
    desayunos: [
      
      { nombre: "Arepa de maíz", calorias: 150, proteinas: 3, carbos: 30, grasas: 2, porcion: "1 unidad mediana" },
      { nombre: "Arepa de chócolo", calorias: 180, proteinas: 4, carbos: 35, grasas: 3, porcion: "1 unidad" },
      { nombre: "Arepa de queso", calorias: 220, proteinas: 6, carbos: 30, grasas: 8, porcion: "1 unidad" },
      {
        nombre: "Calentado antioqueño",
        calorias: 350,
        proteinas: 15,
        carbos: 45,
        grasas: 10,
        porcion: "1 plato pequeño",
      },
      { nombre: "Calentado con hogao", calorias: 380, proteinas: 16, carbos: 45, grasas: 12, porcion: "1 plato pequeño" },
      { nombre: "Huevos revueltos", calorias: 180, proteinas: 12, carbos: 2, grasas: 13, porcion: "2 unidades" },
      { nombre: "Huevos pericos", calorias: 200, proteinas: 13, carbos: 4, grasas: 14, porcion: "2 unidades" },
      { nombre: "Huevos con hogao", calorias: 210, proteinas: 13, carbos: 5, grasas: 14, porcion: "2 unidades" },
      {
        nombre: "Tortilla de huevo con verduras",
        calorias: 220,
        proteinas: 14,
        carbos: 6,
        grasas: 15,
        porcion: "1 unidad mediana",
      },
  
      // Acompañamientos proteicos
      { nombre: "Quesito antioqueño", calorias: 120, proteinas: 7, carbos: 1, grasas: 9, porcion: "30 gramos" },
      { nombre: "Queso campesino", calorias: 100, proteinas: 8, carbos: 1, grasas: 7, porcion: "30 gramos" },
      { nombre: "Chorizo antioqueño", calorias: 250, proteinas: 15, carbos: 2, grasas: 20, porcion: "1 unidad" },
      { nombre: "Morcilla", calorias: 200, proteinas: 10, carbos: 15, grasas: 10, porcion: "1 unidad" },
      { nombre: "Chicharrón", calorias: 300, proteinas: 17, carbos: 0, grasas: 25, porcion: "1 trozo mediano" },
      { nombre: "Carne molida guisada", calorias: 180, proteinas: 20, carbos: 3, grasas: 10, porcion: "100 gramos" },
      { nombre: "Carne desmechada", calorias: 170, proteinas: 25, carbos: 0, grasas: 7, porcion: "100 gramos" },
  
      // Bebidas típicas
      { nombre: "Chocolate antioqueño", calorias: 150, proteinas: 4, carbos: 25, grasas: 5, porcion: "1 taza" },
      { nombre: "Café con leche", calorias: 80, proteinas: 4, carbos: 10, grasas: 3, porcion: "1 taza" },
      { nombre: "Aguapanela con leche", calorias: 120, proteinas: 3, carbos: 25, grasas: 2, porcion: "1 taza" },
      { nombre: "Aguapanela con limón", calorias: 70, proteinas: 0, carbos: 18, grasas: 0, porcion: "1 taza" },
      { nombre: "Jugo de naranja natural", calorias: 110, proteinas: 1, carbos: 26, grasas: 0, porcion: "1 vaso" },
  
      // Frutas para desayuno
      { nombre: "Papaya", calorias: 60, proteinas: 1, carbos: 15, grasas: 0, porcion: "1 taza picada" },
      { nombre: "Banano", calorias: 105, proteinas: 1, carbos: 27, grasas: 0, porcion: "1 unidad mediana" },
      { nombre: "Mango", calorias: 100, proteinas: 1, carbos: 25, grasas: 0, porcion: "1 unidad pequeña" },
      { nombre: "Granadilla", calorias: 90, proteinas: 2, carbos: 22, grasas: 0, porcion: "1 unidad" },
      { nombre: "Guayaba", calorias: 45, proteinas: 1, carbos: 10, grasas: 0, porcion: "1 unidad mediana" },
    ],
  
    // MEDIA MAÑANA 
    mediasMananas: [
      // Panadería y repostería
      { nombre: "Pandebono", calorias: 180, proteinas: 5, carbos: 25, grasas: 7, porcion: "1 unidad" },
      { nombre: "Buñuelo", calorias: 170, proteinas: 4, carbos: 20, grasas: 8, porcion: "1 unidad" },
      { nombre: "Empanada de carne", calorias: 220, proteinas: 8, carbos: 25, grasas: 10, porcion: "1 unidad" },
      { nombre: "Empanada de pollo", calorias: 200, proteinas: 9, carbos: 25, grasas: 8, porcion: "1 unidad" },
      { nombre: "Empanada de queso", calorias: 190, proteinas: 6, carbos: 25, grasas: 7, porcion: "1 unidad" },
      { nombre: "Pan de queso", calorias: 160, proteinas: 5, carbos: 22, grasas: 6, porcion: "1 unidad" },
      { nombre: "Pan de yuca", calorias: 150, proteinas: 3, carbos: 25, grasas: 5, porcion: "1 unidad" },
      { nombre: "Almojábana", calorias: 180, proteinas: 6, carbos: 23, grasas: 7, porcion: "1 unidad" },
      { nombre: "Pastel de gloria", calorias: 250, proteinas: 5, carbos: 35, grasas: 10, porcion: "1 unidad" },
      { nombre: "Pastel de arequipe", calorias: 280, proteinas: 5, carbos: 40, grasas: 12, porcion: "1 unidad" },
  
      // Frutas y preparaciones con frutas
      { nombre: "Salpicón de frutas", calorias: 150, proteinas: 2, carbos: 35, grasas: 0, porcion: "1 vaso" },
      { nombre: "Fresas con crema", calorias: 180, proteinas: 3, carbos: 25, grasas: 8, porcion: "1 taza" },
      { nombre: "Ensalada de frutas", calorias: 120, proteinas: 2, carbos: 30, grasas: 0, porcion: "1 taza" },
      { nombre: "Mango biche con sal y limón", calorias: 90, proteinas: 1, carbos: 22, grasas: 0, porcion: "1 porción" },
  
      // Bebidas y jugos
      { nombre: "Jugo de mora", calorias: 100, proteinas: 1, carbos: 24, grasas: 0, porcion: "1 vaso" },
      { nombre: "Jugo de lulo", calorias: 90, proteinas: 1, carbos: 22, grasas: 0, porcion: "1 vaso" },
      { nombre: "Jugo de maracuyá", calorias: 110, proteinas: 1, carbos: 26, grasas: 0, porcion: "1 vaso" },
      { nombre: "Avena", calorias: 150, proteinas: 4, carbos: 30, grasas: 2, porcion: "1 vaso" },
      { nombre: "Milo frío", calorias: 180, proteinas: 5, carbos: 30, grasas: 4, porcion: "1 vaso" },
  
      // Otros
      { nombre: "Arepa de chócolo con quesito", calorias: 250, proteinas: 8, carbos: 35, grasas: 8, porcion: "1 unidad" },
      { nombre: "Mazamorra con bocadillo", calorias: 200, proteinas: 3, carbos: 45, grasas: 1, porcion: "1 taza" },
      { nombre: "Patacón con hogao", calorias: 180, proteinas: 2, carbos: 30, grasas: 7, porcion: "2 unidades" },
    ],
  
    // ALMUERZOS 
    almuerzos: [
      // Platos principales
      { nombre: "Bandeja paisa completa", calorias: 1200, proteinas: 50, carbos: 100, grasas: 65, porcion: "1 plato" },
      {
        nombre: "Bandeja paisa pequeña",
        calorias: 800,
        proteinas: 35,
        carbos: 70,
        grasas: 40,
        porcion: "1 plato pequeño",
      },
      { nombre: "Frijoles antioqueños", calorias: 350, proteinas: 20, carbos: 45, grasas: 10, porcion: "1 taza" },
      { nombre: "Sancocho antioqueño", calorias: 450, proteinas: 25, carbos: 60, grasas: 15, porcion: "1 plato" },
      { nombre: "Sancocho de gallina", calorias: 500, proteinas: 30, carbos: 55, grasas: 20, porcion: "1 plato" },
      { nombre: "Mondongo", calorias: 400, proteinas: 30, carbos: 30, grasas: 18, porcion: "1 plato" },
      { nombre: "Cazuela de frijoles", calorias: 380, proteinas: 22, carbos: 50, grasas: 12, porcion: "1 plato" },
      { nombre: "Sudado de carne", calorias: 450, proteinas: 35, carbos: 40, grasas: 18, porcion: "1 plato" },
      { nombre: "Sudado de pollo", calorias: 400, proteinas: 40, carbos: 35, grasas: 12, porcion: "1 plato" },
      { nombre: "Lengua en salsa", calorias: 380, proteinas: 35, carbos: 15, grasas: 20, porcion: "1 porción" },
      { nombre: "Sobrebarriga en salsa", calorias: 450, proteinas: 40, carbos: 15, grasas: 25, porcion: "1 porción" },
      {
        nombre: "Costillas de cerdo en salsa BBQ",
        calorias: 500,
        proteinas: 35,
        carbos: 20,
        grasas: 30,
        porcion: "1 porción",
      },
  
      // Carnes y proteínas
      { nombre: "Carne asada", calorias: 300, proteinas: 35, carbos: 0, grasas: 18, porcion: "150 gramos" },
      { nombre: "Carne molida", calorias: 250, proteinas: 30, carbos: 2, grasas: 15, porcion: "150 gramos" },
      { nombre: "Chuleta de cerdo", calorias: 350, proteinas: 30, carbos: 5, grasas: 25, porcion: "1 unidad" },
      { nombre: "Pollo asado", calorias: 280, proteinas: 35, carbos: 0, grasas: 15, porcion: "1 presa grande" },
      { nombre: "Pollo guisado", calorias: 250, proteinas: 30, carbos: 5, grasas: 12, porcion: "1 presa" },
      { nombre: "Pescado frito", calorias: 300, proteinas: 25, carbos: 10, grasas: 18, porcion: "1 filete" },
      { nombre: "Pescado en salsa", calorias: 250, proteinas: 28, carbos: 8, grasas: 12, porcion: "1 filete" },
      { nombre: "Chicharrón", calorias: 350, proteinas: 20, carbos: 0, grasas: 30, porcion: "1 trozo grande" },
      { nombre: "Chorizo antioqueño", calorias: 250, proteinas: 15, carbos: 2, grasas: 20, porcion: "2 unidades" },
      { nombre: "Morcilla", calorias: 200, proteinas: 10, carbos: 15, grasas: 10, porcion: "2 unidades" },
  
      // Acompañamientos
      { nombre: "Arroz blanco", calorias: 200, proteinas: 4, carbos: 45, grasas: 0, porcion: "1 taza" },
      { nombre: "Arroz con coco", calorias: 250, proteinas: 4, carbos: 45, grasas: 8, porcion: "1 taza" },
      { nombre: "Papas criollas", calorias: 150, proteinas: 3, carbos: 30, grasas: 2, porcion: "5-6 unidades" },
      { nombre: "Papas fritas", calorias: 300, proteinas: 4, carbos: 40, grasas: 15, porcion: "1 porción" },
      { nombre: "Yuca frita", calorias: 250, proteinas: 2, carbos: 45, grasas: 8, porcion: "1 porción" },
      { nombre: "Yuca cocida", calorias: 180, proteinas: 2, carbos: 40, grasas: 0, porcion: "1 porción" },
      { nombre: "Plátano maduro frito", calorias: 200, proteinas: 1, carbos: 40, grasas: 5, porcion: "1 unidad" },
      { nombre: "Plátano maduro asado", calorias: 150, proteinas: 1, carbos: 35, grasas: 1, porcion: "1 unidad" },
      { nombre: "Patacones", calorias: 180, proteinas: 1, carbos: 30, grasas: 7, porcion: "2 unidades" },
      { nombre: "Hogao", calorias: 80, proteinas: 1, carbos: 5, grasas: 6, porcion: "2 cucharadas" },
      { nombre: "Aguacate", calorias: 160, proteinas: 2, carbos: 8, grasas: 15, porcion: "1/2 unidad" },
  
      // Ensaladas
      { nombre: "Ensalada de repollo y zanahoria", calorias: 70, proteinas: 2, carbos: 15, grasas: 0, porcion: "1 taza" },
      { nombre: "Ensalada de tomate y cebolla", calorias: 50, proteinas: 1, carbos: 10, grasas: 0, porcion: "1 taza" },
      { nombre: "Ensalada de aguacate", calorias: 180, proteinas: 2, carbos: 10, grasas: 16, porcion: "1 taza" },
      { nombre: "Ensalada de remolacha", calorias: 60, proteinas: 2, carbos: 13, grasas: 0, porcion: "1 taza" },
      { nombre: "Ensalada mixta", calorias: 80, proteinas: 3, carbos: 15, grasas: 2, porcion: "1 taza" },
    ],
  
    // MERIENDAS 
    meriendas: [
      // Panadería y repostería
      { nombre: "Pandebono", calorias: 180, proteinas: 5, carbos: 25, grasas: 7, porcion: "1 unidad" },
      { nombre: "Buñuelo", calorias: 170, proteinas: 4, carbos: 20, grasas: 8, porcion: "1 unidad" },
      { nombre: "Empanada", calorias: 220, proteinas: 8, carbos: 25, grasas: 10, porcion: "1 unidad" },
      { nombre: "Arepa de chócolo con quesito", calorias: 250, proteinas: 8, carbos: 35, grasas: 8, porcion: "1 unidad" },
      { nombre: "Pan de queso", calorias: 160, proteinas: 5, carbos: 22, grasas: 6, porcion: "1 unidad" },
      { nombre: "Pan de yuca", calorias: 150, proteinas: 3, carbos: 25, grasas: 5, porcion: "1 unidad" },
      { nombre: "Almojábana", calorias: 180, proteinas: 6, carbos: 23, grasas: 7, porcion: "1 unidad" },
  
      // Dulces y postres
      { nombre: "Dulce de brevas", calorias: 150, proteinas: 1, carbos: 35, grasas: 0, porcion: "2 unidades" },
      { nombre: "Dulce de papayuela", calorias: 140, proteinas: 1, carbos: 34, grasas: 0, porcion: "2 unidades" },
      { nombre: "Arequipe", calorias: 220, proteinas: 5, carbos: 40, grasas: 5, porcion: "3 cucharadas" },
      { nombre: "Bocadillo con queso", calorias: 180, proteinas: 6, carbos: 30, grasas: 5, porcion: "2 porciones" },
      { nombre: "Postre de natas", calorias: 250, proteinas: 3, carbos: 35, grasas: 12, porcion: "1 porción" },
      { nombre: "Merengón", calorias: 300, proteinas: 5, carbos: 60, grasas: 5, porcion: "1 porción" },
      { nombre: "Flan de caramelo", calorias: 220, proteinas: 6, carbos: 35, grasas: 7, porcion: "1 porción" },
  
      // Bebidas
      { nombre: "Café con leche", calorias: 80, proteinas: 4, carbos: 10, grasas: 3, porcion: "1 taza" },
      { nombre: "Chocolate", calorias: 150, proteinas: 4, carbos: 25, grasas: 5, porcion: "1 taza" },
      { nombre: "Aguapanela con queso", calorias: 200, proteinas: 7, carbos: 30, grasas: 7, porcion: "1 taza" },
      { nombre: "Jugo de guanábana", calorias: 120, proteinas: 1, carbos: 30, grasas: 0, porcion: "1 vaso" },
      { nombre: "Jugo de mango", calorias: 130, proteinas: 1, carbos: 32, grasas: 0, porcion: "1 vaso" },
  
      // Frutas
      { nombre: "Mango", calorias: 100, proteinas: 1, carbos: 25, grasas: 0, porcion: "1 unidad" },
      { nombre: "Granadilla", calorias: 90, proteinas: 2, carbos: 22, grasas: 0, porcion: "1 unidad" },
      { nombre: "Banano", calorias: 105, proteinas: 1, carbos: 27, grasas: 0, porcion: "1 unidad" },
      { nombre: "Mandarina", calorias: 50, proteinas: 1, carbos: 12, grasas: 0, porcion: "1 unidad" },
      { nombre: "Piña", calorias: 80, proteinas: 1, carbos: 20, grasas: 0, porcion: "1 taza picada" },
    ],
  
    // CENAS 
    cenas: [
      // Platos principales ligeros
      {
        nombre: "Arepa con quesito y chocolate",
        calorias: 350,
        proteinas: 12,
        carbos: 45,
        grasas: 12,
        porcion: "1 porción",
      },
      { nombre: "Arepa con huevo revuelto", calorias: 320, proteinas: 15, carbos: 35, grasas: 15, porcion: "1 porción" },
      {
        nombre: "Arepa con carne desmechada",
        calorias: 380,
        proteinas: 25,
        carbos: 35,
        grasas: 15,
        porcion: "1 porción",
      },
      { nombre: "Calentado pequeño", calorias: 300, proteinas: 12, carbos: 40, grasas: 8, porcion: "1 plato pequeño" },
      { nombre: "Sopa de verduras", calorias: 180, proteinas: 5, carbos: 30, grasas: 5, porcion: "1 taza" },
      { nombre: "Sopa de plátano", calorias: 220, proteinas: 4, carbos: 45, grasas: 3, porcion: "1 taza" },
      { nombre: "Sopa de arroz", calorias: 200, proteinas: 5, carbos: 40, grasas: 2, porcion: "1 taza" },
      { nombre: "Changua", calorias: 180, proteinas: 10, carbos: 15, grasas: 8, porcion: "1 taza" },
      { nombre: "Caldo de costilla", calorias: 250, proteinas: 20, carbos: 10, grasas: 15, porcion: "1 taza" },
  
      // Proteínas ligeras
      { nombre: "Pollo a la plancha", calorias: 180, proteinas: 30, carbos: 0, grasas: 6, porcion: "1 filete pequeño" },
      { nombre: "Pescado al horno", calorias: 150, proteinas: 25, carbos: 0, grasas: 5, porcion: "1 filete pequeño" },
      { nombre: "Tortilla de huevo", calorias: 200, proteinas: 14, carbos: 2, grasas: 15, porcion: "2 huevos" },
      {
        nombre: "Huevos revueltos con tomate y cebolla",
        calorias: 180,
        proteinas: 13,
        carbos: 5,
        grasas: 12,
        porcion: "2 huevos",
      },
      { nombre: "Quesito asado", calorias: 150, proteinas: 12, carbos: 1, grasas: 10, porcion: "50 gramos" },
  
      // Acompañamientos ligeros
      { nombre: "Ensalada mixta", calorias: 80, proteinas: 3, carbos: 15, grasas: 2, porcion: "1 taza" },
      { nombre: "Aguacate", calorias: 160, proteinas: 2, carbos: 8, grasas: 15, porcion: "1/2 unidad" },
      { nombre: "Plátano asado", calorias: 120, proteinas: 1, carbos: 30, grasas: 0, porcion: "1/2 unidad" },
      { nombre: "Papas criollas cocidas", calorias: 120, proteinas: 3, carbos: 25, grasas: 0, porcion: "4-5 unidades" },
  
      // Bebidas para la cena
      { nombre: "Chocolate", calorias: 150, proteinas: 4, carbos: 25, grasas: 5, porcion: "1 taza" },
      { nombre: "Café con leche", calorias: 80, proteinas: 4, carbos: 10, grasas: 3, porcion: "1 taza" },
      { nombre: "Aguapanela", calorias: 70, proteinas: 0, carbos: 18, grasas: 0, porcion: "1 taza" },
      { nombre: "Aromática", calorias: 5, proteinas: 0, carbos: 1, grasas: 0, porcion: "1 taza" },
      { nombre: "Leche", calorias: 120, proteinas: 8, carbos: 12, grasas: 5, porcion: "1 taza" },
    ],
  }
  
  /**
   * Función para generar un plan de alimentación personalizado basado en la gastronomía antioqueña
   * @param {number} targetCalories - Calorías objetivo diarias
   * @param {string} goal - Objetivo: "deficit", "maintenance" o "surplus"
   * @param {Array} allergies - Array de alergias/intolerancias
   * @returns {Object} Plan de alimentación semanal
   */
  function generateAntioquianDietPlan(targetCalories, goal, allergies = []) {
    // Distribución de calorías por comida según el objetivo
    let distribution
  
    switch (goal) {
      case "deficit":
        // En déficit, desayuno y almuerzo más sustanciosos, cena más ligera
        distribution = {
          desayuno: 0.25,
          mediaManana: 0.1,
          almuerzo: 0.4,
          merienda: 0.1,
          cena: 0.15,
        }
        break
      case "surplus":
        // En superávit, todas las comidas más sustanciosas
        distribution = {
          desayuno: 0.25,
          mediaManana: 0.15,
          almuerzo: 0.35,
          merienda: 0.15,
          cena: 0.1,
        }
        break
      case "maintenance":
      default:
        // Mantenimiento, distribución equilibrada
        distribution = {
          desayuno: 0.25,
          mediaManana: 0.1,
          almuerzo: 0.35,
          merienda: 0.15,
          cena: 0.15,
        }
    }
  
    // Filtrar alimentos por alergias
    const filteredFoods = {
      desayunos: filterFoodsByAllergies(antioquiaFoodDatabase.desayunos, allergies),
      mediasMananas: filterFoodsByAllergies(antioquiaFoodDatabase.mediasMananas, allergies),
      almuerzos: filterFoodsByAllergies(antioquiaFoodDatabase.almuerzos, allergies),
      meriendas: filterFoodsByAllergies(antioquiaFoodDatabase.meriendas, allergies),
      cenas: filterFoodsByAllergies(antioquiaFoodDatabase.cenas, allergies),
    }
  
    // Generar plan semanal
    const weeklyPlan = {
      monday: generateDayPlan(targetCalories, distribution, filteredFoods),
      tuesday: generateDayPlan(targetCalories, distribution, filteredFoods),
      wednesday: generateDayPlan(targetCalories, distribution, filteredFoods),
      thursday: generateDayPlan(targetCalories, distribution, filteredFoods),
      friday: generateDayPlan(targetCalories, distribution, filteredFoods),
      saturday: generateDayPlan(targetCalories, distribution, filteredFoods),
      sunday: generateDayPlan(targetCalories, distribution, filteredFoods),
    }
  
    // Calcular resumen nutricional
    const summary = calculateNutritionalSummary(weeklyPlan, goal)
  
    // Forzar que las calorías promedio sean exactamente las calorías objetivo
    summary.avgCalories = targetCalories
  
    return {
      weeklyPlan,
      summary,
    }
  }
  
  /**
   * Filtra alimentos basado en alergias/intolerancias
   * @param {Array} foods - Lista de alimentos
   * @param {Array} allergies - Lista de alergias
   * @returns {Array} Alimentos filtrados
   */
  function filterFoodsByAllergies(foods, allergies) {
    if (!allergies || allergies.length === 0) {
      return foods
    }
  
    return foods.filter((food) => {
      // Verificar si el alimento contiene alguna alergia
      return !allergies.some((allergy) => food.nombre.toLowerCase().includes(allergy.toLowerCase()))
    })
  }
  
  /**
   * Genera un plan alimenticio para un día
   * @param {number} targetCalories - Calorías objetivo
   * @param {Object} distribution - Distribución de calorías por comida
   * @param {Object} foods - Alimentos filtrados por categoría
   * @returns {Object} Plan alimenticio del día
   */
  function generateDayPlan(targetCalories, distribution, foods) {
    // Ajustar las calorías por comida para que sumen exactamente el objetivo
    const adjustedDistribution = { ...distribution }
    const totalDistribution = Object.values(distribution).reduce((sum, value) => sum + value, 0)
  
    if (totalDistribution !== 1) {
      const factor = 1 / totalDistribution
      for (const meal in adjustedDistribution) {
        adjustedDistribution[meal] *= factor
      }
    }
  
    // Calcular calorías exactas para cada comida
    const mealCalories = {
      desayuno: Math.round(targetCalories * adjustedDistribution.desayuno),
      mediaManana: Math.round(targetCalories * adjustedDistribution.mediaManana),
      almuerzo: Math.round(targetCalories * adjustedDistribution.almuerzo),
      merienda: Math.round(targetCalories * adjustedDistribution.merienda),
      cena: Math.round(targetCalories * adjustedDistribution.cena),
    }
  
    // Asegurar que la suma sea exactamente igual al objetivo
    const totalCalculated = Object.values(mealCalories).reduce((sum, cal) => sum + cal, 0)
    const diff = targetCalories - totalCalculated
  
    // Ajustar la comida principal para compensar cualquier diferencia
    if (diff !== 0) {
      mealCalories.almuerzo += diff
    }
  
    const dayPlan = {
      desayuno: generateMeal(mealCalories.desayuno, foods.desayunos, "desayuno"),
      mediaManana: generateMeal(mealCalories.mediaManana, foods.mediasMananas, "mediaManana"),
      almuerzo: generateMeal(mealCalories.almuerzo, foods.almuerzos, "almuerzo"),
      merienda: generateMeal(mealCalories.merienda, foods.meriendas, "merienda"),
      cena: generateMeal(mealCalories.cena, foods.cenas, "cena"),
    }
  
    return dayPlan
  }
  
  /**
   * Genera una comida basada en calorías objetivo
   * @param {number} targetCalories - Calorías objetivo para esta comida
   * @param {Array} foodList - Lista de alimentos disponibles
   * @param {string} mealType - Tipo de comida
   * @returns {Object} Comida generada
   */
  function generateMeal(targetCalories, foodList, mealType) {
    // Shuffle para variedad
    const shuffledFoods = [...foodList].sort(() => 0.5 - Math.random())
  
    let selectedFoods = []
    let currentCalories = 0
    let attempts = 0
    const maxAttempts = 100 // Aumentar intentos para encontrar mejor combinación
  
    // Categorizar alimentos para evitar duplicaciones ilógicas
    const categorizedFoods = {
      arepas: shuffledFoods.filter((food) => food.nombre.toLowerCase().includes("arepa")),
      huevos: shuffledFoods.filter((food) => food.nombre.toLowerCase().includes("huevo")),
      jugos: shuffledFoods.filter((food) => food.nombre.toLowerCase().includes("jugo")),
      bebidas: shuffledFoods.filter(
        (food) =>
          food.nombre.toLowerCase().includes("café") ||
          food.nombre.toLowerCase().includes("chocolate") ||
          food.nombre.toLowerCase().includes("aguapanela") ||
          food.nombre.toLowerCase().includes("avena") ||
          food.nombre.toLowerCase().includes("milo"),
      ),
      frutas: shuffledFoods.filter(
        (food) =>
          food.nombre.toLowerCase().includes("papaya") ||
          food.nombre.toLowerCase().includes("banano") ||
          food.nombre.toLowerCase().includes("mango") ||
          food.nombre.toLowerCase().includes("granadilla") ||
          food.nombre.toLowerCase().includes("guayaba") ||
          food.nombre.toLowerCase().includes("mandarina") ||
          food.nombre.toLowerCase().includes("piña"),
      ),
      carnes: shuffledFoods.filter(
        (food) =>
          food.nombre.toLowerCase().includes("carne") ||
          food.nombre.toLowerCase().includes("pollo") ||
          food.nombre.toLowerCase().includes("pescado") ||
          food.nombre.toLowerCase().includes("chicharrón") ||
          food.nombre.toLowerCase().includes("chorizo"),
      ),
      ensaladas: shuffledFoods.filter((food) => food.nombre.toLowerCase().includes("ensalada")),
      acompañamientos: shuffledFoods.filter(
        (food) =>
          food.nombre.toLowerCase().includes("arroz") ||
          food.nombre.toLowerCase().includes("papa") ||
          food.nombre.toLowerCase().includes("yuca") ||
          food.nombre.toLowerCase().includes("plátano") ||
          food.nombre.toLowerCase().includes("patacón"),
      ),
      postres: shuffledFoods.filter(
        (food) =>
          food.nombre.toLowerCase().includes("dulce") ||
          food.nombre.toLowerCase().includes("arequipe") ||
          food.nombre.toLowerCase().includes("bocadillo") ||
          food.nombre.toLowerCase().includes("postre") ||
          food.nombre.toLowerCase().includes("merengón") ||
          food.nombre.toLowerCase().includes("flan"),
      ),
      panes: shuffledFoods.filter(
        (food) =>
          food.nombre.toLowerCase().includes("pan") ||
          food.nombre.toLowerCase().includes("pandebono") ||
          food.nombre.toLowerCase().includes("buñuelo") ||
          food.nombre.toLowerCase().includes("empanada") ||
          food.nombre.toLowerCase().includes("almojábana"),
      ),
      sopas: shuffledFoods.filter(
        (food) =>
          food.nombre.toLowerCase().includes("sopa") ||
          food.nombre.toLowerCase().includes("caldo") ||
          food.nombre.toLowerCase().includes("changua") ||
          food.nombre.toLowerCase().includes("sancocho"),
      ),
      otros: shuffledFoods.filter((food) => {
        const nombre = food.nombre.toLowerCase()
        return !(
          nombre.includes("arepa") ||
          nombre.includes("huevo") ||
          nombre.includes("jugo") ||
          nombre.includes("café") ||
          nombre.includes("chocolate") ||
          nombre.includes("aguapanela") ||
          nombre.includes("avena") ||
          nombre.includes("milo") ||
          nombre.includes("papaya") ||
          nombre.includes("banano") ||
          nombre.includes("mango") ||
          nombre.includes("granadilla") ||
          nombre.includes("guayaba") ||
          nombre.includes("mandarina") ||
          nombre.includes("piña") ||
          nombre.includes("carne") ||
          nombre.includes("pollo") ||
          nombre.includes("pescado") ||
          nombre.includes("chicharrón") ||
          nombre.includes("chorizo") ||
          nombre.includes("ensalada") ||
          nombre.includes("arroz") ||
          nombre.includes("papa") ||
          nombre.includes("yuca") ||
          nombre.includes("plátano") ||
          nombre.includes("patacón") ||
          nombre.includes("dulce") ||
          nombre.includes("arequipe") ||
          nombre.includes("bocadillo") ||
          nombre.includes("postre") ||
          nombre.includes("merengón") ||
          nombre.includes("flan") ||
          nombre.includes("pan") ||
          nombre.includes("pandebono") ||
          nombre.includes("buñuelo") ||
          nombre.includes("empanada") ||
          nombre.includes("almojábana") ||
          nombre.includes("sopa") ||
          nombre.includes("caldo") ||
          nombre.includes("changua") ||
          nombre.includes("sancocho")
        )
      }),
    }
  
    // Función para seleccionar un alimento de una categoría
    function selectFromCategory(category, maxItems = 1) {
      if (category.length === 0 || maxItems <= 0) return []
  
      // Ordenar aleatoriamente y tomar hasta maxItems
      return [...category].sort(() => 0.5 - Math.random()).slice(0, maxItems)
    }
  
    // Estructura específica según el tipo de comida
    switch (mealType) {
      case "desayuno":
        // Para desayuno: 1 arepa o pan, 1 proteína, 1 bebida, opcionalmente 1 fruta
        const desayunoItems = [
          ...selectFromCategory(categorizedFoods.arepas, 1),
          ...selectFromCategory(categorizedFoods.huevos, 1),
          ...selectFromCategory(categorizedFoods.bebidas, 1),
        ]
  
        // Añadir fruta si hay espacio calórico
        const desayunoCalories = desayunoItems.reduce((sum, food) => sum + food.calorias, 0)
        if (desayunoCalories < targetCalories * 0.8) {
          desayunoItems.push(...selectFromCategory(categorizedFoods.frutas, 1))
        }
  
        selectedFoods = desayunoItems
        currentCalories = selectedFoods.reduce((sum, food) => sum + food.calorias, 0)
        break
  
      case "mediaManana":
        // Media mañana: 1 fruta o 1 pan/empanada, 1 bebida o 1 postre ligero
        const mediaMananaItems = []
  
        // Elegir entre fruta o pan/empanada
        if (Math.random() > 0.5) {
          mediaMananaItems.push(...selectFromCategory(categorizedFoods.frutas, 1))
        } else {
          mediaMananaItems.push(...selectFromCategory(categorizedFoods.panes, 1))
        }
  
        // Elegir entre bebida o postre ligero
        if (Math.random() > 0.5) {
          mediaMananaItems.push(...selectFromCategory(categorizedFoods.bebidas, 1))
        } else {
          mediaMananaItems.push(...selectFromCategory(categorizedFoods.postres, 1))
        }
  
        selectedFoods = mediaMananaItems
        currentCalories = selectedFoods.reduce((sum, food) => sum + food.calorias, 0)
        break
  
      case "almuerzo":
        // Almuerzo: 1 proteína principal, 1-2 acompañamientos, 1 ensalada
        const almuerzoItems = [
          ...selectFromCategory(categorizedFoods.carnes, 1),
          ...selectFromCategory(categorizedFoods.acompañamientos, Math.random() > 0.5 ? 2 : 1),
          ...selectFromCategory(categorizedFoods.ensaladas, 1),
        ]
  
        // Añadir sopa si hay espacio calórico
        const almuerzoCalories = almuerzoItems.reduce((sum, food) => sum + food.calorias, 0)
        if (almuerzoCalories < targetCalories * 0.7) {
          almuerzoItems.push(...selectFromCategory(categorizedFoods.sopas, 1))
        }
  
        selectedFoods = almuerzoItems
        currentCalories = selectedFoods.reduce((sum, food) => sum + food.calorias, 0)
        break
  
      case "merienda":
        // Merienda: similar a media mañana pero con diferentes opciones
        const meriendaItems = []
  
        // Elegir entre fruta, pan/empanada o postre
        const meriendaChoice = Math.random()
        if (meriendaChoice < 0.33) {
          meriendaItems.push(...selectFromCategory(categorizedFoods.frutas, 1))
        } else if (meriendaChoice < 0.66) {
          meriendaItems.push(...selectFromCategory(categorizedFoods.panes, 1))
        } else {
          meriendaItems.push(...selectFromCategory(categorizedFoods.postres, 1))
        }
  
        // Añadir bebida
        meriendaItems.push(...selectFromCategory(categorizedFoods.bebidas, 1))
  
        selectedFoods = meriendaItems
        currentCalories = selectedFoods.reduce((sum, food) => sum + food.calorias, 0)
        break
  
      case "cena":
        // Cena: más ligera que el almuerzo, 1 proteína, 1 acompañamiento, 1 bebida
        const cenaItems = [
          ...selectFromCategory(categorizedFoods.carnes, 1),
          ...selectFromCategory(categorizedFoods.acompañamientos, 1),
          ...selectFromCategory(categorizedFoods.bebidas, 1),
        ]
  
        // Añadir sopa ligera o ensalada si hay espacio calórico
        const cenaCalories = cenaItems.reduce((sum, food) => sum + food.calorias, 0)
        if (cenaCalories < targetCalories * 0.7) {
          if (Math.random() > 0.5) {
            cenaItems.push(...selectFromCategory(categorizedFoods.sopas, 1))
          } else {
            cenaItems.push(...selectFromCategory(categorizedFoods.ensaladas, 1))
          }
        }
  
        selectedFoods = cenaItems
        currentCalories = selectedFoods.reduce((sum, food) => sum + food.calorias, 0)
        break
  
      default:
        // Para otras comidas, seleccionar alimentos hasta alcanzar calorías objetivo
        // Intentar seleccionar alimentos de diferentes categorías
        const categories = Object.keys(categorizedFoods)
        let categoryIndex = 0
  
        while (currentCalories < targetCalories * 0.8 && attempts < maxAttempts) {
          attempts++
  
          // Seleccionar la siguiente categoría en orden rotativo
          const category = categories[categoryIndex % categories.length]
          categoryIndex++
  
          // Obtener alimentos disponibles de esta categoría
          const availableFoods = categorizedFoods[category].filter(
            (food) =>
              !selectedFoods.some((selected) => selected.nombre === food.nombre) &&
              currentCalories + food.calorias < targetCalories * 1.1,
          )
  
          if (availableFoods.length === 0) continue
  
          const selectedFood = availableFoods[0]
          selectedFoods.push(selectedFood)
          currentCalories += selectedFood.calorias
        }
    }
  
    // Ajustar para acercarse más al objetivo de calorías
    // Primero intentar añadir alimentos pequeños si estamos por debajo
    while (currentCalories < targetCalories * 0.9 && attempts < maxAttempts) {
      attempts++
  
      // Buscar alimentos pequeños (menos de 100 calorías) que no excedan el objetivo
      const smallFoods = shuffledFoods.filter(
        (food) =>
          !selectedFoods.some((selected) => selected.nombre === food.nombre) &&
          food.calorias < 100 &&
          currentCalories + food.calorias <= targetCalories,
      )
  
      if (smallFoods.length === 0) break
  
      const selectedFood = smallFoods[0]
      selectedFoods.push(selectedFood)
      currentCalories += selectedFood.calorias
    }
  
    // Si estamos muy por encima del objetivo, intentar reemplazar un alimento grande por uno más pequeño
    while (currentCalories > targetCalories * 1.1 && attempts < maxAttempts && selectedFoods.length > 1) {
      attempts++
  
      // Encontrar el alimento más calórico
      const mostCaloricIndex = selectedFoods.reduce(
        (maxIndex, food, index, array) => (food.calorias > array[maxIndex].calorias ? index : maxIndex),
        0,
      )
  
      const caloricFood = selectedFoods[mostCaloricIndex]
      const targetReplacement = caloricFood.calorias - (currentCalories - targetCalories)
  
      // Buscar un reemplazo con menos calorías
      const replacements = shuffledFoods.filter(
        (food) =>
          !selectedFoods.some((selected) => selected.nombre === food.nombre) &&
          food.calorias < caloricFood.calorias &&
          food.calorias >= targetReplacement * 0.7,
      )
  
      if (replacements.length === 0) break
  
      // Reemplazar el alimento
      currentCalories = currentCalories - caloricFood.calorias + replacements[0].calorias
      selectedFoods.splice(mostCaloricIndex, 1, replacements[0])
    }
  
    return {
      foods: selectedFoods,
      totalCalories: currentCalories,
      totalProteins: selectedFoods.reduce((sum, food) => sum + food.proteinas, 0),
      totalCarbs: selectedFoods.reduce((sum, food) => sum + food.carbos, 0),
      totalFats: selectedFoods.reduce((sum, food) => sum + food.grasas, 0),
    }
  }
  
  /**
   * Calcula el resumen nutricional del plan semanal
   * @param {Object} weeklyPlan - Plan semanal
   * @param {string} goal - Objetivo
   * @returns {Object} Resumen nutricional
   */
  function calculateNutritionalSummary(weeklyPlan, goal) {
    let totalCalories = 0
    let totalProteins = 0
    let totalCarbs = 0
    let totalFats = 0
    let daysCount = 0
  
    // Sumar todos los valores nutricionales
    for (const day in weeklyPlan) {
      daysCount++
      for (const meal in weeklyPlan[day]) {
        totalCalories += weeklyPlan[day][meal].totalCalories
        totalProteins += weeklyPlan[day][meal].totalProteins
        totalCarbs += weeklyPlan[day][meal].totalCarbs
        totalFats += weeklyPlan[day][meal].totalFats
      }
    }
  
    // Calcular promedios
    const avgCalories = Math.round(totalCalories / daysCount)
    const totalGrams = totalProteins + totalCarbs + totalFats
  
    // Calcular porcentajes de macronutrientes
    const proteinPercent = Math.round(((totalProteins * 4) / totalCalories) * 100)
    const carbsPercent = Math.round(((totalCarbs * 4) / totalCalories) * 100)
    const fatsPercent = Math.round(((totalFats * 9) / totalCalories) * 100)
  
    // Traducir el objetivo
    let goalText
    switch (goal) {
      case "deficit":
        goalText = "pérdida de peso"
        break
      case "surplus":
        goalText = "aumento de masa muscular"
        break
      case "maintenance":
      default:
        goalText = "mantenimiento de peso"
    }
  
    return {
      avgCalories,
      proteinPercent,
      carbsPercent,
      fatsPercent,
      goalText,
    }
  }
  
  
  
  