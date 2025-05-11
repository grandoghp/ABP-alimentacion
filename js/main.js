$(document).ready(() => {
  var checkScrollBar = () => {
    
    if ($(window).scrollTop() > 1) {
      $(".bg-main").css("background-color", "rgba(0, 0, 0, 0.9)") 
    } else {
      $(".bg-main").css("background-color", "black") 
    }
  }

  
  $(window).on("load resize scroll", checkScrollBar)

  
  $(".nav-link:contains('¿Quienes somos?')").click((e) => {
    e.preventDefault()

    
    if ($("#quienesSomosModal").length === 0) {
      const modal = `
        <div id="quienesSomosModal" class="modal">
          <div class="parallax2"></div>
          <span class="close" id="closeQuienesSomosModal">&times;</span>
          <div class="modal-content">
            <div class="modal-body">
              <div class="info">
                <h2>¿Quiénes Somos?</h2>
                <p>BodyRun es una empresa colombiana enfocada en la salud alimenticia, comprometida con el bienestar y la nutrición de nuestros usuarios.</p>
                <p>Fundada con la misión de proporcionar herramientas accesibles para que cada persona pueda alcanzar sus metas de salud, ofrecemos calculadoras nutricionales precisas y planes alimenticios personalizados.</p>
                <p>Nuestro equipo está formado por profesionales apasionados por la nutrición y el bienestar, dedicados a ayudarte a encontrar el equilibrio perfecto entre una alimentación saludable y tus objetivos personales.</p>
                <p>En BodyRun creemos que la salud comienza con lo que comemos, y estamos aquí para guiarte en cada paso del camino hacia una vida más saludable y equilibrada.</p>
              </div>
              <div class="image">
                <img src="img/logo negrito.PNG" alt="BodyRun Logo" id="quienesSomosImage">
              </div>
            </div>
          </div>
        </div>
      `

      $("body").append(modal)

      
      $("#closeQuienesSomosModal").click(() => {
        $("#quienesSomosModal").hide()
        $("nav").show()
      })

      
      $(window).click((event) => {
        if ($(event.target).is($("#quienesSomosModal"))) {
          $("#quienesSomosModal").hide()
          $("nav").show()
        }
      })
    }

    
    $("#quienesSomosModal").show()
    $("nav").hide()
  })

  
  $("#servicios")
    .parent()
    .find(".dropdown-item")
    .each(function () {
      $(this).click(function (e) {
        e.preventDefault()

        
        const servicioTexto = $(this).text().trim()

        
        if (servicioTexto.includes("Indice de masa corporal")) {
          $("#infoButton").click()
        } else if (servicioTexto.includes("Superavit calorico")) {
          $("#superavitButton").click()
        } else if (servicioTexto.includes("Deficit calorico")) {
          $("#deficitButton").click()
        } else if (servicioTexto.includes("Mantener peso")) {
          $("#maintenanceButton").click()
        } else if (servicioTexto.includes("Dietas")) {
          $("#dietButton").click()
        }
      })
    })

  
  if ($("#opcionesDropdown").length === 0) {
    
    const opcionesDropdown = `
      <div class="dropdown-menu opciones-dropdown" aria-labelledby="opciones">
        <div class="opciones-header">
          <h6 class="dropdown-header">Mi Cuenta</h6>
        </div>
        <a class="dropdown-item" href="#" id="iniciarSesion"><span class="icon-user"></span> Iniciar sesión</a>
        <div class="dropdown-divider"></div>
        <div class="opciones-header">
          <h6 class="dropdown-header">Información</h6>
        </div>
        <a class="dropdown-item" href="#" id="acercaDe"><span class="icon-help"></span> Acerca de</a>
      </div>
    `

    
    $("#opciones").parent().find(".dropdown-menu").replaceWith(opcionesDropdown)

    
    const opcionesStyles = `
      <style>
        .opciones-dropdown {
          padding: 10px;
          min-width: 220px;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          border: none;
          background-color: #222;
          right: 0;
          left: auto !important;
          position: absolute;
          z-index: 1000;
          transform: none !important;
        }
        
        .opciones-dropdown .dropdown-item {
          color: #fff;
          padding: 8px 15px;
          border-radius: 5px;
          transition: all 0.2s ease;
        }
        
        .opciones-dropdown .dropdown-item:hover {
          background-color: #ab5a18;
          transform: translateX(5px);
        }
        
        .opciones-dropdown .dropdown-divider {
          border-color: #444;
          margin: 8px 0;
        }
        
        .opciones-dropdown .dropdown-header {
          color: #ab5a18;
          font-weight: bold;
          padding: 5px 15px;
        }
        
        .opciones-dropdown .icon-user,
        .opciones-dropdown .icon-help {
          margin-right: 8px;
        }
      </style>
    `

    $("head").append(opcionesStyles)
  }


  $("#iniciarSesion").click((e) => {
    e.preventDefault()

    if ($("#loginModal").length === 0) {
      const loginModal = `
        <div id="loginModal" class="modal">
          <div class="parallax2"></div>
          <span class="close" id="closeLoginModal">&times;</span>
          <div class="modal-content">
            <div class="modal-body login-modal-body">
              <div class="login-container">
                <h2>Iniciar Sesión</h2>
                <form id="loginForm">
                  <div class="form-group">
                    <label for="username">Usuario o Correo Electrónico</label>
                    <input type="text" id="username" placeholder="Ingresa tu usuario o correo" required>
                  </div>
                  <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Ingresa tu contraseña" required>
                  </div>
                  <button type="submit" class="btn btn-primary login-btn">Iniciar Sesión</button>
                  <div class="login-options">
                    <p>¿No tienes cuenta? <a href="#" class="register-link" id="showRegisterForm">Regístrate aquí</a></p>
                  </div>
                </form>
              </div>
              <div class="login-image">
                <img src="img/logo negrito.PNG" alt="BodyRun Logo">
                <p class="login-slogan">Tu meta en segundos</p>
              </div>
            </div>
          </div>
        </div>

        <div id="registerModal" class="modal">
          <div class="parallax2"></div>
          <span class="close" id="closeRegisterModal">&times;</span>
          <div class="modal-content">
            <div class="modal-body register-modal-body">
              <div class="register-container">
                <h2>Crear Cuenta</h2>
                <form id="registerForm">
                  <div class="form-group">
                    <label for="fullName">Nombre Completo</label>
                    <input type="text" id="fullName" placeholder="Ingresa tu nombre completo" required>
                  </div>
                  <div class="form-group">
                    <label for="registerEmail">Correo Electrónico</label>
                    <input type="email" id="registerEmail" placeholder="Ingresa tu correo electrónico" required>
                  </div>
                  <div class="form-group">
                    <label for="registerUsername">Nombre de Usuario</label>
                    <input type="text" id="registerUsername" placeholder="Elige un nombre de usuario" required>
                  </div>
                  <div class="form-group">
                    <label for="registerPassword">Contraseña</label>
                    <input type="password" id="registerPassword" placeholder="Crea una contraseña segura" required>
                  </div>
                  <div class="form-group">
                    <label for="confirmPassword">Confirmar Contraseña</label>
                    <input type="password" id="confirmPassword" placeholder="Confirma tu contraseña" required>
                  </div>
                  <button type="submit" class="btn btn-primary register-btn">Crear Cuenta</button>
                  <div class="login-options">
                    <p>¿Ya tienes cuenta? <a href="#" class="login-link" id="showLoginForm">Inicia sesión aquí</a></p>
                  </div>
                </form>
              </div>
              <div class="register-image">
                <img src="img/logo negrito.PNG" alt="BodyRun Logo">
                <p class="register-slogan">Comienza tu camino hacia una vida saludable</p>
              </div>
            </div>
          </div>
        </div>
      `

      $("body").append(loginModal)

      
      $("#closeLoginModal").click(() => {
        $("#loginModal").hide()
        $("nav").show()
      })

      
      $("#closeRegisterModal").click(() => {
        $("#registerModal").hide()
        $("nav").show()
      })

      
      $(window).click((event) => {
        if ($(event.target).is($("#loginModal"))) {
          $("#loginModal").hide()
          $("nav").show()
        }
        if ($(event.target).is($("#registerModal"))) {
          $("#registerModal").hide()
          $("nav").show()
        }
      })

      
      $("#showRegisterForm").click((e) => {
        e.preventDefault()
        $("#loginModal").hide()
        $("#registerModal").show()
      })

      
      $("#showLoginForm").click((e) => {
        e.preventDefault()
        $("#registerModal").hide()
        $("#loginModal").show()
      })

      
      $("#loginForm").submit((e) => {
        e.preventDefault()
        alert("Inicio de sesión exitoso (simulado)")
        $("#loginModal").hide()
        $("nav").show()
      })

      
      $("#registerForm").submit((e) => {
        e.preventDefault()

        
        const password = $("#registerPassword").val()
        const confirmPassword = $("#confirmPassword").val()

        if (password !== confirmPassword) {
          alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.")
          return
        }

        alert("Registro exitoso (simulado)")
        $("#registerModal").hide()
        $("nav").show()
      })
    }

    
    $("#loginModal").show()
    $("nav").hide()
  })

  
  $("#acercaDe").click((e) => {
    e.preventDefault()

    if ($("#aboutModal").length === 0) {
      const aboutModal = `
        <div id="aboutModal" class="modal">
          <div class="parallax2"></div>
          <span class="close" id="closeAboutModal">&times;</span>
          <div class="modal-content">
            <div class="modal-body about-modal-body">
              <div class="about-info">
                <h2>Acerca de BodyRun</h2>
                <p>BodyRun es una plataforma dedicada a la salud y bienestar, ofreciendo herramientas para el cálculo de necesidades nutricionales y planes alimenticios personalizados.</p>
                
                <div class="about-section">
                  <h3>Nuestra Misión</h3>
                  <p>Proporcionar a nuestros usuarios las herramientas necesarias para alcanzar sus objetivos de salud y fitness de manera informada y personalizada.</p>
                </div>
                
                
                <div class="about-section">
                  <h3>Nuestros Servicios</h3>
                  <div class="info-sections-container">
                    <div class="info-section">
                      <div class="info-icon"><i class="icon-chart-bar"></i></div>
                      <div class="info-content">
                        <h3>Índice de Masa Corporal (IMC)</h3>
                        <p>Calcula tu IMC y conoce tu categoría de peso.</p>
                      </div>
                    </div>
                    
                    <div class="info-section">
                      <div class="info-icon"><i class="icon-down-fat"></i></div>
                      <div class="info-content">
                        <h3>Déficit Calórico</h3>
                        <p>Reduce calorías para perder peso de forma saludable.</p>
                      </div>
                    </div>
                    
                    <div class="info-section">
                      <div class="info-icon"><i class="icon-up-bold"></i></div>
                      <div class="info-content">
                        <h3>Superávit Calórico</h3>
                        <p>Aumenta tu ingesta para ganar masa muscular.</p>
                      </div>
                    </div>
                    
                    <div class="info-section">
                      <div class="info-icon"><i class="icon-balance-scale"></i></div>
                      <div class="info-content">
                        <h3>Mantenimiento de Peso</h3>
                        <p>Mantén tu peso ideal con el balance calórico adecuado.</p>
                      </div>
                    </div>
                    
                    <div class="info-section">
                      <div class="info-icon"><i class="icon-food"></i></div>
                      <div class="info-content">
                        <h3>Planes Alimenticios Personalizados</h3>
                        <p>Planes adaptados a tus objetivos y necesidades específicas.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="about-section">
                  <h3>Información Técnica</h3>
                  <ul>
                    <li><strong>Versión:</strong> 1.2.0</li>
                    <li><strong>Última actualización:</strong> Abril 2023</li>
                    <li><strong>Desarrollado por:</strong> Equipo BodyRun</li>
                  </ul>
                </div>
                
                <div class="about-section">
                  <h3>Contacto</h3>
                  <p>Para soporte o consultas, contáctanos en:</p>
                  <p><strong>Email:</strong> soporte@bodyrun.com</p>
                  <p><strong>Teléfono:</strong> +57 304 540 8277</p>
                </div>
                
                <div class="social-links">
                  <a href="#" class="social-link"><i class="icon-facebook"></i></a>
                  <a href="#" class="social-link"><i class="icon-instagram"></i></a>
                  <a href="#" class="social-link"><i class="icon-whatsapp"></i></a>
                  <a href="#" class="social-link"><i class="icon-envelope-open"></i></a>
                </div>
              </div>
              
              <div class="about-image">
                <img src="img/logo negrito.PNG" alt="BodyRun Logo">
                <p class="version-info">BodyRun © 2023</p>
              </div>
            </div>
          </div>
        </div>
      `

      $("body").append(aboutModal)

      
      $("#closeAboutModal").click(() => {
        $("#aboutModal").hide()
        $("nav").show()
      })

      
      $(window).click((event) => {
        if ($(event.target).is($("#aboutModal"))) {
          $("#aboutModal").hide()
          $("nav").show()
        }
      })
    }

    
    $("#aboutModal").show()
    $("nav").hide()
  })

  
  var modal = $("#bmiModal")
  var btn = $("#infoButton")
  var span = $(".close")
  var calculateButton = $("#calculateBmi")
  var resultDisplay = $("#result")
  var header = $("nav") 

  
  btn.on("click", () => {
    
    modal.find(".parallax2").css("opacity", "0.85")
    modal.show()
    header.hide() 
  })

  
  span.on("click", () => {
    closeAndResetIMC()
  })

  
  $(window).on("click", (event) => {
    if ($(event.target).is(modal)) {
      closeAndResetIMC()
    }
  })

  
  function closeAndResetIMC() {
    modal.hide()
    header.show() 
    
    $("#weight").val("")
    $("#height").val("")
    resultDisplay.text("")
  }

  
  calculateButton.on("click", () => {
    var weight = Number.parseFloat($("#weight").val())
    var height = Number.parseFloat($("#height").val())
    if (weight > 0 && height > 0) {
      var bmi = weight / (height * height)

      
      var category = ""
      var color = ""

      if (bmi < 18.5) {
        category = "Bajo peso"
        color = "#3498db" 
      } else if (bmi < 25) {
        category = "Peso normal"
        color = "#2ecc71" 
      } else if (bmi < 30) {
        category = "Sobrepeso"
        color = "#f39c12" 
      } else if (bmi < 35) {
        category = "Obesidad grado I"
        color = "#e67e22" 
      } else if (bmi < 40) {
        category = "Obesidad grado II"
        color = "#e74c3c" 
      } else {
        category = "Obesidad grado III"
        color = "#c0392b" 
      }

      resultDisplay.html(`
                <div class="result-content">
                    <h4>Tu IMC es: <span style="color: ${color};">${bmi.toFixed(2)}</span></h4>
                    <p>Categoría: <strong style="color: ${color};">${category}</strong></p>
                    <p>El índice de masa corporal es una medida que asocia el peso y la altura de una persona. Un IMC entre 18.5 y 24.9 se considera saludable.</p>
                </div>
            `)

      
      resultDisplay.addClass("result-visible")
    } else {
      resultDisplay.html(`
                <div class="result-content error">
                    <p>Por favor, ingresa valores válidos.</p>
                </div>
            `)
    }
  })

  
  var superavitBtn = $("#superavitButton")
  var superavitModal = $("#superavitModal")
  var closeSuperavitModal = $("#closeSuperavitModal")
  var calculateTEEButton = $("#calculateTEE")
  var teeResultDisplay = $("#teeResult")
  var calculateSurplusButton = $("#calculateSurplus")
  var surplusResultDisplay = $("#surplusResult")

  
  superavitBtn.on("click", () => {
    
    superavitModal.find(".parallax2").css("opacity", "0.85")
    superavitModal.show()
    header.hide()
  })

  
  closeSuperavitModal.on("click", () => {
    closeAndResetSuperavitModal()
  })

  
  function closeAndResetSuperavitModal() {
    superavitModal.hide()
    header.show()
    
    $("#superavitWeight").val("")
    $("#superavitHeight").val("")
    $("#superavitAge").val("")
    $("#activityLevel").val("sedentary")
    $('input[name="superavitSex"]').prop("checked", false)
    $(".sex-card").removeClass("selected")
    $('input[name="extraCalories"]').prop("checked", false)
    teeResultDisplay.text("")
    surplusResultDisplay.text("")
    $("#surplusSection").addClass("d-none")
  }

  
  $(window).on("click", (event) => {
    if ($(event.target).is(superavitModal)) {
      closeAndResetSuperavitModal()
    }
  })

  
  calculateTEEButton.on("click", () => {
    var weight = Number.parseFloat($("#superavitWeight").val())
    var height = Number.parseFloat($("#superavitHeight").val())
    var age = Number.parseFloat($("#superavitAge").val())
    var activityLevel = $("#activityLevel").val()
    var sex = $('input[name="superavitSex"]:checked').val()

    if (weight > 0 && height > 0 && age > 0 && sex) {
      var bmr = 0

      
      if (sex === "male") {
        
        bmr = 66.5 + 13.75 * weight + 5.003 * (height * 100) - 6.75 * age
      } else {
        
        bmr = 655.1 + 9.563 * weight + 1.85 * (height * 100) - 4.676 * age
      }

      
      var tee = 0
      var activityLabel = ""
      switch (activityLevel) {
        case "sedentary":
          tee = bmr * 1.2
          activityLabel = "sedentario"
          break
        case "light":
          tee = bmr * 1.375
          activityLabel = "ligeramente activo"
          break
        case "moderate":
          tee = bmr * 1.55
          activityLabel = "moderadamente activo"
          break
        case "active":
          tee = bmr * 1.725
          activityLabel = "muy activo"
          break
        case "very_active":
          tee = bmr * 1.9
          activityLabel = "extremadamente activo"
          break
        default:
          tee = bmr * 1.2
          activityLabel = "sedentario"
      }

      teeResultDisplay.html(`
                <div class="tee-result">
                    <h4>Tu gasto energético total es: <strong>${Math.round(tee)}</strong> calorías</h4>
                    <p>Este cálculo se basa en la fórmula de Harris-Benedict para una persona ${sex === "male" ? "masculina" : "femenina"} con un nivel de actividad ${activityLabel}.</p>
                </div>
            `)
      $("#teeValue").val(Math.round(tee)) 

      
      $("#surplusSection").removeClass("d-none").hide().fadeIn(500)
    } else {
      teeResultDisplay.html(`
                <div class="tee-result error">
                    <p>Por favor, ingresa valores válidos y selecciona tu sexo.</p>
                </div>
            `)
    }
  })

  
  calculateSurplusButton.on("click", () => {
    var tee = Number.parseFloat($("#teeValue").val())
    var extraCalories = Number.parseInt($('input[name="extraCalories"]:checked').val())

    if (!isNaN(tee) && !isNaN(extraCalories)) {
      var surplus = tee + extraCalories
      var message = ""
      var gainRate = ""

      
      switch (extraCalories) {
        case 500:
          gainRate = "aproximadamente 0.5 kg por semana"
          message =
            "Has seleccionado un superávit moderado de 500 calorías. Este es un buen enfoque para personas que buscan ganar masa muscular de forma gradual y minimizar la acumulación de grasa."
          break
        case 800:
          gainRate = "aproximadamente 0.8 kg por semana"
          message =
            "Has seleccionado un superávit intermedio de 800 calorías. Este enfoque es ideal para personas que buscan un equilibrio entre la ganancia de peso rápida y la minimización de grasa."
          break
        case 950:
          gainRate = "aproximadamente 1 kg por semana"
          message =
            "Has seleccionado un superávit alto de 950 calorías. Este enfoque es adecuado para personas que buscan maximizar la ganancia de masa muscular y tienen un metabolismo rápido."
          break
        default:
          gainRate = "variable según tu metabolismo"
          message = "Has seleccionado un superávit de " + extraCalories + " calorías."
      }

      surplusResultDisplay.html(`
                <div class="surplus-result">
                    <h4>Tu superávit calórico es: <strong>${surplus} calorías</strong></h4>
                    <p>Con este superávit, podrías ganar ${gainRate}.</p>
                    <p>${message}</p>
                    <p>Recuerda que estos cálculos son estimaciones y pueden variar dependiendo de tu metabolismo individual.</p>
                </div>
            `)

      
      surplusResultDisplay.hide().fadeIn(500)
    } else {
      surplusResultDisplay.html(`
                <div class="surplus-result error">
                    <p>Por favor, calcula primero tu gasto energético total y selecciona las calorías extra.</p>
                </div>
            `)
    }
  })

  
  var deficitBtn = $("#deficitButton")
  var deficitModal = $("#deficitModal")
  var closeDeficitModal = $("#closeDeficitModal")
  var calculateDeficitTEEButton = $("#calculateDeficitTEE")
  var deficitTeeResultDisplay = $("#deficitTeeResult")
  var calculateDeficitButton = $("#calculateDeficit")
  var deficitResultDisplay = $("#deficitResult")

  
  deficitBtn.on("click", () => {
    
    deficitModal.find(".parallax2").css("opacity", "0.85")
    deficitModal.show()
    header.hide()
  })

  
  closeDeficitModal.on("click", () => {
    closeAndResetDeficitModal()
  })

  
  function closeAndResetDeficitModal() {
    deficitModal.hide()
    header.show()
    
    $("#deficitWeight").val("")
    $("#deficitHeight").val("")
    $("#deficitAge").val("")
    $("#deficitActivityLevel").val("sedentary")
    $('input[name="deficitSex"]').prop("checked", false)
    $(".sex-card").removeClass("selected")
    $('input[name="deficitCalories"]').prop("checked", false)
    deficitTeeResultDisplay.text("")
    deficitResultDisplay.text("")
    $("#deficitSection").addClass("d-none")
  }

  
  $(window).on("click", (event) => {
    if ($(event.target).is(deficitModal)) {
      closeAndResetDeficitModal()
    }
  })

  
  $(".sex-card").on("click", function () {
    var sexValue = $(this).data("sex")
    var radioInput = $(this).find('input[type="radio"]')
    var radioName = radioInput.attr("name")

    
    $('input[name="' + radioName + '"]')
      .closest(".sex-card")
      .removeClass("selected")
    $(this).addClass("selected")

    
    $('input[name="' + radioName + '"]').prop("checked", false)
    radioInput.prop("checked", true)

    
    $(this).addClass("pulse-animation")
    setTimeout(() => {
      $(".sex-card").removeClass("pulse-animation")
    }, 1500)
  })

  
  calculateDeficitTEEButton.on("click", () => {
    var weight = Number.parseFloat($("#deficitWeight").val())
    var height = Number.parseFloat($("#deficitHeight").val())
    var age = Number.parseFloat($("#deficitAge").val())
    var activityLevel = $("#deficitActivityLevel").val()
    var sex = $('input[name="deficitSex"]:checked').val()

    if (weight > 0 && height > 0 && age > 0 && sex) {
      var bmr = 0

      
      if (sex === "male") {
        
        bmr = 66.5 + 13.75 * weight + 5.003 * (height * 100) - 6.75 * age
      } else {
        
        bmr = 655.1 + 9.563 * weight + 1.85 * (height * 100) - 4.676 * age
      }

      
      var tee = 0
      var activityLabel = ""
      switch (activityLevel) {
        case "sedentary":
          tee = bmr * 1.2
          activityLabel = "sedentario"
          break
        case "light":
          tee = bmr * 1.375
          activityLabel = "ligeramente activo"
          break
        case "moderate":
          tee = bmr * 1.55
          activityLabel = "moderadamente activo"
          break
        case "active":
          tee = bmr * 1.725
          activityLabel = "muy activo"
          break
        case "very_active":
          tee = bmr * 1.9
          activityLabel = "extremadamente activo"
          break
        default:
          tee = bmr * 1.2
          activityLabel = "sedentario"
      }

      deficitTeeResultDisplay.html(`
                <div class="tee-result">
                    <h4>Tu gasto energético total es: <strong>${Math.round(tee)}</strong> calorías</h4>
                    <p>Este cálculo se basa en la fórmula de Harris-Benedict para una persona ${sex === "male" ? "masculina" : "femenina"} con un nivel de actividad ${activityLabel}.</p>
                </div>
            `)
      $("#deficitTeeValue").val(Math.round(tee)) 

      
      $("#deficitSection").removeClass("d-none").hide().fadeIn(500)
    } else {
      deficitTeeResultDisplay.html(`
                <div class="tee-result error">
                    <p>Por favor, ingresa valores válidos y selecciona tu sexo.</p>
                </div>
            `)
    }
  })

  
  calculateDeficitButton.on("click", () => {
    var tee = Number.parseFloat($("#deficitTeeValue").val())
    var deficitCalories = Number.parseInt($('input[name="deficitCalories"]:checked').val())

    if (!isNaN(tee) && !isNaN(deficitCalories)) {
      var deficit = tee - deficitCalories
      var message = ""
      var lossRate = ""

      
      switch (deficitCalories) {
        case 300:
          lossRate = "aproximadamente 0.3 kg por semana"
          message =
            "Has seleccionado un déficit suave de 300 calorías. Este es un enfoque gradual ideal para pérdida de peso a largo plazo, minimizando la pérdida de masa muscular."
          break
        case 500:
          lossRate = "aproximadamente 0.5 kg por semana"
          message =
            "Has seleccionado un déficit moderado de 500 calorías. Este es el enfoque más recomendado para una pérdida de peso sostenible y saludable."
          break
        case 750:
          lossRate = "aproximadamente 0.75 kg por semana"
          message =
            "Has seleccionado un déficit intenso de 750 calorías. Este enfoque es adecuado para personas que buscan resultados más rápidos, pero requiere mayor disciplina."
          break
        default:
          lossRate = "variable según tu metabolismo"
          message = "Has seleccionado un déficit de " + deficitCalories + " calorías."
      }

      deficitResultDisplay.html(`
                <div class="deficit-result">
                    <h4>Tu objetivo calórico diario es: <strong>${deficit} calorías</strong></h4>
                    <p>Con este déficit, podrías perder ${lossRate}.</p>
                    <p>${message}</p>
                    <p>Recuerda que estos cálculos son estimaciones y pueden variar dependiendo de tu metabolismo individual. No se recomienda consumir menos de 1200 calorías diarias para mujeres y 1500 para hombres.</p>
                </div>
            `)

      
      deficitResultDisplay.hide().fadeIn(500)

      
      var sex = $('input[name="deficitSex"]:checked').val()
      if (deficit < (sex === "male" ? 1500 : 1200)) {
        deficitResultDisplay.append(`
                    <div class="warning" style="margin-top:15px;padding:10px;background-color:rgba(231, 76, 60, 0.2);border-left:4px solid #e74c3c;border-radius:5px;">
                        <p><strong>¡Advertencia!</strong> El déficit calórico calculado es demasiado bajo para ser saludable. Se recomienda no consumir menos de ${sex === "male" ? "1500" : "1200"} calorías diarias.</p>
                    </div>
                `)
      }
    } else {
      deficitResultDisplay.html(`
                <div class="deficit-result error">
                    <p>Por favor, calcula primero tu gasto energético total y selecciona el déficit calórico deseado.</p>
                </div>
            `)
    }
  })

  
  var maintenanceBtn = $("#maintenanceButton")
  var maintenanceModal = $("#maintenanceModal")
  var closeMaintenanceModal = $("#closeMaintenanceModal")
  var calculateMaintenanceButton = $("#calculateMaintenance")
  var maintenanceResultDisplay = $("#maintenanceResult")

  
  maintenanceBtn.on("click", () => {
    
    maintenanceModal.find(".parallax2").css("opacity", "0.85")
    maintenanceModal.show()
    header.hide()
  })

  
  closeMaintenanceModal.on("click", () => {
    closeAndResetMaintenanceModal()
  })

  
  function closeAndResetMaintenanceModal() {
    maintenanceModal.hide()
    header.show()
    
    $("#maintenanceWeight").val("")
    $("#maintenanceHeight").val("")
    $("#maintenanceAge").val("")
    $("#maintenanceActivityLevel").val("sedentary")
    $('input[name="maintenanceSex"]').prop("checked", false)
    $(".sex-card").removeClass("selected")
    maintenanceResultDisplay.text("")
    $("#maintenanceTips").addClass("d-none")
  }

  
  $(window).on("click", (event) => {
    if ($(event.target).is(maintenanceModal)) {
      closeAndResetMaintenanceModal()
    }
  })

  
  calculateMaintenanceButton.on("click", () => {
    var weight = Number.parseFloat($("#maintenanceWeight").val())
    var height = Number.parseFloat($("#maintenanceHeight").val())
    var age = Number.parseFloat($("#maintenanceAge").val())
    var activityLevel = $("#maintenanceActivityLevel").val()
    var sex = $('input[name="maintenanceSex"]:checked').val()

    if (weight > 0 && height > 0 && age > 0 && sex) {
      var bmr = 0

      
      if (sex === "male") {
        
        bmr = 66.5 + 13.75 * weight + 5.003 * (height * 100) - 6.75 * age
      } else {
        
        bmr = 655.1 + 9.563 * weight + 1.85 * (height * 100) - 4.676 * age
      }

      
      var maintenance = 0
      var activityLabel = ""
      switch (activityLevel) {
        case "sedentary":
          maintenance = bmr * 1.2
          activityLabel = "sedentario"
          break
        case "light":
          maintenance = bmr * 1.375
          activityLabel = "ligeramente activo"
          break
        case "moderate":
          maintenance = bmr * 1.55
          activityLabel = "moderadamente activo"
          break
        case "active":
          maintenance = bmr * 1.725
          activityLabel = "muy activo"
          break
        case "very_active":
          maintenance = bmr * 1.9
          activityLabel = "extremadamente activo"
          break
        default:
          maintenance = bmr * 1.2
          activityLabel = "sedentario"
      }

      
      var maintenanceCalories = Math.round(maintenance)

      maintenanceResultDisplay.html(`
                <div class="maintenance-result">
                    <h4>Tus calorías de mantenimiento son: <strong>${maintenanceCalories}</strong> calorías</h4>
                    <p>Este es el número aproximado de calorías que necesitas consumir diariamente para mantener tu peso actual.</p>
                    <p>Este cálculo se basa en la fórmula de Harris-Benedict para una persona ${sex === "male" ? "masculina" : "femenina"} con un nivel de actividad ${activityLabel}.</p>
                </div>
            `)

      
      $("#maintenanceTips").removeClass("d-none").hide().fadeIn(500)
    } else {
      maintenanceResultDisplay.html(`
                <div class="maintenance-result error">
                    <p>Por favor, ingresa valores válidos y selecciona tu sexo.</p>
                </div>
            `)
    }
  })

  
  $(".btn-primary").hover(
    function () {
      $(this).addClass("btn-hover-effect")
    },
    function () {
      $(this).removeClass("btn-hover-effect")
    },
  )

  
  $("input, select")
    .on("focus", function () {
      $(this).parent(".form-group").addClass("input-focus")
    })
    .on("blur", function () {
      $(this).parent(".form-group").removeClass("input-focus")
    })

  
  function adjustParallaxHeight() {
    
    $(".modal").each(function () {
      var modalContent = $(this).find(".modal-content")
      var parallaxBg = $(this).find(".parallax2, .parallax-deficit, .parallax-maintenance, .parallax-diet")

      
      if ($(this).is(":visible")) {
        var contentHeight = modalContent.outerHeight()
        var windowHeight = $(window).height()

        
        parallaxBg.css("min-height", Math.max(contentHeight, windowHeight) + "px")
      }
    })
  }

  
  $(window).on("load resize scroll", adjustParallaxHeight)

  
  $(".modal").on("shown.bs.modal", adjustParallaxHeight)

  
  $(
    "#calculateBmi, #calculateTEE, #calculateSurplus, #calculateDeficitTEE, #calculateDeficit, #calculateMaintenance, #generateDiet",
  ).on("click", () => {
    
    setTimeout(adjustParallaxHeight, 500)
  })
})


