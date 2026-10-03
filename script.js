/* =========================================================
   TRANSPORT WEBSITE
   Full script
========================================================= */


/* =========================================================
   EMAILJS CONFIG
========================================================= */

const EMAILJS_PUBLIC_KEY = "oF3OXMAz7i6Fpw6I4";
const EMAILJS_SERVICE_ID = "service_2ra265l";
const EMAILJS_TEMPLATE_ID = "template_o8m3y0b";


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    de: {

        navServices: "Leistungen",
        navPrices: "Preise",
        navGallery: "Galerie",
        navAbout: "Über uns",
        navContact: "Kontakt",

        heroLabel: "TRANSPORT & UMZÜGE",
        heroTitle: "Ihr Transport.<br>Unser Service.",
        heroText:
            "Zuverlässige Transporte, Umzüge und Lieferungen in Deutschland und ganz Europa.",
        heroButton: "Preis berechnen",
        heroContact: "Kontakt",

        servicesLabel: "UNSERE LEISTUNGEN",
        servicesTitle: "Transport für fast alles.",
        servicesText:
            "Von einzelnen Möbelstücken bis zum kompletten Umzug.",

        serviceMove: "Umzüge",
        serviceMoveText:
            "Private Umzüge, Wohnungswechsel und komplette Haushaltsauflösungen.",

        serviceFurniture: "Möbeltransport",
        serviceFurnitureText:
            "Sicherer Transport von Möbeln, Tischen, Schränken und anderen Gegenständen.",

        serviceMotorcycle: "Motorradtransport",
        serviceMotorcycleText:
            "Sicherer Transport von Motorrädern innerhalb Deutschlands und Europas.",

        serviceBike: "Fahrradtransport",
        serviceBikeText:
            "Fahrräder, E-Bikes und größere Fahrradtransporte.",

        serviceSmall: "Kleintransporte",
        serviceSmallText:
            "Pakete, Kartons, Haushaltsgegenstände und kleinere Lieferungen.",

        serviceIndividual: "Individuelle Transporte",
        serviceIndividualText:
            "Individuelle Lösungen für besondere Transportaufträge.",

        calculatorLabel: "PREISRECHNER",
        calculatorTitle: "Was könnte Ihr Transport kosten?",
        calculatorText:
            "Berechnen Sie schnell und unverbindlich einen Richtwert.",

        fromLabel: "Von",
        toLabel: "Nach",

        cargoLabel: "Transportart",
        cargoPlaceholder: "Bitte auswählen",

        cargoMove: "Umzug",
        cargoFurniture: "Möbel",
        cargoMotorcycle: "Motorrad",
        cargoBicycle: "Fahrrad",
        cargoBoxes: "Kartons",

        volumeLabel: "Volumen",
        volumePlaceholder: "Bitte auswählen",

        volumeSmall: "Klein",
        volumeMedium: "Mittel",
        volumeLarge: "Groß",

        floorFromLabel: "Etage Abholung",
        floorToLabel: "Etage Lieferung",

        groundFloor: "Erdgeschoss",

        elevatorLabel: "Aufzug",
        yes: "Ja",
        no: "Nein",

        helpersLabel: "Helfer",
        noHelpers: "Keine Helfer",
        oneHelper: "1 Helfer",
        twoHelpers: "2 Helfer",

        calculateButton: "Preis berechnen",

        fieldRequired: "Bitte ausfüllen",

        calculatorResultTitle: "Geschätzter Richtwert",
        calculatorResultText:
            "Dies ist eine unverbindliche Beispielberechnung. Der endgültige Preis hängt unter anderem von Entfernung, Aufwand und Ladegut ab.",

        galleryLabel: "UNSERE ARBEIT",
        galleryTitle: "Echte Transporte.",
        galleryText:
            "Einblicke in bereits durchgeführte Aufträge.",

        filterAll: "Alle",
        filterMoves: "Umzüge",
        filterFurniture: "Möbel",
        filterMotorcycles: "Motorräder",
        filterBicycles: "Fahrräder",

        galleryMove: "Umzug",
        galleryFurniture: "Möbeltransport",
        galleryMotorcycle: "Motorradtransport",
        galleryBicycle: "Fahrradtransport",

        route1: "Augsburg → München",
        route2: "München → Augsburg",
        route3: "Stuttgart → München",
        route4: "München → Nürnberg",
        route5: "Ingolstadt → München",
        route6: "Augsburg → Stuttgart",
        route7: "München → Berlin",
        route8: "München → Zürich",

        aboutLabel: "ÜBER UNS",
        aboutTitle:
            "Persönlicher Service statt anonymer Spedition.",
        aboutText1:
            "Wir bieten zuverlässige Transportlösungen für Privatpersonen und Unternehmen.",
        aboutText2:
            "Mit Erfahrung, einem Mercedes Sprinter und persönlichem Einsatz kümmern wir uns um jeden Auftrag.",

        statExperience: "Jahre Erfahrung",
        statEurope: "Transporte in Europa",
        statContact: "Erreichbarkeit nach Absprache",

        contactLabel: "KONTAKT",
        contactTitle: "Haben Sie einen Transport?",
        contactText:
            "Schreiben Sie uns und wir besprechen Ihren Auftrag persönlich.",

        contactPhone: "Telefon",
        contactWhatsapp: "Nachricht schreiben",

        nameLabel: "Name",
        phoneLabel: "Telefon",
        messageLabel: "Nachricht",
        sendButton: "Anfrage senden",

        footerText:
            "Transporte und Umzüge in Deutschland und Europa.",

        formThanks:
            "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet."
    },


    ru: {

        navServices: "Услуги",
        navPrices: "Цены",
        navGallery: "Галерея",
        navAbout: "О нас",
        navContact: "Контакты",

        heroLabel: "ПЕРЕВОЗКИ И ПЕРЕЕЗДЫ",
        heroTitle: "Ваш груз.<br>Наша работа.",
        heroText:
            "Надёжные перевозки, переезды и доставки по Германии и всей Европе.",
        heroButton: "Рассчитать цену",
        heroContact: "Контакты",

        servicesLabel: "НАШИ УСЛУГИ",
        servicesTitle: "Перевезём практически всё.",
        servicesText:
            "От отдельных предметов мебели до полного переезда.",

        serviceMove: "Переезды",
        serviceMoveText:
            "Квартирные и частные переезды, а также перевозка вещей.",

        serviceFurniture: "Перевозка мебели",
        serviceFurnitureText:
            "Безопасная перевозка мебели, столов, шкафов и других предметов.",

        serviceMotorcycle: "Перевозка мотоциклов",
        serviceMotorcycleText:
            "Безопасная перевозка мотоциклов по Германии и Европе.",

        serviceBike: "Перевозка велосипедов",
        serviceBikeText:
            "Велосипеды, электровелосипеды и крупные велосипедные перевозки.",

        serviceSmall: "Мелкие перевозки",
        serviceSmallText:
            "Коробки, посылки, вещи и небольшие грузы.",

        serviceIndividual: "Индивидуальные перевозки",
        serviceIndividualText:
            "Индивидуальные решения для нестандартных транспортных задач.",

        calculatorLabel: "КАЛЬКУЛЯТОР",
        calculatorTitle: "Сколько может стоить перевозка?",
        calculatorText:
            "Быстро рассчитайте примерную стоимость перевозки.",

        fromLabel: "Откуда",
        toLabel: "Куда",

        cargoLabel: "Тип перевозки",
        cargoPlaceholder: "Выберите вариант",

        cargoMove: "Переезд",
        cargoFurniture: "Мебель",
        cargoMotorcycle: "Мотоцикл",
        cargoBicycle: "Велосипед",
        cargoBoxes: "Коробки",

        volumeLabel: "Объём",
        volumePlaceholder: "Выберите объём",

        volumeSmall: "Маленький",
        volumeMedium: "Средний",
        volumeLarge: "Большой",

        floorFromLabel: "Этаж загрузки",
        floorToLabel: "Этаж доставки",

        groundFloor: "Первый этаж / земля",

        elevatorLabel: "Лифт",
        yes: "Да",
        no: "Нет",

        helpersLabel: "Помощники",
        noHelpers: "Без помощников",
        oneHelper: "1 помощник",
        twoHelpers: "2 помощника",

        calculateButton: "Рассчитать цену",

        fieldRequired: "Заполните поле",

        calculatorResultTitle: "Примерная стоимость",
        calculatorResultText:
            "Это ориентировочный расчёт. Итоговая цена зависит от расстояния, объёма работы и груза.",

        galleryLabel: "НАША РАБОТА",
        galleryTitle: "Реальные перевозки.",
        galleryText:
            "Примеры уже выполненных заказов.",

        filterAll: "Все",
        filterMoves: "Переезды",
        filterFurniture: "Мебель",
        filterMotorcycles: "Мотоциклы",
        filterBicycles: "Велосипеды",

        galleryMove: "Переезд",
        galleryFurniture: "Перевозка мебели",
        galleryMotorcycle: "Перевозка мотоцикла",
        galleryBicycle: "Перевозка велосипеда",

        route1: "Аугсбург → Мюнхен",
        route2: "Мюнхен → Аугсбург",
        route3: "Штутгарт → Мюнхен",
        route4: "Мюнхен → Нюрнберг",
        route5: "Ингольштадт → Мюнхен",
        route6: "Аугсбург → Штутгарт",
        route7: "Мюнхен → Берлин",
        route8: "Мюнхен → Цюрих",

        aboutLabel: "О НАС",
        aboutTitle:
            "Личный подход вместо безликой транспортной компании.",
        aboutText1:
            "Мы предлагаем надёжные транспортные решения для частных лиц и компаний.",
        aboutText2:
            "Опыт, Mercedes Sprinter и личный подход позволяют нам внимательно относиться к каждому заказу.",

        statExperience: "года опыта",
        statEurope: "перевозки по Европе",
        statContact: "связь по договорённости",

        contactLabel: "КОНТАКТЫ",
        contactTitle: "У вас есть груз?",
        contactText:
            "Напишите нам, и мы лично обсудим вашу перевозку.",

        contactPhone: "Телефон",
        contactWhatsapp: "Написать сообщение",

        nameLabel: "Имя",
        phoneLabel: "Телефон",
        messageLabel: "Сообщение",
        sendButton: "Отправить запрос",

        footerText:
            "Перевозки и переезды по Германии и Европе.",

        formThanks:
            "Спасибо! Ваш запрос успешно отправлен."
    },


    ua: {

        navServices: "Послуги",
        navPrices: "Ціни",
        navGallery: "Галерея",
        navAbout: "Про нас",
        navContact: "Контакти",

        heroLabel: "ПЕРЕВЕЗЕННЯ ТА ПЕРЕЇЗДИ",
        heroTitle: "Ваш вантаж.<br>Наша робота.",
        heroText:
            "Надійні перевезення, переїзди та доставки по Німеччині та всій Європі.",
        heroButton: "Розрахувати ціну",
        heroContact: "Контакти",

        servicesLabel: "НАШІ ПОСЛУГИ",
        servicesTitle: "Перевеземо практично все.",
        servicesText:
            "Від окремих меблів до повного переїзду.",

        serviceMove: "Переїзди",
        serviceMoveText:
            "Квартирні та приватні переїзди, а також перевезення речей.",

        serviceFurniture: "Перевезення меблів",
        serviceFurnitureText:
            "Безпечне перевезення меблів, столів, шаф та інших предметів.",

        serviceMotorcycle: "Перевезення мотоциклів",
        serviceMotorcycleText:
            "Безпечне перевезення мотоциклів по Німеччині та Європі.",

        serviceBike: "Перевезення велосипедів",
        serviceBikeText:
            "Велосипеди, електровелосипеди та великі велосипедні перевезення.",

        serviceSmall: "Малі перевезення",
        serviceSmallText:
            "Коробки, посилки, речі та невеликі вантажі.",

        serviceIndividual: "Індивідуальні перевезення",
        serviceIndividualText:
            "Індивідуальні рішення для нестандартних транспортних завдань.",

        calculatorLabel: "КАЛЬКУЛЯТОР",
        calculatorTitle: "Скільки може коштувати перевезення?",
        calculatorText:
            "Швидко розрахуйте орієнтовну вартість перевезення.",

        fromLabel: "Звідки",
        toLabel: "Куди",

        cargoLabel: "Тип перевезення",
        cargoPlaceholder: "Оберіть варіант",

        cargoMove: "Переїзд",
        cargoFurniture: "Меблі",
        cargoMotorcycle: "Мотоцикл",
        cargoBicycle: "Велосипед",
        cargoBoxes: "Коробки",

        volumeLabel: "Об'єм",
        volumePlaceholder: "Оберіть об'єм",

        volumeSmall: "Малий",
        volumeMedium: "Середній",
        volumeLarge: "Великий",

        floorFromLabel: "Поверх завантаження",
        floorToLabel: "Поверх доставки",

        groundFloor: "Перший поверх / земля",

        elevatorLabel: "Ліфт",
        yes: "Так",
        no: "Ні",

        helpersLabel: "Помічники",
        noHelpers: "Без помічників",
        oneHelper: "1 помічник",
        twoHelpers: "2 помічники",

        calculateButton: "Розрахувати ціну",

        fieldRequired: "Заповніть поле",

        calculatorResultTitle: "Орієнтовна вартість",
        calculatorResultText:
            "Це орієнтовний розрахунок. Фінальна ціна залежить від відстані, обсягу роботи та вантажу.",

        galleryLabel: "НАША РОБОТА",
        galleryTitle: "Реальні перевезення.",
        galleryText:
            "Приклади вже виконаних замовлень.",

        filterAll: "Всі",
        filterMoves: "Переїзди",
        filterFurniture: "Меблі",
        filterMotorcycles: "Мотоцикли",
        filterBicycles: "Велосипеди",

        galleryMove: "Переїзд",
        galleryFurniture: "Перевезення меблів",
        galleryMotorcycle: "Перевезення мотоцикла",
        galleryBicycle: "Перевезення велосипеда",

        route1: "Аугсбург → Мюнхен",
        route2: "Мюнхен → Аугсбург",
        route3: "Штутгарт → Мюнхен",
        route4: "Мюнхен → Нюрнберг",
        route5: "Інгольштадт → Мюнхен",
        route6: "Аугсбург → Штутгарт",
        route7: "Мюнхен → Берлін",
        route8: "Мюнхен → Цюрих",

        aboutLabel: "ПРО НАС",
        aboutTitle:
            "Особистий підхід замість безликої транспортної компанії.",
        aboutText1:
            "Ми пропонуємо надійні транспортні рішення для приватних клієнтів та компаній.",
        aboutText2:
            "Досвід, Mercedes Sprinter та особистий підхід дозволяють нам уважно ставитися до кожного замовлення.",

        statExperience: "роки досвіду",
        statEurope: "перевезення по Європі",
        statContact: "зв'язок за домовленістю",

        contactLabel: "КОНТАКТИ",
        contactTitle: "У вас є вантаж?",
        contactText:
            "Напишіть нам, і ми особисто обговоримо ваше перевезення.",

        contactPhone: "Телефон",
        contactWhatsapp: "Написати повідомлення",

        nameLabel: "Ім'я",
        phoneLabel: "Телефон",
        messageLabel: "Повідомлення",
        sendButton: "Надіслати запит",

        footerText:
            "Перевезення та переїзди по Німеччині та Європі.",

        formThanks:
            "Дякуємо! Ваш запит успішно надіслано."
    }

};


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentLanguage =
    localStorage.getItem("transportLanguage") || "de";

