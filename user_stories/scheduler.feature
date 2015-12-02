Given I am signed in as Audrey
    And I am creating a Fixed task
    And an existing task is in conflict in the schedule
When I save
Then the task is not saved
    And there is a message explaining the error

