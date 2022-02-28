<!-- writing some random notes throughout the project in this file  -->

# GlobalStyle

we created a seperate file to create all the global styles
for the file.
imported in our APP and then defined it as an element in App()

# React router

helps us render compoenents based on the url we are on

# Avoiding the error when we have movie null

- we defined the default value of movie as null in our state so when the page first loads it
  take value as null even though this only happnes for a fraction of a second it stil gives out an error

to avoid this we do
movie && "our component"} this means that when our movie is available
then render out our component - LOOK AT NOTES

//
Helps us avoid the error becasue as soon as our movie is defined the situation holds true
and we render out our component