if (!translations[currentLanguage]) {
    currentLanguage = "de";
}


const selectState = {
    cargo: null,
    volume: null,
    floorFrom: "0",
    floorTo: "0",
    elevator: "no",
    helpers: "0"
};


const cityState = {

    from: {
        place: null,
        timer: null,
        requestId: 0
    },

    to: {
        place: null,
        timer: null,
        requestId: 0
    }

};


const cityCache = new Map();
const routeCache = new Map();


/* =========================================================
   EU ONLY
========================================================= */

const EU_COUNTRIES = [
    "AT",
    "BE",
    "BG",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HU",
    "IE",
    "IT",
    "LV",
    "LT",
    "LU",
    "MT",
    "NL",
    "PL",
    "PT",
    "RO",
    "SK",
    "SI",
    "ES",
    "SE"
];


/* =========================================================
   HELPERS
========================================================= */

function t(key) {

    return (
        translations[currentLanguage] &&
        translations[currentLanguage][key] !== undefined
    )
        ? translations[currentLanguage][key]
        : key;

}


function normalizeText(value) {

    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ё/g, "е")
        .replace(/[’']/g, "")
        .replace(/[^\p{L}\p{N}]+/gu, " ")
        .trim();

}


function escapeHtml(value) {

    return String(value || "")
        .replace(/[&<>'"]/g, function(char) {

            const map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                "\"": "&quot;"
            };

            return map[char];

        });

}


