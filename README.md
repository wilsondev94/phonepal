# PHONEPAL

Project Overview
This project assesses the candidate's ability to develop robust APIs using TypeScript,
NodeJS, EXPRESS and NextJS. The focus is on the ability to:

1. Translate requirements into functional APIs.
2. Demonstrate technical proficiency in building APIs.
3. Implement testing to validate the functionality of the APIs.
4. Design a highly responsive interface
5. Consume API built

Requirements

System Requirements:
The system will consist of two types of users:

1. Admin Users
2. Regular Users
   Functional Requirements
   Order Management
   Regular Users must be able to create an order. An order includes:
   ● Description
   ● Specifications
   ● Quantity
   ● Other relevant metadata

Chat System:
When a Regular User creates an order, a chat room is automatically opened between the
user and an Admin for that order. Note that each order created must have a unique chat
room associated with it.
While admins can access and chat in any chat room, regular users can only access and chat
in the rooms associated with their own orders. Messages in the chat must be saved
persistently.
Only Admins can close a chat room. When closing a chat room, the Admin must provide a
concluding message summarizing the discussion. Once a chat room is closed, no further
messages can be sent by either party. However, both parties can still view the chat history
and the summary provided by the Admin.

Order Status:
When an order is created, it starts in the Review state. The order moves to the Processing
state after an Admin closes the associated chat. Admins can move an order to the
Completed state after processing is done.

Technical Requirements:

API Development:
● Document the API using Postman
● Use Mongo Database
● Please use proper HTTP methods and status codes.
● Validate all request inputs
● Ensure proper error handling, and return proper error messages.

Frontend Development:
● Design a responsive web based frontend using Nextjs
● Use Tailwind CSS
● Use cloudify for asset bucket
● Use API Sauce for Network calls
● Ensure proper error handling on the frontend
● Structure your codes properly, use best practice. Logic should not be written into the
UI components
● Use REDUX for state management
Notes
● Use WebSocket for real-time chat

Testing

Integration tests are mandatory (covering at least 60% of API endpoints).
● Unit tests are recommended but not required.
Submission

Repository:

1. Create a private GitHub repository
2. Add this GitHub account (username: Denis-Profitall) as a collaborator to the
   repository.
3. Include comprehensive README file with:
   ○ Setup instructions
   ○ Testing instructions
   ○ Other relevant

Evaluation Criteria

1. Functionality (35%): Fulfillment of requirements, including order management and
   chat.
2. Code Quality (35%): Readability, maintainability, and adherence to best practices.
3. Testing (20%): Coverage and reliability of integration tests.
4. Documentation (10%): Clear API Docs and README file.
