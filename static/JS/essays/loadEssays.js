

const essaySets = {
    "Common App Essay": [
        "Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.",
        "The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?",
        "Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?",
        "Reflect on something that someone has done for you that has made you happy or thankful in a surprising way. How has this gratitude affected or motivated you?",
        "Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.",
        "Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?",
        "Share an essay on any topic of your choice. It can be one you've already written, one that responds to a different prompt, or one of your own design.",
        "Community disruptions such as COVID-19 and natural disasters can have deep and long-lasting impacts. If you need it, this space is yours to describe those impacts. Colleges care about the effects on your health and well-being, safety, family circumstances, future plans, and education, including access to reliable technology and quiet study spaces."
    ],
    "Common App Activities": [
        "Reporting activities can help colleges better understand your life outside of the classroom. Examples of activities might include:<br>Arts or music Clubs, Community engagement, Family responsibilities, Hobbies, Sports, Work or volunteering, Other experiences that have been meaningful to you",
        "Reporting activities can help colleges better understand your life outside of the classroom. Examples of activities might include:<br>Arts or music Clubs, Community engagement, Family responsibilities, Hobbies, Sports, Work or volunteering, Other experiences that have been meaningful to you",
        "Reporting activities can help colleges better understand your life outside of the classroom. Examples of activities might include:<br>Arts or music Clubs, Community engagement, Family responsibilities, Hobbies, Sports, Work or volunteering, Other experiences that have been meaningful to you",
        "Reporting activities can help colleges better understand your life outside of the classroom. Examples of activities might include:<br>Arts or music Clubs, Community engagement, Family responsibilities, Hobbies, Sports, Work or volunteering, Other experiences that have been meaningful to you",
        "Reporting activities can help colleges better understand your life outside of the classroom. Examples of activities might include:<br>Arts or music Clubs, Community engagement, Family responsibilities, Hobbies, Sports, Work or volunteering, Other experiences that have been meaningful to you",
        "Reporting activities can help colleges better understand your life outside of the classroom. Examples of activities might include:<br>Arts or music Clubs, Community engagement, Family responsibilities, Hobbies, Sports, Work or volunteering, Other experiences that have been meaningful to you",
        "Reporting activities can help colleges better understand your life outside of the classroom. Examples of activities might include:<br>Arts or music Clubs, Community engagement, Family responsibilities, Hobbies, Sports, Work or volunteering, Other experiences that have been meaningful to you",
        "Reporting activities can help colleges better understand your life outside of the classroom. Examples of activities might include:<br>Arts or music Clubs, Community engagement, Family responsibilities, Hobbies, Sports, Work or volunteering, Other experiences that have been meaningful to you",
        "Reporting activities can help colleges better understand your life outside of the classroom. Examples of activities might include:<br>Arts or music Clubs, Community engagement, Family responsibilities, Hobbies, Sports, Work or volunteering, Other experiences that have been meaningful to you",
        "Reporting activities can help colleges better understand your life outside of the classroom. Examples of activities might include:<br>Arts or music Clubs, Community engagement, Family responsibilities, Hobbies, Sports, Work or volunteering, Other experiences that have been meaningful to you"
    ]
};

let currentSet = "Common App Essay";
let currentIndex = 0;

function getStorageKey(set, index) {
    return `${set}-${index}`;
}

function loadEssay(index) {
    console.log(currentSet)
    const promptText = essaySets[currentSet][currentIndex];
    document.getElementById("essayPrompt").innerHTML = `${currentSet} | ${currentIndex + 1}/${essaySets[currentSet].length}: <br> ${promptText}`;

    const textarea = document.querySelector(".essayText");
    const key = getStorageKey(currentSet, currentIndex);
    textarea.value = localStorage.getItem(key) || "";
}

function saveEssay(){
    const textarea = document.querySelector(".essayText");
    const key = getStorageKey(currentSet, currentIndex);
    localStorage.setItem(key, textarea.value);
}

document.addEventListener("DOMContentLoaded", () => {
    loadEssay(currentIndex);

    document.querySelectorAll('.essayButton').forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList.contains("selected")) return;

            saveEssay();

            document.querySelectorAll('.essayButton').forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");

            currentSet = button.getAttribute("value");
            currentIndex = 0;
            loadEssay(currentIndex)
        });
    });


    document.getElementById("nextEssayBtn").addEventListener("click", () => {
        saveEssay();
        currentIndex++;

        if (currentIndex >= essaySets[currentSet].length) {
            currentIndex = essaySets[currentSet].length - 1;
            return;
        }
        loadEssay(currentIndex);
    });

    document.getElementById("previousEssayBtn").addEventListener("click", () => {
        saveEssay();
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = 0;
            return;
        }
        loadEssay(currentIndex);
    });


});