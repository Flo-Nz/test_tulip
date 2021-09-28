// Pour chaque nombre n de la liste, on veut effectuer les opérations suivantes :

// si le nombre est divisible par 3 : on affiche Garçon
// si le nombre est divisible par 5 : on affiche Fille
// si le nombre est divisible par 3 et par 5 : on affiche GarçonFille
// sinon : on affiche le nombre n

const numberList = [3,5,4,8,10,15,9,20,17];

const garconOuFille = (arrayOfNumber) => {
    for (const number of arrayOfNumber) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log(number, "GarçonFille");
        } else if (number % 3 === 0) {
            console.log(number, "Garçon");
        } else if (number % 5 === 0) {
            console.log(number, "Fille");
        } else {
            console.log(number);
        }
    }
}

garconOuFille(numberList);

// On peut maintenant appeler garconOuFille(numberList). J'ai utilisé un console.log mais on pourrait appeler une alert() ou autre en fonction de ce qu'on souhaite.



// Pour chaque date n dans une liste, on veut avoir ces résultats affichés en fonction des dates de la liste :

// la date qui correspond au dernier jour du mois précédant
const getLastDayOfLastMonth = (date) => {
    const d = new Date(date);
    d.setDate(1);
    d.setUTCHours(0);
    d.setUTCHours(-1);
    console.log('Dernier Jour du mois dernier : ', d);
};

// la date avec les heures et minutes mises à 0
const getDateWithNoHourAndMinute = (date) => {
    const d = new Date(date);
    d.setUTCHours(0);
    d.setUTCMinutes(0);
    console.log('la date avec les heures et minutes mises à 0', d);
}

// la date au format DD/MM/YYYY hh:mm
const getFormattedDate = (date) => {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const hours = d.getHours();
    const minutes = d.getMinutes();

    console.log(`la date au format DD/MM/YYYY hh:mm : ${day}/${month}/${year} ${hours}:${minutes}`)
}

// le nombre de la semaine dans l’année
const getWeekNumber = (date) => {
    const d = new Date(date);

    const firstJanuary = new Date(d.getFullYear(), 0, 1);
    // Pour obtenir le nombre de jour, on soustrait la date au premier janvier de la même année puis on divise par le nombre d'heures, minutes, secondes et millisecondes car JS renvoie des ms
    const numberOfDays = Math.floor((d - firstJanuary) / (24 * 60 * 60 * 1000));
    // On utilise math.ceil pour plafonner. getDay commence par 0, il faut donc ajouter lui ajouter 1 et le nombre de jours, divisés par 7 pour obtenir la semaine. 
    const numberOfWeeks = Math.ceil((d.getDay() + 1 + numberOfDays) / 7);
    console.log('Le nombre de la semaine dans l’année : ', numberOfWeeks);
}

const handleDate = (dateArray) => {
    for (const dateString of dateArray) {
        getLastDayOfLastMonth(dateString);
        getDateWithNoHourAndMinute(dateString);
        getFormattedDate(dateString);
        getWeekNumber(dateString);   
    }
}

// Pour tester, on crée un tableau de date fictif avec Noël 2021, Saint-Valentin 2020, Fete nationale 2019

const dateArray = [
    'December 25, 2021 12:25:21',
    'February 14, 2020 08:20:45',
    'July 14, 2019 11:30:29',
];

handleDate(dateArray);