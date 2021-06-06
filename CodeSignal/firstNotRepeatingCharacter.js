function firstNotRepeatingCharacter(s) {

    let array = s.split('');
    if (array.length === 1) {
        return array[0];
    }

    for (let i = 0; i < array.length; i++) {
        const tmp = array[i];
        array[i] = '';
        if (!array.includes(tmp)) {
            return tmp;
        }
        array[i] = tmp;

    }

    return '_';
}
