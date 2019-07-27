# User Stories

Typical User: Instructor / Student

## User should be able to save and customize a resource

as a Student I want to save and customize an external lecture, because I want to
personalize and centralize my library of educational resources.

Front-end Requirement: Save URL , Customize Saved URL

User Experience Implementation: Input Form, Edit Button, Delete Button

Back-end Implementation: URL Section in Database

Feature: Save and Customize Resources

## User should be able to search for saved resources

as a Student I want to be able to search an educational library based on my
parameters, because I want to facilitate my access for specific educational content.

Front-end Requirement: Search Database, Parameter Specification

User Experience Implementation: Search Form, Parameter Form

Back-end Implementation: Search queries for SQL using specific parameters

Feature: Search for a Saved Resource

Parameter: Topics/Subjects specific to a given Resource

## User should be able to categorize resources

as an Instructor I want to be able to categorize my educational resources because I want to
access a specific resource to quickly lookup information while omitting unrelated resources.

Front-end Requirement: Categorize resources, Parameter Specification

User Experience Implementation: Select Topic/Category in Resource Creation, Edit Category

Back-end Implementation: Categories section in Database + Linked with Resources

Feature: Categorize a Resource

## User should be able to comment on any resource

as a Student I want be able to comment on a specific lecture because I want to share my
opinion with the community on a given topic, as well as ask questions on information that i
did not properly grasp.

Front-end Requirement: Post Comment route

User Experience Implementation: Comment text-form

Back-end Implementation: Comments section in Database + Linked with Resources

Feature: Post a Comment

## User should be able to rate resources

as a Student I want to rate educational resources because I want to be able to have a hand in
the quality of submissions and reduce the amount of poorly created resources.

Front-end Requirement: Rating Form (1 to 5)

User Experience Implementation: Rating selector with Icons

Back-end Implementation: Rating Modifier in Query + Rating section in Database

Feature: Rate a Resource

## User should be able to like resources

as an Instructor I want to like a specific educational resource because I want to be able to like and pin
higher quality submissions for efficient access later on.

Front-end Requirement: Saves Resource in Liked Section

User Experience Implementation: Pin Icon

Back-end Implementation: Liked Section in Database

Feature: Like a Resource

## User should be able to see their liked and created resources

as a Student I want to see my liked resources because I want to be able to quickly reference back to
submissions that i have enjoyed.

Front-end Requirement: Liked Category

User Experience Implementation: Liked Tab in Resource View

Back-end Implementation: Liked Section in Database

Feature: View a liked Resource

## User should be able to register, login, logout and update profile information

As a User i want to be able to create my own personalized experience because i want to be able to access
the website as an individual, with my own settings and information.

Front-end Requirement: Login / Register Forms with Login and Log Out buttons

User Experience Implementation: Easy to use Header forms/buttons to link to Login/Register/Log Out Routes

Back-end Implementation: User Database

Feature: Register/Login/LogOut and Update Profile
