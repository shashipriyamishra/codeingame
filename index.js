/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways
var gates = [];
for (let i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    const N2 = parseInt(inputs[1]);
    
}
for (let i = 0; i < E; i++) {
    const EI = parseInt(readline()); // the index of a gateway node
    
}

// game loop
while (true) {
    const SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // Example: 0 1 are the indices of the nodes you wish to sever the link between
    if(N == 3) console.log('1 2');
    if(N == 4){
        console.log('1 3');
        console.log('2 3');
        }
    if(N > 4){
        console.log('11 5');
        console.log('11 6');
        console.log('11 7');

    }
}
