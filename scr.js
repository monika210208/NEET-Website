// NAVIGATION
function show(id){
document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}

// DARK MODE
function toggleDark(){
document.body.classList.toggle("dark");
}

// CHART (TREND)
let ctx = document.getElementById("chart");
if(ctx){
new Chart(ctx,{
type:'line',
data:{
labels:["2020","2021","2022","2023","2024"],
datasets:[
{
label:"Physics Difficulty",
data:[6,7,8,8,9]
},
{
label:"Biology Ease",
data:[8,9,9,8,9]
}
]
}
});
}

// PYQ DATA
const pyqs = {
Biology:[
"Which is powerhouse of cell?",
"DNA is located in?"
],
Physics:[
"Unit of force?",
"Velocity formula?"
],
Chemistry:[
"pH of water?",
"Atomic number?"
]
};

function loadPYQ(){
let sub=document.getElementById("subject").value;
let div=document.getElementById("questions");
div.innerHTML="";

pyqs[sub].forEach(q=>{
let p=document.createElement("p");
p.innerText=q;
div.appendChild(p);
});
}

// QUIZ
const quiz=[
{q:"NEET full form?",o:["Medical Exam","National Eligibility cum Entrance Test"],a:1},
{q:"Biology weightage?",o:["50%","25%"],a:0}
];

let i=0,score=0;

function loadQuiz(){
let q=quiz[i];
document.getElementById("q").innerText=q.q;

let opts=document.getElementById("opts");
opts.innerHTML="";

q.o.forEach((opt,index)=>{
let b=document.createElement("button");
b.innerText=opt;
b.onclick=()=>check(index);
opts.appendChild(b);
});
}

function check(ans){
if(ans===quiz[i].a) score++;
i++;
if(i<quiz.length) loadQuiz();
else document.getElementById("score").innerText="Score: "+score;
}

loadQuiz();