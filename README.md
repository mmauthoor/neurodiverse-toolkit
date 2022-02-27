# The Neurokit 

## Concept
The Neurokit is designed to be a neurodivergent-friendly organisational tool to help those with ADHD and/or autism with time management, planning and general executive functioning throughout the day. Many neurodivergent people struggle with remembering information and actioning tasks using more traditional methods like sticky notes, calendar reminders and even phone alarms. I was inspired to create the Neurokit because my partner, who has ADHD, had to use multiple calendar, note and alarm apps to support his executive functions. Having to use multiple apps was inconvenient and presents more barriers to enacting tasks. I wanted neurodivergent people to have access to a single app that helps them with all aspects of their daily planning and had a clean, neurodiverse-friendly design. 

The Neurokit is a fully front-end React app. As a prototype, it stores and draws user data from local storage. Ultimately it will have a back-end connected to a SQL database and login functionality to allow persistent user data across different browsers. 
Try the app [here](https://theneurokit.herokuapp.com/).

### Current features
- Users can set reminders for events or tasks (including time and date and a reminder title)
- Users can view all reminders in the Reminders page
- Users can pin reminders and notes to the home page dashboard when creating them if they want to keep them front of mind
- Reminders automatically pin to the home dashboard when their timer enters the last 10% of time since the reminder was set (e.g. if a reminder/timer is set 10 months from its event, it will auto-pin 1 month from its event). To account for very short timers, reminders will alternatively auto-pin in the 10 minutes before an event. When a reminder auto-pins depends on whichever comes first: the final 10% of time since setting, or the final 10 minutes to event. 
- Auto-pinned reminders cannot be unpinned from the home dashboard - they must be deleted from the Reminders page. This encourages users to intentionally consider whether or not they engaged with that reminder's event/task, to account for ADHD users with poor working memory or distractibility issues.
- Reminders change colour multiple times: within 5 days of their event (yellow), within 3 days of their event (orange), and within 1 day of their event (red). 
Changing reminder appearances caters to what many people with ADHD describe as 'fading into the scenery', where visual notifications like phone push notifications become less noticeable if they remain static and unchanging.   
- Users can add and edit notes (including note title and content)
- Users can view all notes in the Notes page
- Users can pin (at time of creation) and unpin notes from the dashboard
- Users can add To Do list items through the To Do list page
- To Do list automatically appears on the dashboard
- Users can cross out and delete items from the To Do list both from the home dashboard and the To Do page (currently requires further work for crossed-out items to be consistent between pages)
- Clean, vibrant, text-light design that uses colour-coding and an emphasis on visuals to convey meaning, for better useability for users with dyslexia or distractibility issues.

## Technologies used
- React
- HTML
- CSS
- JavaScript

Third-party library components, including:
- Date/time picker from MUI
- Date FNS date/time parsing
- UUID to generate unique list items IDs
- Icons from React Icons
- Images from Freepix
- Fonts from Google Fonts

## Wireframes


## Approach 
The Neurokit design and creation was based around two key principles: 
- minimising barriers for users to interact with the app
- accommodating issues with time management, planning, poor working memory, distractability and attention span that many neurodivergent people experience

Wherever possible, the design and functionality has been considered and adjusted to avoid common pitfalls that typical organisation planners do not account for. 
For example, many people with ADHD find sound-based timers ineffective as reminders, because users can easily turn the alarm off and may then quickly forget about the reminder's task due to being easily distracted or having poor working memory. The Neurokit's changing reminder colours and auto-pinning functionality is designed to cater to the ADHD experience to keep reminder tasks at top of mind. 
The design is simple but vibrant, and uses colour coding of the different features to convey meaning quickly. Much more work is required to make this app truly neurodivergent friendly, as documented in the Areas of future work below. 

## Challenges 
- Setting up local storage with React Use State and Use Effect hooks (I hadn't used local storage previously)
- Parsing and manipulating date/time data 
- Creating multiple accurate timers (timers are unfortunately approximately 40 seconds behind, requiring further work)

### Bugs and issues
- Not yet fully responsive - responsiveness for small screens (particularly mobiles) needs more work
- Currently users are not able to pin notes or reminders after creation
- Inputs should automatically clear after editing/creating notes and reminders 
- Crossed out To Do list items should be saved to local storage so they can transfer accurately/consistently between the home dashboard and To Do components 
- More visual indication required upon successful creation of notes or reminders, e.g. add a message under the new Note input when a note is successfully created

## Areas of future work
- Ability to pin reminders/notes after creation
- Optional sounds to reminder timers 
- Animations for imminent reminder events - e.g. jiggling or shaking animations to attract user attention even more
- Add full CRUD functionality to all features, e.g. ability to edit reminders and To Do list items
- Pros and Cons feature (where users can create new pros and cons lists to weigh a decision, designed to help with decision making)
- About page with user info about the app
- Add customisation options, e.g. different colour themes, different fonts for people with dyslexia, etc.
- Add general list-making ability, and/or ability to add multiple To Do lists
- Improve component breakdowns and folder organisation
- Refactor css to minimise repetition

## Special thanks & credits
- My partner, who inspired this app, tested its UX and provided endlesssly helpful feedback
- Icons from React Icons and Freepix

## App Demo 
[Try the Neurokit here](https://theneurokit.herokuapp.com/)