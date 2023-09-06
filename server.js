const express = require('express');
const app = express();
const PORT = 3000;

//how to create a view engine/portal engine (Rendering A view)
//make sure you change the references of madeline and Hypatia to 'portal' on class slide notes
const fs = require('fs') // this engine requires the fs module like we did Saturday

app.engine('portal', (filePath, options, callback) => { 
    // define the view engine called portal
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#url#', options.url );
    return callback(null, rendered) // how you tell the engine to stop
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'portal') // register the portal view engine


    app.get('/another-one', (req, res) => {
        // res.render("./views/templete.portal") this would be nessary if lines 21 and 22 were canceled out 
        res.render('template', {
          title: 'We The Best',
          message: 'Who!',
          content:
            'We Taking Over, Major Key Alert, Yall know who it is, All I do is win',
        });
      });
      
      app.get('/about-me', (req, res) => {
        res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
      })
      
      app.get('/another-one', (req, res) => {
        res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
      })

      app.get('/welcome-page', (req, res) => {
        res.render('template', {title: 'Welcome to my website!', message: 'Hi!', content: 'Hello'})
      })

      app.get('/about-page', (req, res) => {
        res.render('template', {title: 'This is the about page!', message: 'Our email!', content: 'Learn all about us'})
      })

      app.get('/contact-page', (req, res) => {
        res.render('template', {title: 'Contact us at example@example.com!', message: 'Hi!', content: 'We are ready for all your questions and concerns'})
      })

      app.get('/product-page', (req, res) => {
        res.render('template', {title: 'Check out our products!', message: 'Your Welcome!', content: 'Check out all this products'})
      })

      app.get('/service-page', (req, res) => {
        res.render('template', {title: 'We offer various services!', message: 'Hope you like our services', content: 'All our varous services are here on this page'})
      })


      app.get('/Travel-page', (req, res) => {
        res.render('template2', {title: 'Check our various destinations!', message: 'Enjoy your stay', content: 'All our varous travel destinations are here on this page', url: "https://images.unsplash.com/photo-1690287913638-d54abf12b891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"})
      })

      app.get('/design-page', (req, res) => {
        res.render('template2', {title: 'We offer various design options!', message: 'We also do interior design as well as Architectural design', content: 'All our varous Architectural/interior designs are here on this page', url: "https://images.unsplash.com/photo-1692494720831-98f93835c84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"})
      });
    
    


      

      
      
app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
  });