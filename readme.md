#YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
  * Name
  * Image

#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap
 
#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

#Add Seeds File
* Add a seeds.js files
* Run the seeds file every time the server starts

#Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

RESTFUL ROUTES

name    url                 verb        desc.
==================================================================
INDEX   /dogs               GET         Display a list of all dogs
NEW     /dogs/new           GET         Display form to make a new dog
CREATE  /dogs               POST        Add new dog to DB
SHOW    /dogs/:id           GET         Shows info about one dog

INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new       GET
CREATE  campgrounds/:id/comments           POST

#Style Show Page
* Add siderbar to show page
* Display comments nicely

#Finish Styling Show Page
* Add public directory
* Add custum stylesheet

##Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model

##Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

##Auth Pt. 3 - Login
* Add login routes
* Add login template

##Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

##Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

##Refactor The Routes
* Use Express router to reorganize all routes

##Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

##Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route

# Deleting Campgrounds
* Add Destroy Route
* Add Delete button

# Authorization Part 1: Campgrounds
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

<!--/campgrounds/:id/edit-->
<!--/campgrounds/:id/comments/:comment_id/edit-->

#Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route:    /campgrounds/:id/comments/:comment_id

# Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

#Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

RESTFUL ROUTES

#RESTful Routes - A table of all 7 RESTful routes

Name        Path            HTTP Verb       Purpose                                             Mongoose Method
===================================================================================================================
Index       /dogs           GET             List all dogs                                       Dog.find()
New         /dogs/new       GET             Show new dog form                                   N/A
Create      /dogs           POST            Create a new dog, then redirect somewhere           Dog.create()
Show        /dogs/:id       GET             Show info about one specific dog                    Dog.findById()
Edit        /dogs/:id/edit  GET             Show edit form for one dog                          Dog.findById()
Update      /dogs/:id       PUT             Update a particular dog, then redirect somewhere    Dog.findByIdAndUpdate()
Destroy     /dogs/:id       DELETE          Delete a particular dog, then redirect somewhere    Dog.findByIdAndRemove()