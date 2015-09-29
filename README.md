JavaScript: Thermostat interface

This week we're looking at JavaScript, a very important language, since it is the only language that runs natively in client browsers. It can also run on the server side, but as the de-facto client language it is hugely important. Designed in 10 days in the 1990's by Brendan Eich since "if I didn't design it in less than 10 days, something much worse than JavaScript would have happened", JavaScript is a somewhat querky language that combines various elements from different existing languages, and has both great power and some dangerous pitfalls.

Please check out the Learning Objectives for this week and refer to these throughout the week.

The project this week is to create a simple digital thermostat, using JavaScript, test-driven with Jasmine and using jQuery to interact with the HTML page. As with Battleships Web, there are 2 parts to this project:

    The first is to build a thermostat model, which encapsulates the business logic.
    The second is to create a user interface (UI) in HTML to interact with the thermostat and provide buttons and a display similar to the following:

Thermostat

Use the specification below to plan your code. Think about the separation of concerns (SOC) principle. Which parts of your code should handle the different requirements?
Specification

    Thermostat starts at 20 degrees
    You can increase the temp with the up button
    You can decrease the temp with the down button
    The minimum temperature is 10 degrees
    If power saving mode is on, the maximum temperature is 25 degrees
    If power saving mode is off, the maximum temperature is 32 degrees
    Power saving mode is on by default
    You can reset the temperature to 20 by hitting the reset button
    The thermostat should colour the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

This week's talks

Here's an overview of the schedule for talks this week:

    Monday
        Introduction to JavaScript
        Using Node or Chrome console to play.
        Javascript functions and Scope.
    Tuesday
        HTML and CSS
    Wednesday
        Introduction to jQuery
    Thursday
        API's, AJAX, Asynchronous transactions
    Friday
        Weekend Challenge release
        Retrospective

Stage 1 - Introduction to JavaScript

To get started learning test-driven JavaScript please work through the Javascript & Jasmine Pill.

Spend some time practicing more with the JavaScript syntax. Use Node or the Google Chrome console as a REPL to create some objects and give them functions. There are lots of 'learn JavaScript' resources out there, but the best way is to start writing your own code rather than just stepping through endless tutorials.
Stage 2 - Using Javascript to build the thermostat

    Analyse the specification for the thermostat given above and identify the business logic. We will focus on that first.
    Use the specification to help you plan your Jasmine expectations.
    Using the knowledge learnt in Stage 1, use Jasmine to TDD a set of functions which allow you to create an instance of a thermometer and interact with it.
    Once built, try out your thermostat using the Chrome Console (hint: when you open SpecRunner.html, your JavaScript code should be loaded automatically and available in the console).

Resources

    http://jasmine.github.io/

Stage 3 - Building the interface

    Build a static HTML page as the user interface for your thermometer (hint: is there a static HTML page already in your project that you could use as a template?).
    Add JavaScript to enable your HTML page to interact with your thermostat object. Think again about separation of concerns. Where should this new JavaScript code go?
    Add a file called application.js or app.js or whatever you want to call it, to place your JavaScript code that manages the interface between the UI and the thermostat object.

Stage 4 - Using jQuery - write less, do more!

jQuery is a JavaScript framework used extensively for:

    manipulating the DOM
    handling events. eg. button presses, page loads.
    making AJAX calls. (more about that later) All of these tasks can be written in native Javascript, but jQuery makes it much simpler by handling browser compatibility issues and providing a standardized interface. As the jQuery strapline says: write less, do more!

Use the resources below to get familiar with jQuery then amend your HTML and JavaScript to utilize jQuery.

    To use jQuery you either need to download it and reference the local copy from your HTML, or reference jQuery from a CDN. There are advantages and disadvantages is both approaches.
    There are other installation options such as bower, if you are feeling adventurous!

Test-driven jQuery

There are libraries to help you TDD your jQuery. See: https://github.com/tansaku/ThermostatBDD for a working example of using both JasminejQuery fixtures and jQuery's document.ready in combination.
Resources

    http://learn.jquery.com/about-jquery/how-jquery-works/
    https://jquery.com/
    https://learn.jquery.com/
    https://github.com/velesin/jasmine-jquery

Stage 5 - Connecting to an existing API

Wouldn't it be good if before setting your thermometer's temperature, you knew what the weather was like outside and then you could set the thermometers interface appropriately?

Additional specification - add a feature to display the weather in a city selected by the user.

Luckily there are some API's which can provide us with this information, such as Open Weather Map

    Use a jQuery AJAX call to get the weather information for a specific city and display it to the user.
    Add further functionality so that the user can select their current city and the weather provided is for the selected city.

Stage 6 - You got style

Back to separation of concerns again! Make sure that all the styling of your page is being handled with CSS. You should not have style attributes in your HTML, and avoid setting styles directly in JavaScript. Go to town and make it look beautiful!
Stage 7 - Saving state

There is an issue with your thermometer interface! If you close your browser and reopen it, it forgets what settings you had. It has no persistence. Over the last couple of weeks how have we managed persistence in our applications?

    Create a remote API that the thermostat can talk to. (hint: you can build your own web server to provide this API using Sinatra!).
    Update your UI so that the thermostat communicates changes to the API. For example, it could make a POST request to localhost:4567/temperature, with the new temperature. On page refresh, the thermostat could make a GET request to localhost:4567/temperature to get the temperature.
    Save the selected city information using the API too.

Resources

See the video overview of Ajax for how to talk to a remote API with jQuery: https://www.youtube.com/watch?v=QDsrErWpizI
