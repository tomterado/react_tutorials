This project was to create a Tic Tac Toe module in React. Below are my notes.


* Standard npm create-react
* Pass data through props
* Do arrow function for onClick to get used to the syntax.
* State


Lifting State
* May be easier to just set state for each square. 
* Is possible but causes code to become more dififuclt
* Store the game’s state in PARENT Board Component
    * Then can tell each Square what to display

In order to facilitate:
* Declare the shared state in their parent component.
* PARENT can pass down date using props
    * Keeps CHILD components in sync with each ot
* Called Controlled Components = parent and children talk to each other. Parent has control of the kids.

Immutability 
* Option A: Mutate Date
* Option B: Change data without Mutation (Copy to new Object etc.)
* Avoiding direct data mutation = lets us keep previous data (of the games history)
* Helps build pure components

History
* Immutable data and accessing that data.
* Moving history into parent parent Game - so Board has the controlled components.

Key
* When an element is created
* React extracts the key … sores the key direct on the returned element
* Automatically uses key to decide which components to update
* Always use keys when you build dynamic lists 