function debounce(fn, delay) {

    let timer = null;

    return function() {

        const args = arguments;

        clearTimeout(timer);

        timer = setTimeout(function() {
            fn.apply(null, args);
        }, delay);

    };

}


/* =========================================================
   LANGUAGE
========================================================= */

function updateSelectedSelectTexts() {

    document
        .querySelectorAll(".custom-select")
        .forEach(function(select) {

            const type = select.dataset.select;
            const value = selectState[type];

            if (
                value === null ||
                value === undefined
            ) {
                return;
            }

            const options =
                select.querySelectorAll(".custom-option");

            let selectedOption = null;

            options.forEach(function(option) {

                if (
                    String(option.dataset.value) ===
                    String(value)
                ) {
                    selectedOption = option;
                }

            });

            if (!selectedOption) {
                return;
            }

            options.forEach(function(option) {

                option.classList.toggle(
                    "selected",
                    option === selectedOption
                );

            });

            const textElement =
                select.querySelector(
                    ".custom-select-button span:first-child"
                );

            if (!textElement) {
                return;
            }

            const translationKey =
                selectedOption.dataset.i18n;

            if (
                translationKey &&
                translations[currentLanguage][translationKey]
            ) {

                textElement.innerHTML =
                    translations[currentLanguage][translationKey];

            } else {

                textElement.textContent =
                    selectedOption.textContent.trim();

            }

        });

}


function changeLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage = language;

    localStorage.setItem(
        "transportLanguage",
        language
    );

    document.documentElement.lang =
        language;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(function(element) {

            const key =
                element.dataset.i18n;

            if (
                translations[language] &&
                translations[language][key] !== undefined
            ) {

                element.innerHTML =
                    translations[language][key];

            }

        });


    document
        .querySelectorAll(
            "[data-placeholder-" +
            language +
            "]"
        )
        .forEach(function(input) {

            input.placeholder =
                input.dataset[
                    "placeholder-" +
                    language
                ];

        });


    document
        .querySelectorAll(".lang-btn")
        .forEach(function(button) {

            button.classList.toggle(
                "active",
                button.dataset.lang === language
            );

        });


    updateSelectedSelectTexts();

    hideAllCitySuggestions();

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

    const button =
        document.querySelector(".mobile-menu-btn");

    const nav =
        document.querySelector(".nav");

    if (!button || !nav) {
        return;
    }

    button.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            nav.classList.toggle(
                "active"
            );

        }
    );


    nav
        .querySelectorAll("a")
        .forEach(function(link) {

            link.addEventListener(
                "click",
                function() {

                    nav.classList.remove(
                        "active"
                    );

                }
            );

        });


    document.addEventListener(
        "click",
        function(event) {

            if (
                !nav.contains(event.target) &&
                event.target !== button
            ) {

                nav.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   CUSTOM SELECTS
========================================================= */

function clearGroupError(element) {

    const group =
        element.closest(".form-group");

    if (!group) {
        return;
    }

    group.classList.remove(
        "has-error"
    );

    const error =
        group.querySelector(".field-error");

    if (!error) {
        return;
    }

    error.classList.remove(
        "active"
    );

    error.textContent = "";

}


function initCustomSelects() {

    document
        .querySelectorAll(".custom-select")
        .forEach(function(select) {

            const type =
                select.dataset.select;

            const button =
                select.querySelector(
                    ".custom-select-button"
                );

            if (!button) {
                return;
            }


            button.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();


                    document
                        .querySelectorAll(
                            ".custom-select.open"
                        )
                        .forEach(function(other) {

                            if (
                                other !== select
                            ) {

                                other.classList.remove(
                                    "open"
                                );

                            }

                        });


                    select.classList.toggle(
                        "open"
                    );

                }
            );


            select
                .querySelectorAll(".custom-option")
                .forEach(function(option) {

                    option.addEventListener(
                        "click",
                        function(event) {

                            event.stopPropagation();

                            const value =
                                option.dataset.value;

                            selectState[type] =
                                value;


                            select
                                .querySelectorAll(
                                    ".custom-option"
                                )
                                .forEach(
                                    function(item) {

                                        item.classList.remove(
                                            "selected"
                                        );

                                    }
                                );


                            option.classList.add(
                                "selected"
                            );


                            const textElement =
                                button.querySelector(
                                    "span:first-child"
                                );

                            const translationKey =
                                option.dataset.i18n;


                            if (
                                translationKey &&
                                translations[
                                    currentLanguage
                                ][translationKey]
                            ) {

                                textElement.innerHTML =
                                    translations[
                                        currentLanguage
                                    ][translationKey];

                            } else {

                                textElement.textContent =
                                    option.textContent.trim();

                            }


                            select.classList.remove(
                                "open"
                            );

                            clearGroupError(
                                select
                            );

                        }
                    );

                });

        });


    document.addEventListener(
        "click",
        function() {

            document
                .querySelectorAll(
                    ".custom-select.open"
                )
                .forEach(function(select) {

                    select.classList.remove(
                        "open"
                    );

                });

        }
    );

}


function initialiseSelectState() {

    document
        .querySelectorAll(".custom-select")
        .forEach(function(select) {

            const type =
                select.dataset.select;

            if (
                selectState[type] === undefined
            ) {
                return;
            }

            const value =
                selectState[type];

            const options =
                select.querySelectorAll(
                    ".custom-option"
                );

            let selectedOption = null;

            options.forEach(function(option) {

                if (
                    String(option.dataset.value) ===
                    String(value)
                ) {

                    selectedOption = option;

                }

            });

            options.forEach(function(option) {

                option.classList.toggle(
                    "selected",
                    option === selectedOption
                );

            });

        });

    updateSelectedSelectTexts();

}


/* =========================================================
   ERRORS
========================================================= */

function showFieldError(id) {

    const error =
        document.getElementById(id);

    if (!error) {
        return;
    }

    const group =
        error.closest(".form-group");

    if (group) {

        group.classList.add(
            "has-error"
        );

    }

    error.textContent =
        t("fieldRequired");

    error.classList.add(
        "active"
    );

}


function clearFieldError(id) {

    const error =
        document.getElementById(id);

    if (!error) {
        return;
    }

    const group =
        error.closest(".form-group");

    if (group) {

        group.classList.remove(
            "has-error"
        );

    }

    error.textContent =
        "";

    error.classList.remove(
        "active"
    );

}


/* =========================================================
   CITY SEARCH STYLES
========================================================= */

function injectCitySearchStyles() {

    if (
        document.getElementById(
            "transport-city-search-styles"
        )
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "transport-city-search-styles";

    style.textContent = `

        .city-suggestions {
            position: fixed !important;
            display: none;
            z-index: 999999 !important;
            margin: 0 !important;
            padding: 6px !important;
            background: #111 !important;
            border: 1px solid rgba(255,255,255,.12) !important;
            border-radius: 12px !important;
            box-shadow: 0 18px 50px rgba(0,0,0,.35) !important;
            max-height: 320px !important;
            overflow-y: auto !important;
            box-sizing: border-box !important;
        }

        .city-suggestions.active {
            display: block !important;
        }

        .city-suggestion {
            width: 100% !important;
            display: flex !important;
            align-items: flex-start !important;
            justify-content: space-between !important;
            gap: 18px !important;
            padding: 12px 13px !important;
            margin: 0 !important;
            border: 0 !important;
            border-radius: 9px !important;
            background: transparent !important;
            color: #fff !important;
            text-align: left !important;
            cursor: pointer !important;
            font-family: inherit !important;
        }

        .city-suggestion:hover {
            background: rgba(255,255,255,.08) !important;
        }

        .city-suggestion strong {
            display: block !important;
            font-size: 14px !important;
            line-height: 1.3 !important;
            font-weight: 700 !important;
        }

        .city-suggestion span {
            display: block !important;
            font-size: 11px !important;
            line-height: 1.3 !important;
            opacity: .55 !important;
            white-space: nowrap !important;
        }

        .city-search-loading {
            padding: 12px 13px !important;
            color: rgba(255,255,255,.65) !important;
            font-size: 12px !important;
        }

        @media (max-width: 600px) {

            .city-suggestions {
                max-height: 260px !important;
                border-radius: 10px !important;
            }

            .city-suggestion {
                padding: 11px !important;
            }

        }

    `;

    document.head.appendChild(style);

}


/* =========================================================
   CITY SEARCH POSITION
========================================================= */

let activeCitySuggestions = null;
let activeCityInput = null;


function positionCitySuggestions(
    container,
    input
) {

    if (
        !container ||
        !input
    ) {
        return;
    }

    const rect =
        input.getBoundingClientRect();

    container.style.left =
        rect.left + "px";

    container.style.top =
        rect.bottom + 6 + "px";

    container.style.width =
        rect.width + "px";

}


function hideCitySuggestions(container) {

    if (!container) {
        return;
    }

    container.classList.remove(
        "active"
    );

    container.innerHTML = "";

    if (
        activeCitySuggestions ===
        container
    ) {

        activeCitySuggestions = null;
        activeCityInput = null;

    }

}


function hideAllCitySuggestions() {

    document
        .querySelectorAll(".city-suggestions")
        .forEach(function(container) {

            hideCitySuggestions(
                container
            );

        });

}


function refreshActiveCitySuggestionPosition() {

    if (
        activeCitySuggestions &&
        activeCityInput &&
        activeCitySuggestions.classList.contains(
            "active"
        )
    ) {

        positionCitySuggestions(
            activeCitySuggestions,
            activeCityInput
        );

    }

}


/* =========================================================
   PHOTON
========================================================= */

function countryCodesQueryParams() {

    const params =
        new URLSearchParams();

    EU_COUNTRIES.forEach(
        function(code) {

            params.append(
                "countrycode",
                code
            );

        }
    );

    return params;

}


function getSearchLanguages(query) {

    const languages = [];

    const hasCyrillic =
        /[\u0400-\u04FF]/.test(
            query
        );

    const hasUkrainian =
        /[іїєґІЇЄҐ]/.test(
            query
        );

    if (hasCyrillic) {

        languages.push(
            hasUkrainian
                ? "uk"
                : "ru"
        );

        languages.push(
            hasUkrainian
                ? "ru"
                : "uk"
        );

    }

    languages.push(
        "de"
    );

    return [
        ...new Set(languages)
    ];

}


async function photonSearch(
    query,
    language
) {

    const normalized =
        normalizeText(query);

    const cacheKey =
        "photon|" +
        normalized +
        "|" +
        language;

    if (
        cityCache.has(cacheKey)
    ) {

        return cityCache.get(
            cacheKey
        );

    }


    const params =
        countryCodesQueryParams();

    params.set(
        "q",
        query
    );

    params.set(
        "limit",
        "50"
    );

    params.set(
        "lang",
        language
    );

    params.append(
        "layer",
        "city"
    );

    params.append(
        "layer",
        "locality"
    );


    const url =
        "https://photon.komoot.io/api/?" +
        params.toString();


    const response =
        await fetch(
            url,
            {
                headers: {
                    "Accept":
                        "application/json"
                }
            }
        );


    if (!response.ok) {

        throw new Error(
            "Photon request failed"
        );

    }


    const data =
        await response.json();


    const features =
        Array.isArray(data.features)
            ? data.features
            : [];


    const results = [];


    features.forEach(
        function(feature) {

            const properties =
                feature &&
                feature.properties
                    ? feature.properties
                    : {};


            const coordinates =
                feature &&
                feature.geometry &&
                Array.isArray(
                    feature.geometry.coordinates
                )
                    ? feature.geometry.coordinates
                    : null;


            if (
                !coordinates ||
                coordinates.length < 2
            ) {
                return;
            }


            const countryCode =
                String(
                    properties.countrycode ||
                    properties.country_code ||
                    ""
                ).toUpperCase();


            if (
                !EU_COUNTRIES.includes(
                    countryCode
                )
            ) {
                return;
            }


            const placeType =
                String(
                    properties.osm_value ||
                    ""
                ).toLowerCase();


            const isAllowedPlace =
                [
                    "city",
                    "town",
                    "village",
                    "hamlet",
                    "municipality"
                ].includes(
                    placeType
                ) ||
                Boolean(
                    properties.city ||
                    properties.town ||
                    properties.village ||
                    properties.municipality
                );


            if (!isAllowedPlace) {
                return;
            }


            const name =
                properties.name ||
                properties.city ||
                properties.town ||
                properties.village ||
                properties.municipality ||
                "";


            if (!name) {
                return;
            }


            const osmId =
                String(
                    properties.osm_type || ""
                ) +
                ":" +
                String(
                    properties.osm_id || ""
                );


            results.push({

                id:
                    osmId !== ":"
                        ? osmId
                        : (
                            name +
                            "|" +
                            countryCode +
                            "|" +
                            coordinates[0] +
                            "|" +
                            coordinates[1]
                        ),

                name: name,

                country:
                    properties.country || "",

                countrycode:
                    countryCode.toLowerCase(),

                lat:
                    Number(
                        coordinates[1]
                    ),

                lon:
                    Number(
                        coordinates[0]
                    ),

                searchName:
                    name,

                placeType:
                    placeType

            });

        }
    );


    cityCache.set(
        cacheKey,
        results
    );


    return results;

}


/* =========================================================
   CITY SEARCH MERGING / SORTING
========================================================= */

function mergePlaces(
    collections,
    query
) {

    const map =
        new Map();

    collections.forEach(
        function(collection) {

            collection.forEach(
                function(place) {

                    if (!place) {
                        return;
                    }

                    if (
                        !map.has(place.id)
                    ) {

                        map.set(
                            place.id,
                            {
                                ...place,
                                searchNames: [
                                    place.searchName,
                                    place.name
                                ]
                            }
                        );

                    } else {

                        const existing =
                            map.get(place.id);

                        existing.searchNames.push(
                            place.searchName
                        );

                        if (
                            place.name.length <
                            existing.name.length
                        ) {

                            existing.name =
                                place.name;

                        }

                    }

                }
            );

        }
    );


    const normalizedQuery =
        normalizeText(query);


    function scorePlace(place) {

        const names =
            [
                place.name,
                ...(place.searchNames || [])
            ];


        let bestScore = 0;


        names.forEach(
            function(name) {

                const normalizedName =
                    normalizeText(name);

                if (!normalizedName) {
                    return;
                }


                if (
                    normalizedName ===
                    normalizedQuery
                ) {

                    bestScore =
                        Math.max(
                            bestScore,
                            10000
                        );

                    return;

                }


                if (
                    normalizedName.startsWith(
                        normalizedQuery
                    )
                ) {

                    bestScore =
                        Math.max(
                            bestScore,
                            8000 +
                            (
                                100 -
                                normalizedName.length
                            ) / 10
                        );

                    return;

                }


                const words =
                    normalizedName.split(
                        " "
                    );


                if (
                    words.some(
                        function(word) {
                            return word.startsWith(
                                normalizedQuery
                            );
                        }
                    )
                ) {

                    bestScore =
                        Math.max(
                            bestScore,
                            7000
                        );

                    return;

                }


                if (
                    normalizedName.includes(
                        normalizedQuery
                    )
                ) {

                    bestScore =
                        Math.max(
                            bestScore,
                            6000
                        );

                }

            }
        );


        return bestScore;

    }


    const places =
        Array.from(
            map.values()
        );


    places.forEach(
        function(place) {

            place._score =
                scorePlace(
                    place
                );

        }
    );


    places.sort(
        function(a, b) {

            if (
                b._score !==
                a._score
            ) {

                return (
                    b._score -
                    a._score
                );

            }


            return (
                a.name.length -
                b.name.length
            );

        }
    );


    return places.slice(
        0,
        8
    );

}


async function findCitySuggestions(
    query
) {

    const clean =
        String(query || "")
            .trim();


    if (
        clean.length < 2
    ) {

        return [];

    }


    const languages =
        getSearchLanguages(
            clean
        );


    const requests =
        languages.map(
            function(language) {

                return photonSearch(
                    clean,
                    language
                );

            }
        );


    const settled =
        await Promise.allSettled(
            requests
        );


    const collections = [];


    settled.forEach(
        function(result) {

            if (
                result.status ===
                "fulfilled" &&
                Array.isArray(
                    result.value
                )
            ) {

                collections.push(
                    result.value
                );

            }

        }
    );


    return mergePlaces(
        collections,
        clean
    );

}


/* =========================================================
   CITY SUGGESTIONS RENDER
========================================================= */

function renderCitySuggestions(
    container,
    places,
    input,
    state
) {

    container.innerHTML = "";


    if (
        !places.length
    ) {

        hideCitySuggestions(
            container
        );

        return;

    }


    places
        .slice(0, 8)
        .forEach(
            function(place) {

                const item =
                    document.createElement(
                        "button"
                    );


                item.type =
                    "button";

                item.className =
                    "city-suggestion";


                item.innerHTML =
                    "<strong>" +
                    escapeHtml(
                        place.name
                    ) +
                    "</strong>" +

                    "<span>" +
                    escapeHtml(
                        place.country
                    ) +
                    "</span>";


                item.addEventListener(
                    "mousedown",
                    function(event) {

                        event.preventDefault();

                    }
                );


                item.addEventListener(
                    "click",
                    function() {

                        input.value =
                            place.name;

                        state.place =
                            place;

                        hideCitySuggestions(
                            container
                        );

                        clearFieldError(
                            input.id ===
                            "fromCity"
                                ? "fromCityError"
                                : "toCityError"
                        );

                    }
                );


                container.appendChild(
                    item
                );

            }
        );


    container.classList.add(
        "active"
    );


    activeCitySuggestions =
        container;

    activeCityInput =
        input;


    positionCitySuggestions(
        container,
        input
    );

}


/* =========================================================
   CITY AUTOCOMPLETE
========================================================= */

function initCityAutocomplete(
    inputId,
    suggestionsId,
    errorId,
    stateKey
) {

    const input =
        document.getElementById(
            inputId
        );

    const suggestions =
        document.getElementById(
            suggestionsId
        );


    if (
        !input ||
        !suggestions
    ) {

        return;

    }


    const state =
        cityState[stateKey];


    const search =
        debounce(
            async function(query) {

                const requestId =
                    ++state.requestId;


                if (
                    !query ||
                    query.length < 2
                ) {

                    hideCitySuggestions(
                        suggestions
                    );

                    return;

                }


                suggestions.innerHTML =
                    "<div class=\"city-search-loading\">...</div>";

                suggestions.classList.add(
                    "active"
                );

                activeCitySuggestions =
                    suggestions;

                activeCityInput =
                    input;

                positionCitySuggestions(
                    suggestions,
                    input
                );


                try {

                    const places =
                        await findCitySuggestions(
                            query
                        );


                    if (
                        requestId !==
                        state.requestId
                    ) {
                        return;
                    }


                    if (
                        input.value.trim() !==
                        query
                    ) {
                        return;
                    }


                    renderCitySuggestions(
                        suggestions,
                        places,
                        input,
                        state
                    );

                } catch (error) {

                    console.error(
                        "City search error:",
                        error
                    );

                    hideCitySuggestions(
                        suggestions
                    );

                }

            },
            260
        );


    input.addEventListener(
        "input",
        function() {

            state.place =
                null;

            state.requestId +=
                1;


            clearFieldError(
                errorId
            );


            const query =
                input.value.trim();


            if (!query) {

                hideCitySuggestions(
                    suggestions
                );

                return;

            }


            search(
                query
            );

        }
    );


    input.addEventListener(
        "focus",
        function() {

            const query =
                input.value.trim();


            if (
                query.length >= 2 &&
                !state.place
            ) {

                search(
                    query
                );

            }

        }
    );


    input.addEventListener(
        "blur",
        function() {

            setTimeout(
                function() {

                    hideCitySuggestions(
                        suggestions
                    );

                },
                180
            );

        }
    );

}


/* =========================================================
   GEOCODE EXACT CITY
========================================================= */

async function geocodeCity(
    value
) {

    const clean =
        String(value || "")
            .trim();


    if (!clean) {
        return null;
    }


    const cacheKey =
        "exact|" +
        normalizeText(clean);


    if (
        cityCache.has(
            cacheKey
        )
    ) {

        return cityCache.get(
            cacheKey
        );

    }


    const places =
        await findCitySuggestions(
            clean
        );


    const best =
        places[0] || null;


    cityCache.set(
        cacheKey,
        best
    );


    return best;

}


/* =========================================================
   ROUTING
========================================================= */

async function getRoadRoute(
    from,
    to
) {

    const cacheKey =
        from.lat.toFixed(5) +
        "," +
        from.lon.toFixed(5) +
        "|" +
        to.lat.toFixed(5) +
        "," +
        to.lon.toFixed(5);


    if (
        routeCache.has(
            cacheKey
        )
    ) {

        return routeCache.get(
            cacheKey
        );

    }


    const url =
        "https://router.project-osrm.org/route/v1/driving/" +
        from.lon +
        "," +
        from.lat +
        ";" +
        to.lon +
        "," +
        to.lat +
        "?overview=false";


    const response =
        await fetch(
            url
        );


    if (!response.ok) {

        throw new Error(
            "Routing failed"
        );

    }


    const data =
        await response.json();


    if (
        data.code !== "Ok" ||
        !data.routes ||
        !data.routes[0]
    ) {

        throw new Error(
            "No route"
        );

    }


    const route = {

        km:
            data.routes[0].distance /
            1000,

        minutes:
            data.routes[0].duration /
            60,

        approximate:
            false

    };


    routeCache.set(
        cacheKey,
        route
    );


    return route;

}


/* =========================================================
   HAVERSINE FALLBACK
========================================================= */

function haversineKm(
    first,
    second
) {

    const earthRadius =
        6371;


    const lat1 =
        first.lat *
        Math.PI /
        180;

    const lat2 =
        second.lat *
        Math.PI /
        180;


    const deltaLat =
        (second.lat -
        first.lat) *
        Math.PI /
        180;

    const deltaLon =
        (second.lon -
        first.lon) *
        Math.PI /
        180;


    const a =
        Math.sin(
            deltaLat / 2
        ) ** 2 +

        Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(
            deltaLon / 2
        ) ** 2;


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );


    return earthRadius * c;

}


function getApproximateRoute(
    from,
    to
) {

    const straightLine =
        haversineKm(
            from,
            to
        );


    const roadDistance =
        Math.max(
            straightLine * 1.18,
            straightLine
        );


    return {

        km: roadDistance,

        minutes:
            roadDistance /
            70 *
            60,

        approximate:
            true

    };

}


/* =========================================================
   PRICE CALCULATION
========================================================= */

function calculateTransportPrice(route) {

    const km = Number(route.km) || 0;

    const cargo = selectState.cargo;


    const kmRates = {

        move: 2.00,

        furniture: 0.65,

        motorcycle: 1.20,

        bicycle: 0.65,

        boxes: 1.10

    };


    let price = 80;


    price +=
        km *
        (
            kmRates[cargo] || 1.45
        );


    const volumePrices = {

        small: 0,

        medium: 60,

        large: 130

    };


    price +=
        volumePrices[
            selectState.volume
        ] || 0;


    const helpers =
        Number(
            selectState.helpers || 0
        );


    const helperPrices = {

        0: 0,

        1: 55,

        2: 100

    };


    price +=
        helperPrices[helpers] || 0;


    if (helpers > 0) {

        const floorFrom =
            Number(
                selectState.floorFrom || 0
            );

        const floorTo =
            Number(
                selectState.floorTo || 0
            );

        const totalFloors =
            floorFrom +
            floorTo;


        price +=
            totalFloors * 12;


        if (
            selectState.elevator === "no"
        ) {

            price +=
                totalFloors * 18;

        }

    }


    price =
        Math.max(
            price,
            120
        );


    price =
        Math.round(
            price / 10
        ) * 10;


    return price;

}



/* =========================================================
   CALCULATOR
========================================================= */

function initCalculator() {

    const button =
        document.getElementById(
            "calculateButton"
        );

    const result =
        document.getElementById(
            "calculatorResult"
        );

    const fromInput =
        document.getElementById(
            "fromCity"
        );

    const toInput =
        document.getElementById(
            "toCity"
        );


    if (
        !button ||
        !result ||
        !fromInput ||
        !toInput
    ) {
        return;
    }


    button.addEventListener(
        "click",
        async function() {

            clearFieldError("fromCityError");
            clearFieldError("toCityError");
            clearFieldError("cargoError");
            clearFieldError("volumeError");


            result.classList.remove("active");


            let valid = true;


            if (!fromInput.value.trim()) {
                showFieldError("fromCityError");
                valid = false;
            }


            if (!toInput.value.trim()) {
                showFieldError("toCityError");
                valid = false;
            }


            if (!selectState.cargo) {
                showFieldError("cargoError");
                valid = false;
            }


            if (!selectState.volume) {
                showFieldError("volumeError");
                valid = false;
            }


            if (!valid) {
                return;
            }


            button.disabled = true;


            const originalText =
                button.innerHTML;


            button.innerHTML =
                currentLanguage === "de"
                    ? "Berechnung..."
                    : currentLanguage === "ru"
                        ? "Расчёт..."
                        : "Розрахунок...";


            try {

                let from =
                    cityState.from.place;

                let to =
                    cityState.to.place;


                if (
                    !from ||
                    normalizeText(fromInput.value) !==
                    normalizeText(from.name)
                ) {
                    from =
                        await geocodeCity(
                            fromInput.value
                        );
                }


                if (
                    !to ||
                    normalizeText(toInput.value) !==
                    normalizeText(to.name)
                ) {
                    to =
                        await geocodeCity(
                            toInput.value
                        );
                }


                if (!from) {
                    showFieldError("fromCityError");
                    return;
                }


                if (!to) {
                    showFieldError("toCityError");
                    return;
                }


                cityState.from.place = from;
                cityState.to.place = to;


                let route;


                try {

                    route =
                        await getRoadRoute(
                            from,
                            to
                        );

                } catch (routingError) {

                    console.warn(
                        "OSRM routing failed. Using approximate route.",
                        routingError
                    );

                    route =
                        getApproximateRoute(
                            from,
                            to
                        );
                }


                // Текущая цена калькулятора
                const price =
                    calculateTransportPrice(route);


                // Диапазон ±20%, округление до 10 €
                const minPrice =
                    Math.round(
                        (price * 0.8) / 10
                    ) * 10;

                const maxPrice =
                    Math.round(
                        (price * 1.2) / 10
                    ) * 10;


                const routeNote =
                    route.approximate
                        ? (
                            currentLanguage === "de"
                                ? "Entfernung ist ungefähr berechnet."
                                : currentLanguage === "ru"
                                    ? "Расстояние рассчитано приблизительно."
                                    : "Відстань розрахована приблизно."
                        )
                        : (
                            currentLanguage === "de"
                                ? "Entfernung über die Straßenroute."
                                : currentLanguage === "ru"
                                    ? "Расстояние nach dem Straßen маршруту."
                                    : "Відстань розрахована за дорожнім маршрутом."
                        );


                const km =
                    Math.round(route.km);


                const priceLabel =
                    currentLanguage === "de"
                        ? "Geschätzter Preis"
                        : currentLanguage === "ru"
                            ? "Примерная стоимость"
                            : "Орієнтовна вартість";


                const estimateNote =
                    currentLanguage === "de"
                        ? "Der tatsächliche Preis hängt von der aktuellen Tourenplanung und den Details Ihres Transports ab. Kombinierte Fahrten können günstiger sein."
                        : currentLanguage === "ru"
                            ? "Окончательная цена зависит от планирования маршрута и деталей перевозки. Объединённые поездки могут быть дешевле."
                            : "Остаточна ціна залежить від планування маршруту та деталей перевезення. Об'єднані поїздки можуть бути дешевшими.";


                result.innerHTML = `

                    <strong>
                        ${escapeHtml(
                            t("calculatorResultTitle")
                        )}
                    </strong>

                    <div class="calculator-price">
                        ${escapeHtml(priceLabel)}:
                        ${minPrice}–${maxPrice} €
                    </div>

                    <div style="
                        margin-top: 10px;
                        font-size: 13px;
                        line-height: 1.6;
                        opacity: .72;
                    ">

                        ${escapeHtml(from.name)}
                        →
                        ${escapeHtml(to.name)}

                        <br>

                        ${km} km

                        <br>

                        ${escapeHtml(routeNote)}

                    </div>

                    <p style="
                        margin-top: 12px;
                        color: #999;
                        font-size: 12px;
                        line-height: 1.5;
                    ">

                        ${escapeHtml(estimateNote)}

                    </p>

                `;


                result.classList.add("active");


                result.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });


            } catch (error) {

                console.error(
                    "Calculator error:",
                    error
                );

            } finally {

                button.disabled = false;
                button.innerHTML = originalText;

            }

        }
    );

}
/* =========================================================
   GALLERY FILTER
========================================================= */

