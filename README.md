# meet

#Description
This app will allow users to see upcoming events in any specified city. It uses data from Google Calendar API to fetch data and display alll events from any city. 

#User Stories

Feature 1
1. As a user, I would like to be able to filter events by city so that I can see the list of events
that take place in that city.
Feature 2
2. As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.
Feature 3
3. As a user, I would like to be able to specify the number of events I want to view in the
app so that I can see more or fewer events in the events list at once.
Feature 4
4. As a user, I would like to be able to use the app when offline so that I can see the events
I viewed the last time I was online.
Feature 5
5. As a user, I would like to be able to add the app shortcut to my home screen so that I
can open the app faster.
Feature 6
6. As a user, I would like to be able to see a chart showing the upcoming events in each
city so that I know what events are organized in which city.

#Scenarios
Feature 2: SHOW/HIDE AN EVENT'S DETAILS
Scenario 1
Given the app hasn't been opened, when a user opens the app, then all event elements are collapsed,
Scenario 2
Given a user is on the app, when they click an event, then an event element should expand to see event details
Scenario 3
Given a user has an event opened, when they click the hide details button, then the element collapses to hide its details

Feature 3: SPECIFY NUMBER OF EVENTS
Scenario 1
Given the user hasn't set a specified number of events to show, when the user is on the app, then by default 32 events should show
Scenario 2
Given a user us on the app, when they set their number of events to show, then the app should only display that set number

Feature 4: USE THE APP WHEN OFFLINE
Scenario 1
Given the user is offline, when they open the app, then the app should show cached data
Scenario 2
Given the user is offline, when a user changes the settings, then an error message should pop up

Feature 5: DATA VISUALIZATION
Scenario 1
Given a user is on the app, when they click on any specific city, then they shiould be able to see a chart with any number of upcoming events in that city.
