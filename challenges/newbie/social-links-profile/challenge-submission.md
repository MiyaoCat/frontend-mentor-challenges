Mobile firstResponsive Results card - Flexbox for layout, PHP for data

https://github.com/MiyaoCat/frontend-mentor-challenges/tree/main/challenges/results-summary-component

https://johnmiyao.com/projects/results-summary-component/index.php

I used PHP to pull in the data from the json file. I went with PHP because it's a static site and it's the language I learned first. I also like that you can write PHP within the HTML. I took some liberties with the JSON file and added `"color": "hsla(39, 100%, 56%, 1)"` to each object. I guess I thought it might be easier to automatically insert the specific color for the score category. In hindsight, it'd just be easier to use the custom CSS variables. 

I had some trouble with the positioning of the card. It looked completely different when I published it to my live site than it did on my localhost. Then I noticed that the left-half of the card kind of overlaps the Summary portion. I used position relative/absolute and z-index. If there's a better way to accomplish this, please let me know! 

I tried to make it look as exact as possible. Maybe I might upgrade to Pro so I can get the design files. 