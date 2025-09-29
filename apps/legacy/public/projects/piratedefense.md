## Introduction
This top-down tower defense game was developed as a project in the course *TDDD57 Physical Interaction and Game Programming*, a course in developing video games with body interaction in mind. The game uses the hand-tracking algorithm from MediaPipe to fetch hand positions in-game.

In the game, pirate ships will spawn and try to steal coins from the island. You can shoot down the pirate ships with your own ships, which you do by moving them or adjusting the shooting area. You have to defend the island a certain amount of time to win the game.

## Steering
MediaPipe provides tracking of all points of hands using your webcam. These points were fetched in the game. Comparing points with each other tells you how the hand is acting - for example, if the top of the thumb and the top of the index fingers are close to each other, you are likely pinching, and the game recognizes this.

There are a few movements that are recognized in the game:
* Pointer: Acts as a mouse should, and is tracked with wrist movement.
* Grabbing: You can grab ships by making a fist when the tracker is hovering above it.
* Rotating: If you hold a ship and rotate your hand, the ship will also rotate.
* Pinching: If you hover above a ship and pinch, you can adjust the shooting area of the ship. A smaller pinch makes the area small but long, and vice versa.
* Open hand: If you open your hand above the island, you can push away enemies from the island. Kind of like an explosive movement that makes a wave.

## What I learned
Gaming with actual interaction is a pretty interesting field to explore. You have to think closely about what movements would be natural for players to do, while also developing stable movements. Visual feedback is very important for games like this, as you don't actually touch anything and can't get feedback that way.