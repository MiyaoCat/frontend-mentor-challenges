I especially had trouble with the inputs, specifically the blue text inside the input boxes. 

It took me 3 iterations to nail. 

First - I tried adding the text using the `:after` pseudo-class then using `position: absolute`. I try to stay way from using position absolute as much as possible, but this was the first thing that came to mind. I positioned the text so it fit inside the input box, but as soon as I changed the screen width the text would move. This clearly would not be suitable.

Second - I looked at some real world forms that have some sort of image or text inside the input. I came across Nike.com and saw that they had a wrap around the input and the text/image. This actually worked, for the most part. I had something like this `
<label for='heightMetric' class='quiet-voice'>Height</label>
    
            <div class='input-wrap height-metric' tabindex="0">
                <input 
                  type='number' 
                  id='heightMetric' 
                  value='' 
                  placeholder= 0
                  min= 0
                />
    
              <div class='cm'>cm</div>
            </div>

`. I then added all of the CSS like hover and focus to the wrap. But one thing that I didn't really like was when I'd tab from one 'input-wrap' to the next input, it would require the user to press tab twice to get to the actually input field (once for the wrap then a second tab to get into the input). I figured I could get away with this, but it wasn't a great experience.

This led me to my final solution. Instead of wrapping the input and text in a separate div, I used the label to wrap the div. The only unfortunate part about this solution is that the label doesn't have any text inside it. However, this solved the tab issue. Now you can easily tab between inputs. 

THings I learned:
I can use a negative value for margin to move elements rather than position: absolute. 