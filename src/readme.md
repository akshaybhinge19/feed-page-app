# Dependencies

##UI Library / Framework
**React**

##Component Framework
**Material UI**

##API Management
**fetch**

##Styling
**Using CSS files**

## Resourse

We would like you to build a Feed page which should display relevant video posts for the user. Sample results
can be requested from the following URL:
1st set: http://www.mocky.io/v2/59b3f0b0100000e30b236b7e
2nd set: http://www.mocky.io/v2/59ac28a9100000ce0bf9c236
3rd set: http://www.mocky.io/v2/59ac293b100000d60bf9c239
The "posts" array holds a list of sample objects, and the “page” value depicts the pagination iterations.
Using this data, create an app that displays posts in a list with all relevant information. The app needs to:
• Version 1:

- Display every post clearly with relevant information
- Use pagination
- Handle network error or empty feed cases
- Support sort options like Date, Likes, Views, Share
  • Version 2:
- Store posts in local DB to allow offline support
- Use a bottomsheet to show a detailed view of the post on tap
  You will also be judged on usage of design patterns, good code practices and testability. Preferably in React Js.

# Points

- both version 1 and version 2 are implemented in single project
- Displayed post clearly.
- Used Pagiation
- network is handling is implemented using errorDisplay componenet
- user can sort according to like Date, Likes, Views, Share selecting sorting method from dropdown
- stored post in local DB and in case of network failure data is succefylly gets retrived.
