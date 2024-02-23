## Introduction
The Spaceship was my bachelor's project in Media Technology, developed in a group of 7 classmates. It is a short puzzle game played on 2 monitors that are facing away from each other. With each monitors is a set of arcade controllers with a joystick, a wheel and four buttons. The aim was for 2 people to get through 4 different puzzles by communicating to each other about what they saw on the monitors and what they could do with the controllers.

The game was developed to be played in a public environment, as if it was part of an exhibit people could visit. At the end of the project we got to test the game in public at a convention at Linköping University.

A large focus of this project was to learn how to efficiently plan for and finish a bigger project with a bigger group. As such I got to learn about development methodologies, and we mainly used Scrum to plan our project. A part of the planning was to plan out a game that would fit a certain target group, so the focus was not necessarily to make an advanced game project and more on how to finish a game project at all.

For the game itself, I helped set up the Unity project, developed the start screen functionality and the moving lamp in the game.

## Start Screen Functionality
Each player has 4 different physical buttons colored blue, red, yellow and green. They are mapped to keyboard inputs in the game. Each player has 2 visible buttons on their monitors that shows what buttons both players press in real time. If player 1 presses the red button, the button turns red in the game. When both players match colors at the same time, the game triggers and proceeds to the next level.

In a public environment, players would not know how the game works until they start playing it. I chose to implement this to make the game controls a bit clearer and to let players know that they are supposed to cooperate to proceed in the game.

## Lamp Puzzle
The puzzle after the start screens is a lamp puzzle, where both players need to input a sequence of 4 colors to proceed to the next level. They are not in the same room and do not see the same things on both monitors. One player can turn the wheel to rotate a valve, which moves the lamp for the other player. This lamp uses a mask to only display objects that are in the "light" below it. This way they can communicate to each other about what they can see on their monitors and how the input sequence for the buttons should be.

## What I learned
The finished game isn't very advanced, but it gave good insight on how to finish a software project with a team. I know about development methodology and how to use planning tools to efficiently plan and divide work among the team members.