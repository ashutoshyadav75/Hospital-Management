
// const counters=document.querySelectorAll(".counter");

// counters.forEach(counter=>{

// const updateCounter=()=>{

// const target=+counter.getAttribute("data-target");

// const count=+counter.innerText;

// const increment=target/100;

// if(count<target){

// counter.innerText=Math.ceil(count+increment);

// setTimeout(updateCounter,20);

// }
// else{
// counter.innerText=target;
// }
// };

// updateCounter();

// });

const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});



function getSuggestion(){

    let symptoms =
    document.getElementById("symptoms")
    .value
    .toLowerCase();

    let result =
    document.getElementById("result");

    let suggestion = "";

    if(symptoms.includes("fever")
       && symptoms.includes("cough")){

        suggestion =
        "Possible viral infection. Drink fluids and consult a doctor.";

    }

    else if(symptoms.includes("headache")
            && symptoms.includes("fever")){

        suggestion =
        "Could be infection or dehydration. Medical consultation is advised.";
    }

    else if(symptoms.includes("chest pain")){

        suggestion =
        "Chest pain requires immediate medical attention.";
    }

    else if(symptoms.includes("stomach pain")){

        suggestion =
        "Could be digestive issues. Avoid spicy food and consult a doctor.";
    }

    else{

        suggestion =
        "Symptoms not recognized. Please consult a healthcare professional.";
    }

    result.innerHTML = `
        <h3>Suggestion</h3>
        <p>${suggestion}</p>
        <br>
        <strong>
        Disclaimer:
        This is not a medical diagnosis.
        Always consult a qualified doctor.
        </strong>
    `;
}
