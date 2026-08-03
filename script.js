
const dailyAyat = [

    {
        text: "Verily, with hardship comes ease.",
        reference: "Surah Ash-Sharh (94:5)"
    },

    {
        text: "Surely in the remembrance of Allah do hearts find comfort.",
        reference: "Surah Ar-Ra'd (13:28)"
    },

    {
        text: "Do not despair of the mercy of Allah.",
        reference: "Surah Az-Zumar (39:53)"
    },

    {
        text: "Indeed, Allah is with the patient.",
        reference: "Surah Al-Baqarah (2:153)"
    },

    {
        text: "And whoever relies upon Allah—then He is sufficient for them.",
        reference: "Surah At-Talaq (65:3)"
    }

];
 const randomIndex=Math.floor(Math.random()*dailyAyat.length);

const randomAyah =dailyAyat[randomIndex];

document.getElementById("insights").textContent= `"${randomAyah.text}"`;
document.getElementById("reference").textContent= `${randomAyah.reference}`;

const popup= document.getElementById("popup");
const moodTitle=document.getElementById("mood-title");
const ayahText=document.getElementById("ayah-text");

const ayahReference=document.getElementById("ayah-reference");
 const closeButton=document.getElementById("close-btn");

 const moodAyah={
    sad:{
        title:"For moments of sadness 🤍",
        text: "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
        reference:"Surah Ash-Sharh (94:5-6)"
    },

    depressed:{
        itle: "For moments of depression 🤍",
        text: "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient.",
        reference:"Surah Al-Baqarah (2:155)"
    },
    
    stressed:{
        title:"For moments of stress 🤍",
        text: "And seek help through patience and prayer, and indeed, it is difficult except for the humble.",
        reference:"Surah Al-Baqarah (2:45)"
    },

   hopeless:{
    title:"For moment of hopelessness 🤍",
    text: "Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you].",
    reference: "Surah Ad-Duha (93:3)"

   },


    anxious: {
        title: "When you feel anxious 🤍",

        text: "And whoever relies upon Allah—then He is sufficient for them.",

        reference: "Surah At-Talaq, 65:3"
    },

};

const moodbtn = document.querySelectorAll(".btn button");

moodbtn.forEach(function(button){

    button.addEventListener("click", function(){
       
        const selectedMood = button.dataset.mood;
        const selectedAyah = moodAyah[selectedMood];
         moodTitle.textContent =selectedAyah.title;
         ayahText.textContent=
          `"${selectedAyah.text}"`;

         ayahReference.textContent =selectedAyah.reference; 
         
         popup.classList.add("show");

    });
    });

    closeButton.addEventListener("click", function() {

    popup.classList.remove("show");
});
