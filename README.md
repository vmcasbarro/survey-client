[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

Back-end deployed: https://safe-fortress-24972.herokuapp.com/ <br>
Front-end deployed: https://vmcasbarro.github.io/survey-client/ <br>
Back-end repo: https://github.com/vmcasbarro/survey-api <br>
Front-end repo: https://github.com/vmcasbarro/survey-client

This was initially a group project that was completed over a span of 3 days. I was really excited about the project, so I decided to continue to add on to it on my own. Below is the initial deployment information if you want to compare!

Back-end: https://blooming-springs-16841.herokuapp.com <br>
Front-end: https://lost-horizon.github.io/best-survey-client/ <br>
Back-end repo: https://github.com/Lost-Horizon/best-survey-api <br>
Front-end: https://github.com/Lost-Horizon/best-survey-client

## Best Survey (Team Project)
Best Survey is an app that allows you to create a true/false question and quickly receive answers from anyone using the app.

Users can log in and create surveys, or they can answer surveys that have been created by other users.

## Try it out!

To try out the app for yourself, go to the deployed url: https://lost-horizon.github.io/best-survey-client/

## Development Process
### Back-end
This back end of this project is written in JavaScript using Mongoose and MongoDB. We used Mongoose to create schemas for users, surveys, and responses. We structured our database to have nested documents (responses) inside surveys since a survey can have multiple responses. This seemed like the logical choice instead of using `.populate()`, since responses will only be retrieved from within their respective survey.

### Front-end
The front end was created with a single-page design, and focused on providing a pleasant user experience. Styling was not heavily focused on, since the priority was meeting MVP specifications. However, we did manage to create a user experience that allows a user to quickly manage their surveys, view all surveys created, and answer surveys. We tried to provided intuitive user feedback that was also functional, but displaying the targeted data when a form is submitted or a button is pressed.

In the future, we’d like to give better visual feedback to the user -- especially using graphs or charts to display results instaed of listing yes/no responses.


### Planning Process
We embraced the scrum process methodology in order to complete this app in 3 days.  We started by taking ample time to discuss roles, expectations, and finally, technical specs we hoped to achieve as a final project. Most of our work focused on re-scoping our initial ideas to meet MVP specifications. We also decided to add structure to our workday in the form of three meetings -- stand-up in the mornings, check-in after lunch, and retro at the end of the day. These meetings helped keep us all on the same page and kept our progress steady.


#### User Stories
* As a user I want to be able to sign up, sign in, change my password, and sign out.
* As a signed-in user I want to create a survey for other users to answer.
* As a user I want to delete any of my surveys.
* As a user I want to see all surveys that I can take.
* As a user I want to see survey results.


#### Wireframes
https://www.figma.com/proto/TTtrBYCQqQorpTo64GhAs9/Project-3-Wireframe-1?node-id=0%3A1&scaling=min-zoom&redirected=1

#### Entity Relationship Diagrams (ERD)
Since we were using nested documents inside a non-relational database, our entity relationships looked like this:

```js
survey {
  question: "a question",
  responses: [
    { answer: "yes/no" },
    { answer: "yes/no" }
  ],
  owner: "a user"
  }
}
```

### Future Goals
As a project, our survey has met a solid version-1 level. However, there are several features we would love to implement in future iterations.

Graph/chart results for surverys would provide a more user-friendly experience. Additionally, we would like to hide responses to a survey until the user has provided an answer to avoid potentially swaying the user with existing responses.

## Built With

* [Express JS](https://expressjs.com/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [MongoDB](https://www.mongodb.com/) - Back-end database
* [Bootstrap/CSS/Sass](getbootstrap.com/) - Styling
* [JavaScript](https://www.javascript.com/) - Programming Language


## Authors

* **Doo Bin Im** - *Project Lead* - [Github](https://github.com/doobin)
* **Alfredo Pabon** - *Front-end Lead* - [Github](https://github.com/alfredrafael)
* **Adam Miller** - *Back-end Lead* - [Github](https://github.com/Amillz70)
* **Vince Casbarro** - *Quality Assurance* - [Github](https://github.com/vmcasbarro)


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
