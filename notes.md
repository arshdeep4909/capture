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

# Framer Motion

so in the component that we want to put framer animation on, we have to
enclose it within <motion.div>, but it already enclosed with in a styled
div
for example
<Work variants={pageAnimation} initial="hidden" animate="show">
<Movie>

<h2>The Athlete</h2>
<div className="line"></div>
<Link to="/work/the-athlete">
<img src={athlete} alt="athlete" />
</Link>
</Movie>
</Work>

In this case we can go down to where we add styled div and we can
add the framer motion there. i.e

const Work = styled(motion.div)`<!-- right here --> min-height: 100vh; overflow: hidden;`;

--Animate Presence
we add this where we are doing our routing and import animate presence there.
this tells react when we are exiting so it can add the exit animation at that time.

1. the next step is too enclose our switch tag within Animate Presence i.e

function App() {
const Location = useLocation(); // using useLocation
console.log(Location);
return (

<div className="App">
<GlobalStyle />
{/_ importing file to apply global styles _/}
<Nav />
<AnimatePresence exitBeforeEnter> // right here
exitBeforeEnter waits for the page to fade out EXIT and then lets the other page fade in 
<Switch location={location} key={location.pathname}> //right here 
{/_ switch also means that the first time our url matches any path we render that
component _/}
<Route path="/" exact>
{/_ exact esnures that we render AboutUs only when we have /
i.e path is exactly equal to the value that we provided _/}
<AboutUs />
</Route>
<Route path="/work" exact>
<OurWork />
</Route>
</Switch>
</AnimatePresence> // right here
</div>
);
}

2. we import useLocation from react-router-DOM

import { Switch, Route, useLocation } from "react-router-dom";

3. we set Location = useLocation();

4. pass Location in our switch i.e
   location={location} key={location.pathname}
   location.pathname provieds a unique key which tell framer motion that key
   has changed so we are rendering a new(different) page

# Framer Motion and Styled exception

const Work = styled(motion.div)`opacity: 1; width: 50vw;`

here, we said styled(motion.div) because we pass Work in our file rather
than motion.div because we want to give it the style that we define here,
at the same time we want to enclose it with motion.div because we want the
animation to be there.

# Stagger Children

transition: {
staggerChildren: 0.25,
duration: 0.5,
when: "beforeChildren",
},
this property means if staggerChildren is 0.01, the first child will be delayed by 0 seconds, the second by 0.01, the third by 0.02 and so on.
i.e
first child animates
----wait for 0.25-----
second child animates
-----wait for 0.25s----
third child animtes

# Children property

if I wrap a part of code in a div, then I can access it in another file using Children in props
for example

1. we create a component here with Toggle function.

import React, { useState } from "react";

const Toggle = ({ children }) => {
const [toggle, setToggle] = useState(true);
return <div onClick={() => setToggle(!toggle)}>{toggle ? children : ""}</div>;
};

export default Toggle;

2. Now, I go in a different file and add a piece of code within the <Toggle> tag

 <Toggle>
        <div className="questions">
          <h4>How Do I Start?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              laboriosam?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>

--so now I am toggling all the content within the tag as I am accessing it using children
