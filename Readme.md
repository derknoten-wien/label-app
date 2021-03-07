This is a simple react web-app to quickly produce pdfs with Produkt Lables for our CSA farm. 

To set it up you need docker and docker-compose on your server. By default this app runs on port 3100. It is not ready to run on it's own - you need a reverse proxy in front of it (nginx proxy manager is the way to go - check out this tutorial https://www.youtube.com/watch?v=cjJVmAI1Do4&t=1935s ). If you want to change the port you can do so in docker-compose.yml

If you wish to adapt it, just change the logo file in /src/img and change the title of the lable to whatever you like in /src/Pdf-View.js.

You can also change the font by adding a ttf file to /src/img. If you don't want to touch the code it should be named "bradhitc_bold.ttf".

If you are interested in collaborating on this to add more functionality let me know. I probably won't develope this any further, because the functionality as is, is enough for our needs. However I'm happy to incorporate pull requests with added features!

To see this in action go to https://etiketten.derknoten.wien
