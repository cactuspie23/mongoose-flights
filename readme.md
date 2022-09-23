# Intro

<aside>
🏆 This lab, when combined with [Mongoose Flights Lab - Part 2](https://www.notion.so/Mongoose-Flights-Lab-Part-2-0d4b03b6138d4f2a8787c727bbb27ad6) and [Mongoose Flights Lab - Part 3](https://www.notion.so/Mongoose-Flights-Lab-Part-3-634c6f1423b441d382e7857e03e18aeb), is a deliverable! Turn it in via Clippy before the start of class on September 29, 2022.

</aside>

Today in the ‣ lesson, you Created and Read documents using a `Movie` Model.

In this lab, you’ll do the same, except you’ll create and use a `Flight` model.

Similar to what we did in the lesson, you’ll start by creating a `mongoose-flights` project.

Future lessons will expand upon the `mongoose-movies` project, and the labs will expand upon the `mongoose-flights` project!

### ***The final version of mongoose-flights (parts 1 through 3 combined) will be a deliverable, so do each part and don’t fall behind.***

# Exercises

1. Use e-gen-replacement to create a `mongoose-flights` project. Be sure to install the node modules after you cd into the project.
2. Create a **`config/database.js`** module that connects to a database named `flights`. Be sure to import the module in **`server.js`**.
3. Create a `Flight` Model with the following properties:
    
    [Properties of the Flight Model  ](https://www.notion.so/f13311ec304d4427978121de8e0ae064)
    
4. Implement the following User Stories:
    - AAU, I want to view a list of all flights (index view) that displays each flight’s airline, airport, flight no., and departure date/time.
    - AAU, I want to create a flight by entering the information on a `new` view that has a form. When I submit the form I should be taken back to all the flights.
    - AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:
        - `ALL FLIGHTS`, and
        - `ADD FLIGHT`
    - AAU, I want to be able to delete a flight from the list on the `index` view.
    - AAU, I want to be able to click on a flight to view its details on a `show` view.
    - AAU, I want to be able to click a button WITHIN the `show` view that brings me to an `edit` view where I can adjust a flight’s details.  When I save these changes, they should persist to the database and redirect me back to the flight’s `show` view.

## Hints:

- Checkout the `[<input type="datetime-local">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local)` to assist users in entering valid date/time values.
- In the form for adding a new Flight, use a `<select name="airport">` to assign the flight’s `airport`. Since they don’t change, it’s okay to hard-code the `<option>` elements, e.g., `<option value="DEN" selected>`.

# Bonuses

1. Display the default departure date when displaying the new flight form.
Hints:
    1. In the flight controller’s `new` action, you could create an in-memory flight using the below code. This in-memory flight doc would have the default departure date set properly based on the logic in the function you assigned to `default`.
        
        ```jsx
        const newFlight = new Flight();
        ```
        
    2. Just like any other data you want to access/display in a view template, that data needs to be passed by the controller action when it calls `res.render`.
    3. However, although an input of `type="datetime-local"` will display a date assigned to its `value` attribute, that date value needs to be formatted as a string. The string should match this format: `yyyy-MM-ddThh:mm`. Yes, we use a “T” character to separate the date portion from the time portion. One way of obtaining the properly formatted string is to use the `toISOString()` method and use `slice()` to return only the first 16 characters, for example:
        
        ```jsx
        const newFlight = new Flight();
        // Obtain the default date
        const dt = newFlight.departs;
        // Format the date for the value attribute of the input
        const departsDate = dt.toISOString().slice(0, 16);
        res.render('flights/new', {departsDate});
        ```
        
2. Code these new User Stories:
    - AAU, I want to view the list of flights by departure date in ascending order.
    - AAU, I want the flights in the list to be displayed using red text if the flight’s departure date has passed.
3. Style the `index` and `new` views.