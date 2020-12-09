for (var z = 2; z < 10; z++) {
    document.write('<div class="box1">')
    document.write(z + '단<br> ')
    for (var i = 1; i < 10; i++) {
        document.write(z + 'X' + i + '=' + (z * i) + '<br> ')
    }
    document.write('</div>')
}
for (var z = 2; z < 10; z++) {
    document.write('<div class="box2">')
    document.write(z + '단 ')
    for (var i = 1; i < 10; i++) {
        document.write(z + 'X' + i + '=' + (z * i) + ' ')
    }
    document.write('</div>')
}