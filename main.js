yes_word = '';
no_word = '';
god_lang = ["da", "ja"];
god_names = {
    true: "True",
    false: "False",
    random: "Random"
};

Num_questions = 0;

class God{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    ask(bool, sub_q = false){
        if(!sub_q) Num_questions++;

        if(this.name == god_names.true){
            if(bool) return yes_word;
            else return no_word;
        }
        else if(this.name == god_names.false){
            if(bool) return no_word;
            else return yes_word;
        }
        else if(this.name == god_names.random){
            let random_num = Math.random();
            if(random_num < 0.5) return yes_word;
            else return no_word;
        }
        else{
            console.log("ERROR: name is invalid");
            return -1;
        }
    }
}

function setup(){
    Num_questions = 0;

    // Setup language
    let random_num = Math.random();
    if(random_num < 0.5){
        yes_word = god_lang[0];
        no_word = god_lang[1];
    }
    else{
        yes_word = god_lang[1];
        no_word = god_lang[0];
    }

    // Summon Gods
    let temp = [god_names.true, god_names.false, god_names.random];
    // First Pass
    random_num = Math.random() * 3;
    if(random_num < 1){
        A = new God("A",temp[0]);
        temp.splice(0,1);
    }
    else if(random_num < 2){
        A = new God("A",temp[1]);
        temp.splice(1,1);
    }
    else{
        A = new God("A",temp[2]);
        temp.splice(2,1);
    }
    // Second Pass
    random_num = Math.random() * 2;
    if(random_num < 1){
        B = new God("B",temp[0]);
        temp.splice(0,1);
    }
    else{
        B = new God("B",temp[1]);
        temp.splice(1,1);
    }
    // Third Pass
    C = new God("C",temp[0]);
    temp.splice(0,1);
}

function test(A_name,B_name,C_name, quite = false){
    let result;
    if((A.name == A_name) && (B.name == B_name) && (B.name == B_name)){
        if(!quite) console.log("Correct");
        result = true;
    }
    else{
        if(!quite) console.log("Incorrect");
        result = false;
    }
    if(!quite){
        console.log("A : " + A.name);
        console.log("B : " + B.name);
        console.log("C : " + C.name);
        console.log("Number of questions: "+ Num_questions);
    }

    return result;
}

window.onload = setup();

solution = function(quite = false){
    let answer = ["","",""];

    let q_1 = A.ask(A.ask(B.name == god_names.random,true) == "da");
    if(q_1 == "da"){
        let q_2 = C.ask(C.ask(C.name == god_names.true,true) == "da");
        if(q_2 == "da") answer[2] = god_names.true;
        else if (q_2 == "ja") answer[2] = god_names.false;
        
        let q_3 = C.ask(C.ask(A.name == god_names.random,true) == "da");
        if(q_3 == "da"){
            answer[0] = god_names.random;
            if(answer[2] == god_names.true) answer[1] = god_names.false;
            else if(answer[2] == god_names.false) answer[1] = god_names.true;
        }
        else if(q_3 == "ja"){
            answer[1] = god_names.random;
            if(answer[2] == god_names.true) answer[0] = god_names.false;
            else if(answer[2] == god_names.false) answer[0] = god_names.true;
        }
    }
    else if(q_1 == "ja"){
        let q_2 = B.ask(B.ask(B.name == god_names.true,true) == "da");
        if(q_2 == "da") answer[1] = god_names.true;
        else if (q_2 == "ja") answer[1] = god_names.false;
        
        let q_3 = B.ask(B.ask(A.name == god_names.random,true) == "da");
        if(q_3 == "da"){
            answer[0] = god_names.random;
            if(answer[1] == god_names.true) answer[2] = god_names.false;
            else if(answer[1] == god_names.false) answer[2] = god_names.true;
        }
        else if(q_3 == "ja"){
            answer[2] = god_names.random;
            if(answer[1] == god_names.true) answer[0] = god_names.false;
            else if(answer[1] == god_names.false) answer[0] = god_names.true;
        }
    }

    return test(answer[0],answer[1],answer[2],quite);

}