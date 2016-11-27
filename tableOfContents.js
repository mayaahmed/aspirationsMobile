
 var tableDiv = document.getElementById("tableOfContentsDiv");
Home = "<a href='index.html' class='tocLinks'> Home </a>";

part1= "  <br/> <br/> Part I: A Journey to Remember.";
chapter1 = " <br/> <br\>  <a href='chapter1tripkerala.html' class='tocLinks'> 1. A Kerala Vacation. </a>";
chapter2 = " <br\> <a href='chapter2tripbacktoBombay.html' class='tocLinks'> 2. Back in Mumbai. </a>";
chapter3 = " <br\> <a href='chapter3christmas.html' class='tocLinks'>  3. Merry Christmas. </a>";
chapter4 = " <br\> <a href='chapter4meetagain.html' class='tocLinks'> 4. At the Fun Fair. </a>";
chapter5 = " <br\> <a href='chapter5auntswedding.html' class='tocLinks'> 5. A Malayali Wedding. </a>";
chapter6 = " <br\> <a href='chapter6keralasamaj.html' class='tocLinks'> 6.  Remnants of Culture. </a>";
chapter7 = " <br\> <a href='chapter7boardexams.html' class='tocLinks'> 7. The Big Bad Exams. </a>";
chapter8 = "<br\> <a href='chapter8resultsexam.html' class='tocLinks'>  8. A Trip to Nagpur.  </a>";
chapter9 = " <br\> <a href='chapter9newcollege.html' class='tocLinks'>  9. The Career of Dreams.  </a>";

part2= "  <br/> <br/> Part II: A Roof under the Indian Sky.";

chapter10 = " <br\> <br\>   <a href='chapter10returntoindia1.html' class='tocLinks'>  10. Flying home to India. </a>";
chapter11 = " <br\> <a href='chapter11bangalorehouse.html' class='tocLinks'> 11. Settling down.  </a>";
chapter12 = " <br\> <a href='chapter12tifr.html' class='tocLinks'> 12. Coming to terms with India again. </a>";
chapter13 = " <br\> <a href='chapter13mundanebangalore.html' class='tocLinks'> 13. Domestic matters.  </a>";
chapter14 = " <br\> <a href='chapter14familyfarm.html' class='tocLinks'> 14. The Farm.  </a>";
chapter15 = " <br\> <a href='chapter15differentmath.html' class='tocLinks'> 15. Scolding Professors.</a>";
chapter16 = " <br\> <a href='chapter16thereturntous.html' class='tocLinks'> 16. The Return to America. </a>";
chapter17 = " <br\> <a href='chapter17changedamerica.html' class='tocLinks'> 17.  America becomes home. </a>";
chapter18 = " <br\> <a href='chapter18inspire.html' class='tocLinks'> 18.About being a Mathematician.  </a>";
chapter19 = " <br\> <a href='chapter19illfather.html' class='tocLinks'> 19. Difficult times. </a>";

chapter20 = " <br\> <a href='chapter20newdirection.html' class='tocLinks'> 20. Seeking new Roads.  </a>";
chapter21 = " <br\> <a href='chapter21indianroof.html' class='tocLinks'> 21. The Return of Dreams.  </a>";

function toc(){
  tableDiv.innerHTML=Home+part1+chapter1+chapter2+ chapter3+chapter4 + chapter5+chapter6 +chapter7+chapter8 +chapter9+part2+chapter10 +chapter11 +chapter12 +chapter13+chapter14 +chapter15+chapter16 +chapter17 +chapter18 +chapter19 +chapter20
    +chapter21;
 }

toc();
