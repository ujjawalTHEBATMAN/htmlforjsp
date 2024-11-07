// JavaScript to handle button clicks
document.getElementById('homeButton').addEventListener('click', function() {
 
document.getElementById('contain').innerHTML = '<h2> Qestions </h2> <br> <p>click on the any program </p><br> <a href="program1.html">program1</a> ';
});

document.getElementById('galleryButton').addEventListener('click', function() {
    document.getElementById('contain').innerHTML = '<h2>Gallery</h2><p>Here are some images and content related to the gallery.</p>';
});

document.getElementById('directionButton').addEventListener('click', function() {
    document.getElementById('contain').innerHTML = '<h2>Directions</h2><p>Here you can find directions to our location.</p>';
});

document.getElementById('aiButton').addEventListener('click', function() {
    document.getElementById('contain').innerHTML = '<h2>Artificial Intelligence</h2><p>Learn more about AI and its applications.</p>';
});

document.getElementById('authorButton').addEventListener('click', function() {
    document.getElementById('contain').innerHTML = '<h2>Author</h2><p>Information about the author goes here.</p>';
});