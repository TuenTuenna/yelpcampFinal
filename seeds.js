var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest", 
            image: "https://images.unsplash.com/photo-1500213721845-709b85a28da0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6454cbbb20bac175fdea6b4a2ce35b9d&auto=format&fit=crop&w=750&q=80",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            name: "Desert Mesa", 
            image: "https://images.unsplash.com/photo-1534888293908-1ed398223bb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=17113d147a329c420ec4b484dbda307a&auto=format&fit=crop&w=889&q=80",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            name: "Canyon Floor", 
            image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6354eedc19ac4f3d9080c74963489da4&auto=format&fit=crop&w=752&q=80",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
    ]

function seedDB (){
    //Remove all campgrounds
    Campground.deleteMany({},function(err){
        // if(err){
        //         console.log(err);
        // }
        // console.log("removed campgrounds!");
        // //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is greate, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment")
        //                     }
        //                 });
        //         }
        //     });
        // });
    });
    
    
    
    //add a few comments
}

module.exports = seedDB;
