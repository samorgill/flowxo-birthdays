# FlowxoBirthdays
by Sam Orgill
17/4/2018
https://samorgill.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Running the project 

First clone the repo:
git clone git@github.com:samorgill/flowxo-birthdays.git

Then install the dependencies:
npm install

Then run the project: 
ng serve

# Design
I believe 2018 is the year of single page applications and bold vibrant colours, I chose a shade of deepred to differentiate between the sections of the app.
My initial designs are in the src/design folder. As I developed the project I decided that a dark header would be beneficial to help users understand what is content and what is not.
Initially I decided that the search bar would be in the upper right, however taking a design-for mobile first approach I feel this worked better fullwidth across the front of the site, drawing users in.
I am dissapointed with the "Add Birthday" on desktop (though I like it on mobile) button located in the upper right, had I more time I would make this an overlay that engulfed the entire display rather than pop down. 
Similarly the SnackBar used to notify a user that a birthday has been added is located at the bottom of the screen and out of sight, were I to do this project again I'd use Google's Material Design as Angular's native Material design doesn't seem to fully developed yet.

# Development

I developed this application using Angular's CLI to kick off the project. I decided to split all the functionality into components, although this wasn't necessarily required it is good coding practice and ensures the components are reusable.

I developed a BirthdayService to handle, add, delete, update, sort and return the data.

## Cards
Birthdays are organised into cards and depending on which component loads it, it will apear with either (or both) a "x" mark to delete the birthday or an "+" to add a birthday to the "My Birthdays" section.

## Search
The search bar allows a user to enter a name, tap enter and have the results load into a dedicated results component.
This component and search is then dismissed by clicking the x button. Entering a new search will dismiss the previous.

## Todays Birthdays
Loads the birthdays of the day including the persons age

## Upcoming Birthdays
Loads the birthdays coming up in the next 2 weeks.
Displays how many days to their birthday.

## My Birthdays
A section where birthdays the user has added appear.
