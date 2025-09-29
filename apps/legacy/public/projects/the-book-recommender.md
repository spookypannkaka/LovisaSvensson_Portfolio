## Introduction
The Book Recommender is a book recommending website made for the course TNM108 Machine Learning for Social Media. Users can input sentences, upon which the most significant words are compared with reviews in a book database. After processing the website returns 5 books that are recommended to the user.

I made the frontend page in React and connected to the Python backend through Flask.

[Here is a detailed outline of the entire project made by all group members.](https://dellacqua.se/education/courses/tnm108/material/project%20archive/2023/p2%202023.pdf)

## Linking Frontend and Backend
Except for general styling, the frontend handles user input and fetches relevant fields from the database in the backend to display to the user.

The user inputs a search string, and clicks the button. This string is sent through Flask to the backend, where it is used with the recommendation algorithm. The recommendation algorithm returns a list of book id:s, which are matched with books. The information about the books are sent back to the frontend and displayed.

## What I learned
I have mostly worked with frontend, so it was nice to learn more about how frontend and backend can be connected.