function convertDoubleSpaceToSingle(str) {
    let newarray = str.split("  ");//separador de 2 spaces
    return newarray.join(" ");//
}


var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

/* Split convierte un string en un array separado
por el <separador> que elijas, siempre entrecomillado
de la siguiente manera: " ". Así separará el string
a partir de elementos que estén separados
por una barra de espacio " ", también valen comas,
barras de guion... Todo eso devuelto en un array*/

/* Y el método Join permite devolver a string
un array cuyos elementos se juntan según como sea
indicado: si separado con comas, o pegado en barras */