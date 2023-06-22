<?php
	include '../Essential Kits/php/conn.php';
	include '../Essential Kits/php/session.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include '../Essential Kits/php/Metadata.php'; ?>
    <title>CTS Library</title>
    <link rel="stylesheet" href="About-style.css">
    <script src="About-script.js" defer></script>
    <link rel="stylesheet" href="../Essential Kits/css/Navbar.css">
    <link rel="stylesheet" href="../Essential Kits/css/Footer-style.css">
</head>
<body>
    <?php
        $aboutflag=1;
        include '../Essential Kits/php/Navbar.php'
    ?>
    <div class="content">
      <div class="slides">
        <div class="slide_content 1">
        <img src="https://i.ibb.co/Rp9L54H/LIB2.jpg">
        <div class="show">
            Entry
        </div>
        </div>
        <div class="slide_content 2">
            <img src="https://i.ibb.co/Rp9L54H/LIB2.jpg">
          <h1 class="show">This is the second contest to Slide-show</h1>
        </div>
        <div class="slide_content 2">
            <img src="https://i.ibb.co/Rp9L54H/LIB2.jpg">
          <h1 class="show">This is the third contest to Slide-show</h1>
        </div>
        <div class="slide_content 4">
            <img src="https://i.ibb.co/Rp9L54H/LIB2.jpg">
          <h1 class="show">This is the fourth contest to Slide-show</h1>
        </div>
      </div>
    </div>
                
                <div class="secondHalf">
                    <h2>The Calcutta Technical School Library</h2>
                    <p>
                        This is a online library system which is capable of demanding books by students and borrowing it.
                        CTS Library consists of many engineeering books of Civil,Mechanical,Electrical and Computer Science as well as Physics,Chemistry and Mathematics books of 1st semester.
                        Recently JELET books are also available inside the library.
                    </p>
                    <p>
                    Students should follow the below Rules and Regulatons for this library system:
                    </p>
                    <ul>
                        <li><strong>Rule 1: </strong>One can take only one book at a time</li>
                        <li><strong>Rule 2: </strong>After demanding a book, one can demand another book before 3 days</li>
                        <li><strong>Rule 3: </strong>One can borrow only 3 books at each semester</li>
                        <li><strong>Rule 4: </strong>One can return the book or cancel demand after some time from demanding.</li>
                    </ul>  
                </div>
    </div>
    <?php include "../Essential Kits/php/Footer.php"; ?>
    <script>
        var slideIndex = 1;
        showDivs(slideIndex);
        function plusDivs(n) {
            showDivs(slideIndex += n);
        }
        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
            }
            x[slideIndex-1].style.display = "block";  
        }
    </script>
    <script src="../Essential Kits/js/Navbar.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>
<?php mysqli_close($conn); ?>
