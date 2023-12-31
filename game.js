name1 = localStorage.getItem("player1_name");
name2 = localStorage.getItem("player2_name");
score1 = 0;
score2 = 0;
document.getElementById("p1_name").innerHTML = name1 + " : " + score1;
document.getElementById("p2_name").innerHTML = name2 + " : " + score2;
document.getElementById("qt").innerHTML = "Question turn : " + name1;
document.getElementById("at").innerHTML = "Answer turn : " + name2;
function send(){
    uq = document.getElementById("user_ques").value;//actIons
    question = uq.toUpperCase();//ACTIONS

    letter1 = question.charAt(1);//C
    nol = question.length;//7
    letter2 = question.charAt(nol-2);//N
    middle = Math.floor(nol/2);//3
    letter3 = question.charAt(middle);//I
    letter4 = question.charAt(middle+1);//O
    //A_T___S
    

    r1 = question.replace(letter1,"_");//A_TIONS
    r2 = r1.replace(letter2,"_");//A_CTIO_S
    r3 = r2.replace(letter3,"_");//A_CT_O_S
    finalquestion = r3.replace(letter4,"_");//A_T___S

    document.getElementById("question").innerHTML = finalquestion;
    document.getElementById("output").style.display =  "inline-block";
    document.getElementById("user_ques").value = "";


    
    
    

}
qt = "player1";
at = "player2" ;

function check(){
    ua = document.getElementById("userans").value;
    upper_u = ua.toUpperCase();
    if(upper_u == question){
        if(at == "player1"){
            score1 = score1 + 1;
            document.getElementById("p1_name").innerHTML = name1 + " : " + score1;
            window.alert(name1 + " got 1 point");
            
            
        }
        if(at == "player2"){
            score2 = score2 + 1;
            document.getElementById("p2_name").innerHTML = name2 + " : " + score2;
            window.alert(name2 + " got 1 point");
        }
        
    }
    else{
        window.alert("You got it wrong , better luck next time");
    }
    if(qt == "player1"){
        qt = "player2";
        document.getElementById("qt").innerHTML = "Question turn : " + name2;
        
    }else if(qt == "player2"){
        qt = "player1";
        document.getElementById("qt").innerHTML = "Question turn : " + name1;
        
        
    }
    if(at == "player1"){
        at = "player2";
        document.getElementById("at").innerHTML = "Answer turn : " + name2;
        
    }else if(at == "player2"){
        at = "player1";
        document.getElementById("at").innerHTML = "Answer turn : " + name1;
        
        
    }
    document.getElementById("output").style.display =  "none";
    document.getElementById("userans").value = "";

}