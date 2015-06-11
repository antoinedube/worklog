# https://github.com/witoldsz/angular-http-auth

Given I have a valid username and password
When I login in the application
Then I can view the home page of the application

Given I do not have a valid username or password
When I login in the application
Then I am shown a message informing me of the error
