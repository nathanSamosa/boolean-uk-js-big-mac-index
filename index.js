var currencyArr = [
    ['United States', 5.66, 1, '$'],
    ['United Kingdom', 3.19, 1.37, '£'],
    ['China', 21.71, 0.16, '¥'],
    ['Australia', 6.48, 0.74, 'AU$'],
];

document.getElementById("US_price").innerHTML = currencyArr[0][3] + currencyArr[0][1];

var str = ''
var indexArr = [];
for (var i = 1; i < currencyArr.length; i++) {

    var percentage = ((currencyArr[i][2] - (currencyArr[0][1]/currencyArr[i][1]))/(currencyArr[0][1]/currencyArr[i][1]))*100;
    var index = Math.round(percentage) + "%";
    indexArr.push(index);
    console.log('%c' + currencyArr[i][0] + ':', 'color: yellow; font-weight: bold;');
    console.log(index);

    str +=
        '<h3>' + currencyArr[i][0] + ':</h3>' + 
        '<ul>' + 
            '<li>Price: ' + currencyArr[i][3] + currencyArr[i][1] + '</li>' + 
            '<li>Index: ' + index + '</li>' + 
        '</ul>';
        
}

document.getElementById("results").innerHTML = str;
console.log('%cIndex array:', 'color: orange; font-weight: bold;');
console.log(indexArr);