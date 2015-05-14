List-View
Given I have task->read permission
When I navigate to the page of tasks
Then there is a list of all tasks


Create
Given I have task->create permission
When I select to create a task
And I fill in the necessary information
And I save
Then the task is created
And the task is visible in the tasks list
