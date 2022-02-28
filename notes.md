<!-- writing some random notes throughout the project in this file  -->

# GlobalStyle

we created a seperate file to create all the global styles
for the file.
imported in our APP and then defined it as an element in App()

# React router

1. Wrap our whole project within a react router
   i.e in our index.js file

ReactDOM.render(
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>,
document.getElementById("root")
);