function initGalleryFilters() {

    const filters =
        document.querySelectorAll(
            ".gallery-filter"
        );

    const cards =
        document.querySelectorAll(
            ".gallery-card"
        );


    filters.forEach(
        function(filterButton) {

            filterButton.addEventListener(
                "click",
                function() {

                    const filter =
                        filterButton.dataset.filter;


                    filters.forEach(
                        function(button) {

                            button.classList.remove(
                                "active"
                            );

                        }
                    );


                    filterButton.classList.add(
                        "active"
                    );


                    cards.forEach(
                        function(card) {

                            const category =
                                card.dataset.category;


                            if (
                                filter === "all" ||
                                category === filter
                            ) {

                                card.classList.remove(
                                    "hidden"
                                );

                            } else {

                                card.classList.add(
                                    "hidden"
                                );

                            }

                        }
                    );

                }
            );

        }
    );

}


/* =========================================================
   CONTACT FORM + EMAILJS
========================================================= */

function initContactForm() {

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (!contactForm) {

        return;

    }


    if (
        typeof emailjs ===
        "undefined"
    ) {

        console.error(
            "EmailJS library is not loaded."
        );

        return;

    }


    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    });


    contactForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                );

            const phone =
                document.getElementById(
                    "phone"
                );

            const message =
                document.getElementById(
                    "message"
                );


            if (
                !name ||
                !phone ||
                !message
            ) {

                console.error(
                    "Contact form fields not found."
                );

                return;

            }


            const nameValue =
                name.value.trim();

            const phoneValue =
                phone.value.trim();

            const messageValue =
                message.value.trim();


            if (
                !nameValue ||
                !phoneValue ||
                !messageValue
            ) {

                alert(
                    t(
                        "fieldRequired"
                    )
                );

                return;

            }


            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            const originalText =
                submitButton
                    ? submitButton.textContent
                    : "";


            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.textContent =
                    "Wird gesendet...";

            }


            try {

                console.log(
                    "EmailJS: sending..."
                );


                const response =
                    await emailjs.sendForm(
                        EMAILJS_SERVICE_ID,
                        EMAILJS_TEMPLATE_ID,
                        contactForm
                    );


                console.log(
                    "EmailJS success:",
                    response
                );


                alert(
                    t(
                        "formThanks"
                    )
                );


                contactForm.reset();


            } catch (error) {

                console.error(
                    "EMAILJS ERROR:",
                    error
                );

                console.error(
                    "EMAILJS STATUS:",
                    error &&
                    error.status
                );

                console.error(
                    "EMAILJS MESSAGE:",
                    error &&
                    error.text
                );


                alert(
                    "EMAILJS FEHLER:\n\n" +
                    "Status: " +
                    (
                        error &&
                        error.status
                            ? error.status
                            : "unbekannt"
                    ) +
                    "\n\n" +
                    "Message: " +
                    (
                        error &&
                        error.text
                            ? error.text
                            : "Unbekannter Fehler"
                    )
                );


            } finally {

                if (submitButton) {

                    submitButton.disabled =
                        false;

                    submitButton.textContent =
                        originalText;

                }

            }

        }
    );

}


