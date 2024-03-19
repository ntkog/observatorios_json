// https://gist.github.com/JaimeObregon/768b3c4065cb6f30d0231f76e7cce63a
var prelista =  [...document.querySelectorAll('td[id*="txt-LC"], p[dir]')]
    .map(e => e.textContent.toLowerCase().trim())
    .map(t => /\n/.test(t) ? t.split("\n") : [t])
    .flat()
    .filter(t => /Obs/i.test(t));

var unicos = new Set();

var mapeado = prelista.reduce((o,c,i,arr) => {
    if (!unicos.has(c)) {
        let isUrl = /http/.test(c);
        o.push({
            nombre: !isUrl ? c : "",
            url : isUrl ?  c : null
        }) 
    }
    
    return o;
}, [])
    


