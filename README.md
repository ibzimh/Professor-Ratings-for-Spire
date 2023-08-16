Adds rate my professor ratings to the spire search for classes page. 

**Contact Info**: Shoot me an [email](ihasaan@umass.edu) if you have any queries or confusions!

Planning on making this into a Chrome Extension, but right now you can either use tampermonkey to get it to work or manually add the script. Here are tutorials for both.

## Using Tampermonkey:


1. Download the Tampermonkey extension (link for [chrome and edge](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), link for [firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/))
2. Press the add extension button(s)

![image](https://github.com/ibzimh/Professor-Ratings-for-Spire/assets/115051423/f8f943d4-ecda-4726-b2f7-ed56c4fa7b38) <br />
![image](https://github.com/ibzimh/Professor-Ratings-for-Spire/assets/115051423/d6d8d6ff-66a8-4bfc-89ba-80836d2a9808)

3. Click the extensions icon on the top right of your page and click on Tampermonkey

![image](https://github.com/ibzimh/Professor-Ratings-for-Spire/assets/115051423/a41531b3-3db2-4bbe-9368-d134d9899f8f) <br />
![image](https://github.com/ibzimh/Professor-Ratings-for-Spire/assets/115051423/dc933239-9904-4c42-b718-e84a911ab0d8)


4. Click enable if it isn't enabled and then click on 'Create a new script...' (*We're almost there!*)

![image](https://github.com/ibzimh/Professor-Ratings-for-Spire/assets/115051423/c2e6f726-bf7d-418b-98da-45baa5790855)

5.  Now go to the [tampermonkey-script.js](https://github.com/ibzimh/Professor-Ratings-for-Spire/blob/main/tampermonkey-script.js) file.
6.  And copy the code in the file (by pressing the copy file button).

![image](https://github.com/ibzimh/Professor-Ratings-for-Spire/assets/115051423/aa3e7160-5ac6-412d-8c7b-3b32f87b6114)

7. Paste the code in tampermonkey and save the file

![image](https://github.com/ibzimh/Professor-Ratings-for-Spire/assets/115051423/4cf289dd-0146-4336-9b9b-8a92b2cccaa6)

8. Now close and reopen your browser and you're good to go! (If the script still doesn't work try disabling and enabling the tampermonkey script, or contact me [here]())


## Manually Adding The Script

1. Open the Spire Search for Classes page 
2. Go into inspect mode by pressing f12 or fn+f12
3. Press Ctrl+Shift+C and then click on the professors name

4. On the top of the inspect page it should show some buttons (like this)
  ![image](https://user-images.githubusercontent.com/115051423/204680471-f27a504a-ca3d-45bb-9b83-44bbbeb604f3.png)
  
5. Press '>>' and then press 'Sources'
 
  ![image](https://user-images.githubusercontent.com/115051423/204680457-22ddcc8a-7b10-486a-a480-8865a92de553.png)

6. Press '+ New Snippet' (click the Show Navigator button if you don't see a '+ New Snippet' button)

  ![image](https://user-images.githubusercontent.com/115051423/204680549-2e9f0e6b-6668-4c17-abaa-31d3dc9d4623.png)

7. Paste the code 
8. Press Ctrl+Enter
9. The snippet will be saved so you won't have to copy paste it everytime!
<br />
