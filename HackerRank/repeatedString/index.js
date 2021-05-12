function repeatedString(s, n) {
    // Write your code here
    let splittedS = s.split('');
    const aInS = splittedS.filter(el => el === 'a').length;
    let count = 0;

    count += Math.floor(aInS * (n / s.length));

    if (n % s.length !== 0) {
        const r = n % s.length;
        splittedS = splittedS.splice(0, r);
        count += splittedS.filter(el => el === 'a').length;
    }

    return count;
}

const ans = repeatedString('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', 549382313570)

console.log(ans)