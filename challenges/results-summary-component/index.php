<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  <link rel='stylesheet' href='./css/site.css'>
  <title>Frontend Mentor | Results summary component</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
</head>

<?php 
  $json = file_get_contents('data.json');
  $results = json_decode($json, true);

  $totalScore = 0;

  forEach($results as $result) {
    $score = $result['score'];

    $totalScore += $score;
  } 

  $averageScore = round($totalScore / count($results));  
?>
<body>
  
<main>
  <div class="result-card">
    <div class="result">
      <h2 class="attention-voice">Your Result</h2>
      <div class="score">
        <div id="overrall-score"><?=$averageScore?></div> 
        <p class="quiet-voice">of 100</p>
      </div>

      <p id="word-score">Great</p>
      <p class="normal-voice">You scored higher than 65% of the people who have taken these tests.</p>
    </div>

    <div class="summary">
      <h1 class="loud-voice">Summary</h1>
      <ul> 
      <?php
        forEach($results as $result) {
          $category = $result['category'];
          $score = $result['score'];
          $icon = $result['icon'];
          $color = $result['color'];
      ?>
        <li class="category" style="background-color: <?=str_replace(', 1)', ', .1)', $color)?>">

          <div class="icon-wrap">
            <img src="<?=$icon?>" alt="category icon" class="icon">
            
            <h2 style="color:<?=$color?>"><?=$category?></h2>
          </div>

          <p class="normal-voice"><strong><?=$score?></strong> / 100</p>
        </li>

       <?php } ?> 
      </ul>

      <button>Continue</button>
    </div>

  </div>
</main>

<footer>
  <div class="attribution">
    Challenges by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://johnmiyao.com" target='johnn'>John Miyao</a>.
  </div>    
</footer>
</body>
</html>