Feature: Clients
    Scenario: List of clients
        Given I'm have "10" clients in my database
        When I access the home webpage
        Then See the List of "10" items