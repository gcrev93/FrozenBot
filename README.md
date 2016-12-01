#Welcome!
As you can see Olaf is excited to see you and so are we! If you are here, you must want to learn how to create your own Frozen NodeBot. What is a Frozen NodeBot.. you ask? Its a voice activated singing Elsa doll of course! Wanna learn how to create your own? Well then you came to the right place.

##Why a Frozen NodeBot?
We all have that a special child in our life whether it be a younger sibling, a niece, a nephew or like me, a little sister. They have so much life, so much spirit and really just want to play and have fun. Unfortunately as adults we do not always have the luxury for fun. For me, my sister asks me to play about 5 times a day in 30 minutes intervals so I figured there had to be a way to make my work time, her play time.

As I was brainstorming the idea of how to do so, I also came across the idea of NodeBots, using JavaScript to power and control robots (of some sort...). (To get more info on NodeBots, check out the page) And I could help but think, "wow I bet you could make a cool toy," which is exactly what the Frozen NodeBot is: The homemade cool toy. Only spending $40 to build your own toy, that is using some pretty cool technology seems worth it to me.

The Frozen NodeBot is a voice activated, singing doll. First, the doll will listen out for someone to speak to it. It will then analyze what it heard and then listen for key phrases. Once the key phrases are found the toy will start singing a snippet of the song Let It Go from Frozen the movie. All of this is done using an Arduino, Node.js (hence NodeBot), and a simple API. The code for this project is broken up into 3 easy to understand segements, and then after the hard part there is the fun part... decorating.
Though this site is highlighting the Frozen NodeBot, the technology can be used to emulate any character of your choosing.

##Lets Start Making Magic

Here are the list of materials I used. Some alternatives may include using a different Arduino model, buying the Sparkfun MP3 Player Shields or buying a different portable speaker. Feel free to dabble around with other pieces, GO FOR IT :)

| Item                      | Description                                                                                                                                            | Price                                                                                                                                                                     |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arduino Uno               | This will be the microcontroller board we will be using to play the music                                                                              | [$24.95](https://www.sparkfun.com/products/11021)                                                                                                                         |
| VS1053B MP3 Music Shield  | This shield is used to hold the SD card and connects to a speaker/headphones. It will be controlled by the Arduino                                     | [$18.99](http://www.ebay.com/itm/like/271507195831?lpid=82&chn=ps&ul_noapp=true)                                                                                          |
| microSD Card              | This is a standard microSD card that will hold the music files. It is a good idea to have an adapter in case you computer does not have a microSD slot | [$10.49](https://www.amazon.com/Kingston-Digital-microSDHC-SDC4-32GBET/dp/B00DYQYLP2/ref=sr_1_16?s=pc&rps=1&ie=UTF8&qid=1460096763&sr=1-16&refinements=p_85%3A2470955011) |
| Portable Speaker          | All you need is a small mini speaker that has a regular aux jack. Here is the one I bought:                                                            | [$9.95](https://www.amazon.com/Quikcell-Portable-Flexible-Rechargeable-Battery-Pink/dp/B00XZA8K36?ie=UTF8&psc=1&redirect=true&ref_=oh_aui_detailpage_o03_s00)             |
| Node.js                   | Make sure you have Node.js installed on your machine.                                                                                                  | [Free](https://nodejs.org/en/download/)                                                                                                                                   |
| MP3 Music Shield Library  | Please download this library into C:\Program Files (x86)\Arduino\libraries (or where ever your Arduino libraries folder is located)                    | [Free](http://www.geeetech.com/wiki/index.php/File:MP3-TF.zip)                                                                                                            |
| FrozenBot Repository Code | This is the code you will need to execute the doll. Please download this repo somewhere where you can easily access it.                                | [Free](https://github.com/gcrev93/FrozenBot)                                                                                                                              |
| Arduino Software          | This software is used to flash the Arduino, so that it is ready to go for you!                                                                         | [MAC](https://www.arduino.cc/en/Guide/MacOSX) [Windows](https://www.arduino.cc/en/Guide/Windows)                                                                           |

##Get Ready To Start Singing

Step 1: Get The Tracks
The first thing you need to do, is cut and edit the music samples you would like. If you have never edited music before, I suggest Audacity. You want to make about 10-15 second snippets, so that the toy is not singing forever. (If you do want it to sing full songs and you are 100% sure it wont drive you insane, just save the track to the microSD).
When saving the snippets (or full tracks for the strong minded) onto the microSD card, be sure to save the tracks as track001.mp3, track002.mp3, track003.mp3 and etc. (You may have as many song snippets as you choose, I only have about 4).

Step 2: Connecting the Hardware
Setting up the hardware is a fairly easy process. If you need to check the list of things you need, revisit the 'What You Need Tab' . First insert the microSD card into the MP3 Music Shield. When inserting, you wont need to 'click' it in, just insert.
Next, attach the MP3 Music Shield to the Arduino by placing it on top of the Arduino. Be sure to insert the MP3 Music Shield's male pins into the Arduino's corresponding female headers. They should attach tightly and there should be no wiggle rooms where their pins attach.
Then what you want to do is attach the portable speaker to the MP3 Music Shield, just as you would plug headphones into an MP3 player. Lastly, attach the power cord to the Arduino and plug it in to the computer, so we can get the code running.

Step 3: Flashing the Arduino
Open Arduino IDE and select Examples, go to SFEMP3Shield and then choose MP3Shield_Library_Demo.
Once the sketch opens, upload it to the Arduino. You may hear a slight noise come from the speaker.

Step 4: Executing the Code
Open up a text editor with the FrozenBot files available and also go a command line and go down into the FrozenBot folder. In the command line, you will need to download sox, you can either use brew to download sox or just download. You can find the sox binaries at https://sourceforge.net/projects/sox/files/sox/14.4.2/ . You will also need to install the serialport module by doing "npm install serialport"
In the index.js file, be sure to insert the clientSecret id you got from your Project Oxford API login.
In the index.js file, there is an Analysis functions. There are three keywords that will trigger the arduino to play. Feel free to add or change these words, if you feel as though your child may use other words
In the sp.js file, there is a sp variable on line 7. Be sure to enter your port value where it says insert port. To find your port value go to your Arduino Software, select Tools and then Port and you will see the port to your Arduino listed. If you are using a Mac, may look something like this: /dev/tty.usbmodem1411 or /dev/cu.usbmodem1411. If your port value shows a cu. , replace it with tty in the code or else your Arduino will not be found. If you are using a PC, your port name should say COMx (x being a number).
You are now ready to run it! In the command line, run : node index.js and sing away :)


###Gabrielle Crevecoeur | @nowayshecodes | nowayshecodes.com