/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

function initLanguageButtons() {

    document
        .querySelectorAll(".lang-btn")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    changeLanguage(
                        button.dataset.lang
                    );

                }
            );

        });

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

function initSmoothScroll() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(function(link) {

            link.addEventListener(
                "click",
                function(event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });

}


/* =========================================================
   WINDOW EVENTS
========================================================= */

function initWindowEvents() {

    window.addEventListener(
        "scroll",
        refreshActiveCitySuggestionPosition,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        refreshActiveCitySuggestionPosition
    );


    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key ===
                "Escape"
            ) {

                hideAllCitySuggestions();


                document
                    .querySelectorAll(
                        ".custom-select.open"
                    )
                    .forEach(
                        function(select) {

                            select.classList.remove(
                                "open"
                            );

                        }
                    );

            }

        }
    );

}


/* =========================================================
   INIT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        injectCitySearchStyles();

        initLanguageButtons();

        initMobileMenu();

        initCustomSelects();

        initialiseSelectState();

        initCityAutocomplete(
            "fromCity",
            "fromSuggestions",
            "fromCityError",
            "from"
        );

        initCityAutocomplete(
            "toCity",
            "toSuggestions",
            "toCityError",
            "to"
        );

        initCalculator();

        initGalleryFilters();

        initContactForm();

        initSmoothScroll();

        initWindowEvents();

        changeLanguage(
            currentLanguage
        );

    }
);