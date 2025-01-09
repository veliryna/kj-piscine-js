function getArray(p, n){
    let arr = []
    for(let i = 0; i < n; i++){
        arr.push(p[i])
    }
    return arr.reverse()
}

function sums(n){
    if(n == 0){
        return []
    }
    let res = []
    let p = new Array(n);
    let k = 0;
    p[k] = n;
    while (true){
        res.push(getArray(p, k + 1));
        let rem_val = 0;
           
        while (k >= 0 && p[k] == 1){
            rem_val += p[k];
            k--;
        }

        if(k < 0){ break }

        p[k]--
        rem_val++

        while (rem_val > p[k]){
            p[k + 1] = p[k];
            rem_val = rem_val - p[k];
            k++;
        }
 
        p[k + 1] = rem_val;
        k++;
    }
    return res.reverse().slice(0, -1).sort(function(a, b) {
        for(let i = 0; i < Math.min(a.length, b.length); i++){
            if(a[i] == b[i]){
                continue
            } 
            return a[i] - b[i]; 
        }
    });
}

console.log(sums(10))