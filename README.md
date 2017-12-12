Week 1:

This week, I created the html with the select menu and the html for the KBBQ page. I created the base html for the rest of the pages but I have not edited them yet with the corresponding pictures and text. I focused on the second html and testing the swiping function. I wanted to make sure this first html worked before moving onto the rest of the food categories.

I'm currently editing the photos to be compatible with mobile. It took me a while to test the swipe on my phone due to uploading the webpage on Filezilla each time. I'm also testing the photo sizes. Looking at examples of other websites, I want the photos to be zoomed in when vertical and full size when horizontal. I'm still testing the most compatible dimensions. For now, I have the images to be landscape with dimensions 1136x640 (the landscape dimensions of an iPhone 5). I have to test around with the CSS of it as well.

It took me a few days to compile the photos and restaurant information. I received permission and photos from the original photographers. I just have to finish resizing the images once I figure out the best dimensions for mobile. And then insert the rest of the photos into the html.

It took me a while but I was able to figure out how to link the html page to each corresponding text in the select menu. KBBQ page works successfully.

I was able to get the swiping function to work on the desktop and mobile. I was also able to figure out how to add text and get it to swipe with the picture. These are the links I used to help me figure out the swipe:
http://idangero.us/swiper/ (I downloaded the swipe jquery from here)
http://demos.jquerymobile.com/1.4.2/swipe-page/capetown.html

I'll have to finish the rest of the htmls, fix the sizing of the images, and complete final CSS.

When I have time, I want to create an opening screen when you first open the app/website. It would be a title screen saying the name of the app and a button to press to start. The button would lead to the select menu page.


Week 2:

This week I added a bit of CSS to my app. I added some background color and fonts.

The biggest challenge this week was getting my photos to resize on the mobile screen. Using the files Professor McAdams sent me, I based my resizing Javascript from her jQuery. The photos are able to be resized but only when they are clicked on. I'm trying to see if they can be resized on the mobile screen without being clicked on. I tried using the "load" function for the photos but that did not work. I am trying different ways for the photos to be resized but this code works the best. Should I have the pictures to be resized when clicked on or is there a way to adjust this Javascript code? I will keep trying but I will ask the professor in class on Tuesday.

I put the resizing jQuery file separate from the swiping Javascript because the swipe function seems to not work when the two are combined.

For this week, I have finished putting in all of the images and restaurant locations in the HTMLs.

Next week, I will finish the rest of the CSS so all of the pages look good. I will add a title screen HTML for the app. If I have time, I want to add a navigation bar so the user can move freely around different pages.

Week 3:

This week I added a title screen to the app, a side navigation bar, and some CSS.

The biggest challenge was the side navigation. It took a long time to input the side navigation bar into the HTML, Javascript, and CSS. The CSS was a big part of the side navigation panel. These were the websites I used as a guide for the side navigation menu:
https://codepen.io/Shven/pen/chKqD
http://mmenu.frebsite.nl/demo/index.html?demo=menu-advanced-3
https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
http://navnav.co/
https://www.jqueryscript.net/demo/jQuery-Animated-Side-Navigation-Menu-Plugin-Sidebar/
I wanted a side navigation to slide out rather than a top bar because I believe that a side menu would look better for mobile. I made the background color of the navigation panel the same as the app color to match.

I saw a demo that dimmed the main page when the side navigation panel opened. When I searched online, they said using the RGB colors was the best way to get the opacity.

I also found my error with the resizing of the images. The images are now responsive in mobile mode. The images resize themselves in landscape and portrait view on the phone.

I also changed the visibility of the swipe-pagination (the dots of the swipe). I hid the dots because they kept overlapping the text of the photo attribution. For some reason, in mobile mode, the dots kept overlapping the text and I couldn't get them to move below the text. Something would stop it from moving further down. As a result, I hid the dots. I don't think they are needed for the app because the user can just swipe on their phone.

I added a title page to make it seem more like an app. The user would be aware of the name of the app and a short description explaining the app. After clicking the start button, the user would be lead to the food category page.

A final problem I have left is the select menu on the food category page. I don't know if I didn't notice it before or if the select menu somehow changed but on my phone the select menu lets you choose more than one food. I want the user to only choose one. When looking at my website in responsive mode in the browser, the select menu doesn't change. But it changes on my phone. So I'm trying to figure out how to make the user choose only one on the mobile phone.

The last things I will also do are some final CSS touches. I have been checking the validation of my HTMLs and my CSS. The only errors are the Google fonts.

Final summary of my project:

App name: Pin-up. Eat-up.
App description: A simple food guide to help satisfy your hunger.

This app was created as a simple food guide to those who are English speaking travelers and food enthusiasts. For my final project, I focused on the location of the app to be in Seoul, South Korea.

The app is picture based with the name of the food, restaurant, and restaurant location.

I learned a lot through the process of working on this final project. I faced many obstacles but I was able to get my app to function through a ton of resources and many trial-and-errors. I would feel pretty frustrated and lost on what to do when I came across problems. So I would search for resources and demos online and ask questions in class/workshop. The biggest challenges were the swipe, the resizing of images in mobile view, and the side navigation panel.

I believe that this was a very rewarding semester. I'm proud of my app and how the completion of it looks.
