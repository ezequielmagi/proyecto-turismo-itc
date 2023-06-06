// Botón para cambiar el tema
const bDarkTheme = document.getElementById("b-dark-theme")

var tema_activo = false

// Componentes - Header
const body = document.getElementsByTagName("body")[0]

// Componentes - Header
const h1_header = document.getElementById("h1-header")
const lista_header = document.getElementById("lista-header")
const b_lupa_header = document.getElementById("b-lupa-header")
const b_user_header = document.getElementById("b-user-header")
const header = document.getElementsByTagName("header")[0]
const p_titulo_header = document.getElementById("p-titulo-header")
const b_mas_header = document.getElementById("b-mas-header")


//Componentes - section - recomendaciones
const h2_sec_cards = document.getElementById("h2-sec-cards")
const card_sec_cards = document.getElementById("card-sec-cards")
const card_sec_cards_1 = document.getElementById("card-sec-cards-1")
const card_sec_cards_2 = document.getElementById("card-sec-cards-2")
const card_sec_cards_3 = document.getElementById("card-sec-cards-3")
const card_sec_cards_4 = document.getElementById("card-sec-cards-4")

//Componentes - section - preguntas
const h5_sec_preg = document.getElementById("h5-sec-preg")
const h5_sec_preg_0 = document.getElementById("h5-sec-preg-0")
const h5_sec_preg_1  = document.getElementById("h5-sec-preg-1")
const h5_sec_preg_2  = document.getElementById("h5-sec-preg-2")
// -- Párrafos
const p_sec_preg_0 = document.getElementById("p-sec-preg-0")
const p_sec_preg_1 = document.getElementById("p-sec-preg-1")
const p_sec_preg_2 = document.getElementById("p-sec-preg-2")

//Componentes - footer
const footer = document.getElementById("footer")
const h6_footer = document.getElementById("h6-footer")
const lista_footer = document.getElementById("lista-footer")

bDarkTheme.addEventListener("click", ()=> {

    if(tema_activo == false){
        // Quitamos los colores en blanco
    header.classList.remove("sm:bg-white")
    h1_header.classList.remove("text-red-travel")
    lista_header.classList.remove("text-red-travel")
    p_titulo_header.classList.remove("bg-white/50")
    p_titulo_header.classList.remove("text-red-travel")
    p_titulo_header.classList.remove("border-red-travel")
    b_mas_header.classList.remove("bg-white")
    b_mas_header.classList.remove("text-red-travel")
    b_lupa_header.classList.remove("text-red-travel")
    b_user_header.classList.remove("text-red-travel")
    bDarkTheme.classList.remove("text-red-travel")

    h2_sec_cards.classList.remove("text-red-travel")
    card_sec_cards.classList.remove("Card")
    card_sec_cards_1.classList.remove("Card")
    card_sec_cards_2.classList.remove("Card")
    card_sec_cards_3.classList.remove("Card")
    card_sec_cards_4.classList.remove("Card")

    h5_sec_preg.classList.remove("text-red-travel")
    h5_sec_preg_0.classList.remove("Titulo_pago")
    h5_sec_preg_1.classList.remove("Titulo_pago")
    h5_sec_preg_2.classList.remove("Titulo_pago")

    h6_footer.classList.remove("text-dark-gray-travel") 
    lista_footer.classList.remove("text-dark-gray-travel")
    footer.classList.remove("bg-gray-travel")

    // Ponemos los clores en negro  
    body.classList.add("bg-black")
    
    header.classList.add("sm:bg-black")
    header.classList.add("text-white")
    p_titulo_header.classList.add("bg-black/50")
    p_titulo_header.classList.add("text-white")
    b_mas_header.classList.add("bg-black")
    b_mas_header.classList.add("text-white")

    h2_sec_cards.classList.add("text-white")
    card_sec_cards.classList.add("Card-dark")
    card_sec_cards_1.classList.add("Card-dark")
    card_sec_cards_2.classList.add("Card-dark")
    card_sec_cards_3.classList.add("Card-dark")
    card_sec_cards_4.classList.add("Card-dark")

    h5_sec_preg.classList.add("text-white")
    h5_sec_preg_0.classList.add("Titulo_pago-dark")
    h5_sec_preg_1.classList.add("Titulo_pago-dark")
    h5_sec_preg_2.classList.add("Titulo_pago-dark")
    p_sec_preg_0.classList.add("text-white")
    p_sec_preg_1.classList.add("text-white")
    p_sec_preg_2.classList.add("text-white")

    h6_footer.classList.add("text-white") 
    lista_footer.classList.add("text-white")
    footer.classList.add("bg-gray-950")

    tema_activo = true
    }else{
        
    // Ponemos los clores en negro  
    body.classList.remove("bg-black")
    
    header.classList.remove("sm:bg-black")
    header.classList.remove("text-white")
    p_titulo_header.classList.remove("bg-black/50")
    p_titulo_header.classList.remove("text-white")
    b_mas_header.classList.remove("bg-black")
    b_mas_header.classList.remove("text-white")

    h2_sec_cards.classList.remove("text-white")
    card_sec_cards.classList.remove("Card-dark")
    card_sec_cards_1.classList.remove("Card-dark")
    card_sec_cards_2.classList.remove("Card-dark")
    card_sec_cards_3.classList.remove("Card-dark")
    card_sec_cards_4.classList.remove("Card-dark")

    h5_sec_preg.classList.remove("text-white")
    h5_sec_preg_0.classList.remove("Titulo_pago-dark")
    h5_sec_preg_1.classList.remove("Titulo_pago-dark")
    h5_sec_preg_2.classList.remove("Titulo_pago-dark")
    p_sec_preg_0.classList.remove("text-white")
    p_sec_preg_1.classList.remove("text-white")
    p_sec_preg_2.classList.remove("text-white")

    h6_footer.classList.remove("text-white") 
    lista_footer.classList.remove("text-white")
    footer.classList.remove("bg-gray-950")


    // Ponemos el tema en blanco
    header.classList.add("sm:bg-white")
    h1_header.classList.add("text-red-travel")
    lista_header.classList.add("text-red-travel")
    p_titulo_header.classList.add("bg-white/50")
    p_titulo_header.classList.add("text-red-travel")
    p_titulo_header.classList.add("border-red-travel")
    b_mas_header.classList.add("bg-white")
    b_mas_header.classList.add("text-red-travel")
    b_lupa_header.classList.add("text-red-travel")
    b_user_header.classList.add("text-red-travel")
    bDarkTheme.classList.add("text-red-travel")

    h2_sec_cards.classList.add("text-red-travel")
    card_sec_cards.classList.add("Card")
    card_sec_cards_1.classList.add("Card")
    card_sec_cards_2.classList.add("Card")
    card_sec_cards_3.classList.add("Card")
    card_sec_cards_4.classList.add("Card")

    h5_sec_preg.classList.add("text-red-travel")
    h5_sec_preg_0.classList.add("Titulo_pago")
    h5_sec_preg_1.classList.add("Titulo_pago")
    h5_sec_preg_2.classList.add("Titulo_pago")

    h6_footer.classList.add("text-dark-gray-travel") 
    lista_footer.classList.add("text-dark-gray-travel")
    footer.classList.add("bg-gray-travel")

    tema_activo = false
    }

},false)