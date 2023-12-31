function login(){
    name1 = document.getElementById("input1").value;
    name2 = document.getElementById("input2").value;
    l1 = name1.charAt(0);
    ul1 = l1.toUpperCase();
    name1 = name1.replace(l1 , ul1)
    l2 = name2.charAt(0);
    ul2 = l2.toUpperCase();
    name2 = name2.replace(l2 , ul2)
    localStorage.setItem("player1_name" , name1);
    localStorage.setItem("player2_name" , name2);
    window.location = "game.html";
}