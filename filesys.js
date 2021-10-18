const fs = require('fs');

const first = fs.readFileSync('./content/first.txt', 'utf8');
const second = fs.readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

fs.writeFileSync(
    './content/result-sync.txt', `Here is the result \n${first}${second}`, { flag: 'a' }
);

fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    } else {
        const third = result;
        fs.readFile('./content/second.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err);
                return;
            } else {
                const fourth = result;
                fs.writeFile('./content/result-async.txt', `Here is the result\n${third}${fourth} `, (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    } else
                        console.log(result);
                })
            }
        })
    }
});