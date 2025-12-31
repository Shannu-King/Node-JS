function func1(a, callback) {
    let result = a + 1;
    console.log("func1 result:", result);
    callback (result);
}

function func2(b, callback) {
    let result = b + 2;
    console.log("func2 result:", result);
    callback(result);
}

function func3(c, callback) {
    let result = c + 3;
    console.log("func3 result:", result);
    callback(result);
}

function func4(d, callback) {
    let result = d + 4;
    console.log("func4 result:", result);
    callback(result);
}
func1(5,function(r1)
{
    func2(r1,function(r2)
    {
        func3(r2,function(r3)
        {
            func4(r3,function(r4){

            });
        });
    });
});