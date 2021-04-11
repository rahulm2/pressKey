function isSpecial(str){
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
   }

export const getImageName = (value) => {

    if(isSpecial(value)) {
        return 'special.gif'
    }
    if (value.includes('1')) {
		return '1.png';
	}
    if (value.includes('2')) {
		return '2.png';
	}
    if (value.includes('3')) {
		return '3.png';
	}
    if (value.includes('4')) {
		return '4.png';
	}
    if (value.includes('5')) {
		return '5.png';
	}
    if (value.includes('6')) {
		return '6.png';
	}
    if (value.includes('7')) {
		return '7.png';
	}
    if (value.includes('8')) {
		return '8.png';
	}
    if (value.includes('9')) {
		return '9.png';
	}
    if (value.includes('a')) {
		return 'a.jpeg';
	}
	if (value.includes('b')) {
		return 'b.jpeg';
	}
	if (value.includes('c')) {
		return 'c.jpeg';
	}
    if (value.includes('d')) {
		return 'd.jpeg';
	}
    if (value.includes('e')) {
		return 'e.gif';
	}
	if (value.includes('f')) {
		return 'f.gif';
	}
	if (value.includes('g')) {
		return 'g.jpg';
	}
    if (value.includes('h')) {
		return 'h.jpeg';
	}
    if (value.includes('i')) {
		return 'i.jpeg';
	}
    if (value.includes('j')) {
		return 'j.jpeg';
	}
    if (value.includes('k')) {
		return 'k.gif';
	}
    if (value.includes('l')) {
		return 'l.png';
	}
    if (value.includes('m')) {
		return 'm.gif';
	}
    if (value.includes('n')) {
		return 'n.jpeg';
	}
    if (value.includes('o')) {
		return 'o.gif';
	}
    if (value.includes('p')) {
		return 'p.webp';
	}
    if (value.includes('q')) {
		return 'q.jpeg';
	}
    if (value.includes('r')) {
		return 'r.png';
	}
    if (value.includes('s')) {
		return 's.png';
	}
    if (value.includes('t')) {
		return 't.jpg';
	}
    if (value.includes('u')) {
		return 'u.jpg';
	}
    if (value.includes('v')) {
		return 'v.jpg';
	}
    if (value.includes('w')) {
		return 'w.jpg';
	}
    if (value.includes('x')) {
		return 'x.jpeg';
	}
    if (value.includes('y')) {
		return 'y.gif';
	}
    if (value.includes('z')) {
		return 'z.gif';
	}
    if (value.includes(' ')) {
		return 'space.jpg';
	}
	return null;
};