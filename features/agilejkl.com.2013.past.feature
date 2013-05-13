Feature: Agilejkl 2013 Past checks
    As a organizer of AgileJkl 2013 conference
    I want to make sure that necessary steps for closure have been taken
    So that I can forget the whole thing

    Scenario: We promise to add videos and reactions
        Given we point browser to "http://agilejkl.com" address
        When I browse the page
        Then I see words "We will add links to the slides and videos"
        And I close the browser

    Scenario: Webpage says it's over
        Given we point browser to "http://agilejkl.com" address
        When I browse the page
        Then I see words "The event is over"
        And I close the browser
