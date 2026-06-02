// script.js

// Mood Tracker Function

function showMood(mood){

    document.getElementById("moodResult").innerHTML =
    "Your Selected Mood: " + mood;

}


// AI Chatbot Function

function sendMessage(){

    let input = document.getElementById("userInput").value;

    let chatBox = document.getElementById("chatBox");

    // Empty Input Check

    if(input.trim() === ""){
        alert("Please enter a message");
        return;
    }

    // User Message Display

    chatBox.innerHTML += `
        <p><b>You:</b> ${input}</p>
    `;

    let reply = "";

    let message = input.toLowerCase();

    // Chatbot Replies

    if(message.includes("stress")){

        reply = "Take a short break and relax.";

    }

    else if(message.includes("sad")){

        reply = "Stay positive and talk with friends.";

    }

    else if(message.includes("tired")){

        reply = "Drink water and take some rest.";

    }

    else if(message.includes("happy")){

        reply = "That's great! Keep smiling and stay motivated.";

    }

    else if(message.includes("exam")){

        reply = "Stay calm and prepare step by step.";

    }

    else{

        reply = "You are doing great. Stay positive!";

    }

    // Bot Message Display

    setTimeout(() => {

        chatBox.innerHTML += `
            <p><b>Bot:</b> ${reply}</p>
        `;

        // Auto Scroll

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);


    // Clear Input Field

    document.getElementById("userInput").value = "";

}



// Journal Save Button

function saveJournal(){

    let journalText = document.getElementById("journalText").value;

    if(journalText.trim() === ""){

        alert("Please write something in journal.");

    }

    else{

        alert("Journal Saved Successfully!");

        document.getElementById("journalText").value = "";

    }

}



// Daily Reminder Popup

window.onload = function(){

    setTimeout(() => {

        alert("Reminder: Drink Water and Take Study Breaks!");

    }, 3000);

};
fetch("http://localhost:9090/addMood",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        mood:"Happy",
        date:"19-05-2026"
    })
})