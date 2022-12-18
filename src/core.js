const dim = 8;





const split = (X, Y) => {
    let Z = [];
    for(let i=0; i<X.length; i++){
        Z.push(X[i]);
        Z.push(Y[i]);
    }
    Z.push(0);
    return Z
}

console.log(dim)


const dec2bin =  (n, R) => {
    let Vector = [];
    for(let i = 0; i<n; i++){
        Vector.unshift(R%2);
        R=Math.floor(R/2);
    }
    return Vector;
}


const clltmt_z = (Memory, R, T) => {
    let tmp_memory = Memory;
    tmp_memory.push(0);
    let Rule = dec2bin(8, R);
    let CA = [tmp_memory];
    let tmprow = [0];
    for(let i=0; i<T; i++){
        for(let j=0; j<tmp_memory.length-2;j++){
            tmprow.push(Rule[Rule.length - (CA[i][j] * Math.pow(2,2) + CA[i][j + 1] * Math.pow(2, 1) + CA[i][j + 2] * Math.pow(2,0) + 1)]);
        }
        tmprow.push(0);
        CA.push(tmprow);
        tmprow=[0]
    }
    return CA;

}

const extract = (S) =>{
    let Y = []
    for(let i=0;i< Math.floor((S.length-1)/2);i++){
        //Y=Y+S[2 * i + 1];
        Y.push(S[2 * i + 1])
    }
    return Y
}




//let M_and = clltmt_z(split(X,Y), 192, 1) // AND 192


//console.log(M_and[M_and.length-1])

//console.log(extract(M_and[M_and.length-1]))



export const countAnd = () =>{
    let X = [1,1,1,1,0,0,0,0];
    let Y = [1,0,1,0,1,0,1,0];
    let M_and = clltmt_z(split(X,Y), 192, 1) // AND 192

    return extract(M_and[M_and.length-1])
}