$(document).ready(() => {
  
  var dietBtn = $("#dietButton")
  var dietModal = $("#dietModal")
  var closeDietModal = $("#closeDietModal")
  var header = $("nav")

  
  var allergyInput = $("#allergyInput")
  var addAllergyBtn = $("#addAllergy")
  var allergiesTags = $("#allergiesTags")
  var commonAllergies = $(".common-allergy")
  var noAllergies = $("#noAllergies")

  
  var generateDietBtn = $("#generateDiet")
  var weeklyDiet = $("#weeklyDiet")
  var loadingSpinner = $("#loadingSpinner")
  var dayTabs = $(".day-tab")
  var dayContents = $(".day-content")
  var printDietBtn = $("#printDiet")

  
  function wrapDietImages() {
    
    $(".diet-body img, .weekly-diet img, #weeklyDiet img").each(function () {
      if (!$(this).parent().hasClass("diet-image-wrapper")) {
        $(this).wrap('<div class="diet-image-wrapper"></div>')
      }
    })

    
    $("#weeklyDiet + img, .weekly-diet + img, .diet-summary + img").css({
      "max-width": "100%",
      display: "block",
      margin: "20px auto",
      border: "5px solid #333",
      "border-radius": "10px",
      "box-shadow": "0 10px 20px rgba(0, 0, 0, 0.3)",
    })
  }

  
  wrapDietImages()

  
  generateDietBtn.on("click", () => {
    
    setTimeout(wrapDietImages, 2000)
  })

  
  dietBtn.on("click", () => {
    
    dietModal.find(".parallax-diet").css("opacity", "0.85")
    dietModal.show()
    header.hide()

    
    setTimeout(wrapDietImages, 500)
  })

  
  closeDietModal.on("click", () => {
    closeAndResetDietModal()
  })

  
  function closeAndResetDietModal() {
    dietModal.hide()
    header.show()
    
    $("#targetCalories").val("")
    $('input[name="dietGoal"]').prop("checked", false)
    $(".goal-card").removeClass("selected")
    $("#allergiesTags").empty()
    $("#weeklyDiet").hide()
  }

  
  $(window).on("click", (event) => {
    if ($(event.target).is(dietModal)) {
      closeAndResetDietModal()
    }
  })

  
  $(".goal-card").on("click", function () {
    var goalValue = $(this).data("goal")
    var radioInput = $(this).find('input[type="radio"]')

    
    $(".goal-card").removeClass("selected")
    $(this).addClass("selected")

    
    $('input[name="dietGoal"]').prop("checked", false)
    radioInput.prop("checked", true)

        $(this).addClass("pulse-animation")
    setTimeout(() => {
      $(".goal-card").removeClass("pulse-animation")
    }, 1500)
  })

  
  let selectedAllergies = []
  
  
  $("#noAllergies").on("click", function() {
    $(this).toggleClass("active")
    if ($(this).hasClass("active")) {
      
      $(".common-allergy").removeClass("active")
      $("#allergiesTags").empty()
      selectedAllergies = []
    }
  })
  
  
  $(".common-allergy").on("click", function() {
    
    $("#noAllergies").removeClass("active")
    
    $(this).toggleClass("active")
    const allergy = $(this).data("allergy")
    
    if ($(this).hasClass("active")) {
      
      if (!selectedAllergies.includes(allergy)) {
        selectedAllergies.push(allergy)
        addAllergyTag(allergy)
      }
    } else {
      
      selectedAllergies = selectedAllergies.filter(a => a !== allergy)
      $(`#allergiesTags .allergy-tag[data-allergy="${allergy}"]`).remove()
    }
  })
  
  
  $("#addAllergy").on("click", function() {
    const allergy = $("#allergyInput").val().trim()
    if (allergy && !selectedAllergies.includes(allergy)) {
      
      $("#noAllergies").removeClass("active")
      
      selectedAllergies.push(allergy)
      addAllergyTag(allergy)
      $("#allergyInput").val("")
    }
  })
  
  
  function addAllergyTag(allergy) {
    const tag = `
      <div class="allergy-tag" data-allergy="${allergy}">
        ${allergy}
        <span class="remove-allergy">&times;</span>
      </div>
    `
    $("#allergiesTags").append(tag)
    
    
    $(".remove-allergy").off("click").on("click", function() {
      const allergyToRemove = $(this).parent().data("allergy")
      selectedAllergies = selectedAllergies.filter(a => a !== allergyToRemove)
      $(this).parent().remove()
      
      
      $(`.common-allergy[data-allergy="${allergyToRemove}"]`).removeClass("active")
    })
  }
  
  
  $("#generateDiet").on("click", function() {
    
    $("#loadingSpinner").show()
    $("#weeklyDiet").hide()
    
    
    const targetCalories = parseInt($("#targetCalories").val())
    let goal = $('input[name="dietGoal"]:checked').val() || "maintenance"
    
    
    if (!targetCalories || isNaN(targetCalories) || targetCalories < 1200 || targetCalories > 4000) {
      alert("Por favor ingresa un valor de calorías válido entre 1200 y 4000.")
      $("#loadingSpinner").hide()
      return
    }
    
    
    setTimeout(() => {
      try {
        
        const dietPlan = generateAntioquianDietPlan(targetCalories, goal, selectedAllergies)
        
        
        displayWeeklyDiet(dietPlan)
        
        
        $("#loadingSpinner").hide()
        $("#weeklyDiet").show()
        
        
        $("html, body").animate({
          scrollTop: $("#weeklyDiet").offset().top - 100
        }, 500)
      } catch (error) {
        console.error("Error al generar el plan de alimentación:", error)
        alert("Ocurrió un error al generar el plan de alimentación. Por favor intenta nuevamente.")
        $("#loadingSpinner").hide()
      }
    }, 1500)
  })
  
  
  function displayWeeklyDiet(dietPlan) {
    
    $("#goalSummary").text(dietPlan.summary.goalText)
    $("#avgCalories").text(`${dietPlan.summary.avgCalories} kcal`)
    $("#proteinPercent").text(`${dietPlan.summary.proteinPercent}%`)
    $("#carbsPercent").text(`${dietPlan.summary.carbsPercent}%`)
    $("#fatsPercent").text(`${dietPlan.summary.fatsPercent}%`)
    
    
    const dayMapping = {
      monday: "Lunes",
      tuesday: "Martes",
      wednesday: "Miércoles",
      thursday: "Jueves",
      friday: "Viernes",
      saturday: "Sábado",
      sunday: "Domingo"
    }
    
    
    const mealMapping = {
      desayuno: "Desayuno",
      mediaManana: "Media Mañana",
      almuerzo: "Almuerzo",
      merienda: "Merienda",
      cena: "Cena"
    }
    
    
    for (const day in dietPlan.weeklyPlan) {
      const dayPlan = dietPlan.weeklyPlan[day]
      const dayContent = $(`#${day}`)
      
      
      dayContent.empty()
      
      
      let dayHtml = `<h4 class="day-title">${dayMapping[day]}</h4>`
      
      
      for (const meal in dayPlan) {
        const mealPlan = dayPlan[meal]
        
        dayHtml += `
          <div class="meal-section">
            <h5 class="meal-title">${mealMapping[meal]} <span class="meal-calories">${mealPlan.totalCalories} kcal</span></h5>
            <ul class="meal-foods">
        `
        
        
        mealPlan.foods.forEach(food => {
          dayHtml += `
            <li class="food-item">
              <span class="food-name">${food.nombre}</span>
              <span class="food-portion">${food.porcion}</span>
              <div class="food-macros">
                <span class="macro-item"><i class="icon-fire"></i> ${food.calorias} kcal</span>
                <span class="macro-item"><i class="icon-beaker"></i> P: ${food.proteinas}g</span>
                <span class="macro-item"><i class="icon-gauge"></i> C: ${food.carbos}g</span>
                <span class="macro-item"><i class="icon-droplet"></i> G: ${food.grasas}g</span>
              </div>
            </li>
          `
        })
        
        dayHtml += `
            </ul>
          </div>
        `
      }
      
      
      dayContent.html(dayHtml)
    }
    
    
    $(".day-tab").off("click").on("click", function() {
      $(".day-tab").removeClass("active")
      $(this).addClass("active")
      
      const day = $(this).data("day")
      $(".day-content").removeClass("active")
      $(`#${day}`).addClass("active")
    })
    
    
    $("#printDiet").off("click").on("click", function() {
      const printWindow = window.open("", "_blank")
      
      let printContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plan de Alimentación BodyRun</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            h1, h2, h3, h4 { color: #ab5a18; }
            .header { text-align: center; margin-bottom: 30px; }
            .day { margin-bottom: 30px; break-inside: avoid; }
            .meal { margin-bottom: 20px; border: 1px solid #ddd; padding: 10px; break-inside: avoid; }
            .meal-title { background-color: #f5f5f5; padding: 5px; margin-top: 0; }
            .food-item { margin-bottom: 10px; }
            .food-name { font-weight: bold; }
            .food-portion { color: #666; font-style: italic; }
            .summary { margin-top: 30px; border-top: 2px solid #ab5a18; padding-top: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f5f5f5; }
            @media print {
              .day { page-break-inside: avoid; }
              .meal { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Plan de Alimentación Personalizado</h1>
            <p>BodyRun - Tu meta en segundos</p>
            <p>Objetivo: ${dietPlan.summary.goalText}</p>
            <p>Calorías diarias: ${dietPlan.summary.avgCalories} kcal</p>
          </div>
      `
      
      
      for (const day in dietPlan.weeklyPlan) {
        const dayPlan = dietPlan.weeklyPlan[day]
        
        printContent += `
          <div class="day">
            <h2>${dayMapping[day]}</h2>
        `
        
        
        for (const meal in dayPlan) {
          const mealPlan = dayPlan[meal]
          
          printContent += `
            <div class="meal">
              <h3 class="meal-title">${mealMapping[meal]} (${mealPlan.totalCalories} kcal)</h3>
          `
          
          
          mealPlan.foods.forEach(food => {
            printContent += `
              <div class="food-item">
                <span class="food-name">${food.nombre}</span> - 
                <span class="food-portion">${food.porcion}</span>
                <div>Calorías: ${food.calorias} kcal | Proteínas: ${food.proteinas}g | Carbohidratos: ${food.carbos}g | Grasas: ${food.grasas}g</div>
              </div>
            `
          })
          
          printContent += `
            </div>
          `
        }
        
        printContent += `
          </div>
        `
      }
      
      
      printContent += `
        <div class="summary">
          <h2>Resumen Nutricional</h2>
          <table>
            <tr>
              <th>Calorías Diarias</th>
              <th>Proteínas</th>
              <th>Carbohidratos</th>
              <th>Grasas</th>
            </tr>
            <tr>
              <td>${dietPlan.summary.avgCalories} kcal</td>
              <td>${dietPlan.summary.proteinPercent}%</td>
              <td>${dietPlan.summary.carbsPercent}%</td>
              <td>${dietPlan.summary.fatsPercent}%</td>
            </tr>
          </table>
          
          <h3>Recomendaciones</h3>
          <ul>
            <li>Mantén un horario regular de comidas.</li>
            <li>Bebe al menos 2 litros de agua al día.</li>
            <li>Ajusta las porciones según tu nivel de actividad física.</li>
            <li>Consulta con un profesional de la salud antes de hacer cambios significativos en tu alimentación.</li>
          </ul>
        </div>
        <footer style="text-align: center; margin-top: 30px; font-size: 12px; color: #666;">
          <p>Este plan es una guía general. Para recomendaciones específicas, consulta con un nutricionista.</p>
          <p>© BodyRun - Tu meta en segundos</p>
        </footer>
        </body>
        </html>
      `
      
      printWindow.document.open()
      printWindow.document.write(printContent)
      printWindow.document.close()
      
      
      printWindow.onload = function() {
        printWindow.print()
      }
    })
  }
  
  
  $(".day-tab").on("click", function() {
    $(".day-tab").removeClass("active")
    $(this).addClass("active")
    
    const day = $(this).data("day")
    $(".day-content").removeClass("active")
    $(`#${day}`).addClass("active")
  })
})


  
  
  $(document).ready(() => {
    
    $(".carousel").carousel({
      interval: 5000, 
      pause: "hover", 
      wrap: true, 
      keyboard: true, 
    })
  
    
    $(".carousel-control-prev").html(
      '<span class="icon-left-open" aria-hidden="true"></span><span class="sr-only">Anterior</span>',
    )
    $(".carousel-control-next").html(
      '<span class="icon-right-open" aria-hidden="true"></span><span class="sr-only">Siguiente</span>',
    )
  
    
    $(".carousel").on("slide.bs.carousel", function (e) {
      
      $(this).find(".carousel-item.active img").css({
        transform: "scale(1)",
        transition: "transform 0.5s ease",
      })
  
      
      setTimeout(() => {
        $(".carousel-item.active img").css({
          transform: "scale(1.05)",
          transition: "transform 8s ease",
        })
      }, 50)
    })
  
    
    setTimeout(() => {
      $(".carousel-item.active img").css({
        transform: "scale(1.05)",
        transition: "transform 8s ease",
      })
    }, 100)
  
    
    function adjustCarouselHeight() {
      
      if ($(window).width() < 576) {
        $(".carousel").height(350)
      } else if ($(window).width() < 768) {
        $(".carousel").height(400)
      } else if ($(window).width() < 992) {
        $(".carousel").height(500)
      } else {
        $(".carousel").height(600)
      }
    }
  
    
    $(window).on("load resize", adjustCarouselHeight)
  
    
    $(".carousel-item").prepend('<div class="carousel-overlay"></div>')
  
    
    $(".carousel-btn").remove()
  
    
    $("#mainCarousel").carousel("cycle")


    
    $("#moreInfoBtn").click(function(e) {
      e.preventDefault();
      
      
      $("#moreInfoModal").show();
      $("nav").hide();
      
      
      adjustParallaxHeight();
    });

    
    $("#closeMoreInfoModal").click(() => {
      $("#moreInfoModal").hide();
      $("nav").show();
    });

    
    $(window).click((event) => {
      if ($(event.target).is($("#moreInfoModal"))) {
        $("#moreInfoModal").hide();
        $("nav").show();
      }
    });

    
    $("#startNowBtn").click(function(e) {
      e.preventDefault();
      $("#moreInfoModal").hide();
      $("nav").show();
      
      
      $('html, body').animate({
        scrollTop: $(".container.my-5").offset().top - 100
      }, 1000);
    });


    
      $("#moreInfoBtn").click(function() {
        
        setTimeout(function() {
          
          $("#moreInfoModal .modal-content").scrollTop(0);
          
          
          const windowHeight = $(window).height();
          $("#moreInfoModal .modal-content").css("max-height", windowHeight * 0.9 + "px");
          
          
          adjustParallaxHeight();
        }, 100);
      });

      
      $(window).resize(function() {
        if ($("#moreInfoModal").is(":visible")) {
          const windowHeight = $(window).height();
          $("#moreInfoModal .modal-content").css("max-height", windowHeight * 0.9 + "px");
          adjustParallaxHeight();
        }
      });

      
      function adjustParallaxHeight() {
        
        if ($("#moreInfoModal").is(":visible")) {
          var modalContent = $("#moreInfoModal").find(".modal-content");
          var parallaxBg = $("#moreInfoModal").find(".parallax2");
          
          var contentHeight = modalContent.outerHeight();
          var windowHeight = $(window).height();
          
          
          parallaxBg.css("min-height", Math.max(contentHeight, windowHeight) + "px");
        }
      }

      
      $("#moreInfoBtn").click(function() {
        $("#moreInfoModal").show();
        $("#moreInfoModal .parallax2").css("opacity", "0.85");
        $("nav").hide();
        adjustParallaxHeight();
      });

      
      $(window).on("resize", adjustParallaxHeight);

      
      $(document).ready(function() {
        $('#puntuacion').on('input', function() {
            $('#ratingValue').text($(this).val());
        });
      });


      
      $(document).ready(function() {
        $('.service-btn').on('click', function() {
            var service = $(this).data('service');
            
            
            switch(service) {
                case 'dietas':
                    
                    $('#dietButton').click();
                    break;
                case 'asesorias':
                    
                    $('html, body').animate({
                        scrollTop: $('#contacto').offset().top - 100
                    }, 1000);
                    break;
                case 'descuentos':
                    
                    showDiscountInfo();
                    break;
            }
        });
        
        
        function showDiscountInfo() {
            
            if ($('#discountModal').length === 0) {
                
                var discountModal = `
                    <div id="discountModal" class="modal">
                        <div class="parallax2"></div>
                        <span class="close" id="closeDiscountModal">&times;</span>
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="info">
                                    <h2>Descuentos Exclusivos</h2>
                                    <p>En BodyRun ofrecemos descuentos especiales para nuestros usuarios registrados:</p>
                                    <ul>
                                        <li>20% de descuento en tu primer plan alimenticio personalizado</li>
                                        <li>Descuentos por referidos: Invita a un amigo y ambos obtienen 15% de descuento</li>
                                        <li>Planes trimestrales con 25% de descuento</li>
                                        <li>Asesorías gratuitas para usuarios premium</li>
                                    </ul>
                                    <p>¡Regístrate ahora para acceder a estas y más ofertas exclusivas!</p>
                                    <button class="btn btn-primary" id="registerForDiscounts">Registrarme</button>
                                </div>
                                <div class="image">
                                    <img src="img/descuentos exclusivos.png" alt="Descuentos exclusivos" id="discountImage" style="background-color: white; padding: 20px;">
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                $('body').append(discountModal);
                
                
                $('#closeDiscountModal').click(() => {
                    $('#discountModal').hide();
                    $('nav').show();
                });
                
                
                $(window).click((event) => {
                    if ($(event.target).is($('#discountModal'))) {
                        $('#discountModal').hide();
                        $('nav').show();
                    }
                });
                
                
                $('#registerForDiscounts').click(() => {
                    $('#discountModal').hide();
                    
                    alert('¡Gracias por tu interés! La función de registro estará disponible próximamente.');
                    $('nav').show();
                });
            }
            
            
            $('#discountModal').show();
            $('nav').hide();
        }
        
        
        $('.service-card').each(function(index) {
            
            setTimeout(() => {
                $(this).addClass('animated');
            }, 300 * index);
        });
      });

      
      $(document).ready(function() {
        
        $('#currentYear').text(new Date().getFullYear());
        
        
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('#backToTop').addClass('active');
            } else {
                $('#backToTop').removeClass('active');
            }
        });
        
        $('#backToTop').click(function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
        
        
        $('.service-link').on('click', function(e) {
            e.preventDefault();
            var service = $(this).data('service');
            
            
            switch(service) {
                case 'imc':
                    $('#infoButton').click();
                    break;
                case 'deficit':
                    $('#deficitButton').click();
                    break;
                case 'superavit':
                    $('#superavitButton').click();
                    break;
                case 'mantenimiento':
                    $('#maintenanceButton').click();
                    break;
                case 'dietas':
                    $('#dietButton').click();
                    break;
            }
        });
        
        
        $('#newsletterForm').on('submit', function(e) {
            e.preventDefault();
            var email = $(this).find('input[type="email"]').val();
            
            
            var toast = `
                <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header bg-success text-white">
                            <strong class="me-auto">Suscripción exitosa</strong>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            ¡Gracias por suscribirte a nuestro boletín! Pronto recibirás noticias y ofertas exclusivas.
                        </div>
                    </div>
                </div>
            `;
            
            
            if ($('.toast-container').length === 0) {
                $('body').append(toast);
            }
            
            
            $('.toast').toast('show');
            
            
            $(this).find('input[type="email"]').val('');
        });
      }); 

  
})



  
  