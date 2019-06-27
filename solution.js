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