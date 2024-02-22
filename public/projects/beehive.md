## Introduction
Beehive is a competitive online multiplayer video game developed in Unity, using Netcode for GameObjects as the multiplayer framework. It was developed as a solo project for the course *TDDD23 Design and Programming of Computer Games* where the aim was to develop a finished video game prototype.

Players start with one tile each at opposing sides of a board. Player 1 is red and player 2 is blue. From there, every 2 seconds they can occupy an adjacent tile and fill it with their player color. The game ends when all tiles on the board are occupied, and the player with the most tiles wins.  

5 different maps were developed to make the game more varied. A random map is picked when the game starts.  

## Tiles
To calculate adjacent tiles, I used rays for all 6 directions that check if there is an adjacent tile. It stops if there is an object there and returns this object, then additional checks see if it is an unoccupied tile. If this tile is unoccupied, it will be available for the player to click on.

## Connecting online
I used Unity's Netcode for GameObjects to develop the multiplayer aspects of the game. The game is connected to Unity's Relay server and works without the use of own servers.
When a host player joins, a join code is generated for them to provide to the client player. When both players have connected, the game starts automatically.

As the client player is connected to the host player, at the game start there is some lag where the host player would start the game before the client player. I fixed this by introducing an extra check at the start of the game

## Bonus system
To make gameplay more varied and unpredictable I added a system that generates bonuses. Each player has three bonus slots, and they can get bonuses by either waiting in 20 second intervals or by occupying a "bonus tile", a yellow tile with a question mark. The bonus tile acts the same as a normal Tile, but has an added function to assign a bonus to the occupying player.

The generated bonus picks one of 6 random bonuses. The available bonuses are as follows:
* HoneyBomb: Pick a tile, upon which all adjacent tiles lose their occupied status and become available for both players.
* BumbleBurst: Pick a tile, upon which all adjacent availale tiles get occupied by the player.
* BeeLine: Pick a tile, upon which a random direction is picked and tiles get occupied one by one by the player until either a hole or an already occupied tile stops it. The direction is random between all adjacent tiles that currently are not occupied.
* Speedy Bee: Makes the player be able to occupy tiles faster for a few seconds
* Sticky Delay: Slows down the other player for a few seconds.
* HiveSwap: Swaps a random player tile with a random opponent tile.

The bonuses are ScriptableObjects where I make use of the Factory design pattern to generate different bonuses with different effects. I found it to be quite efficient to have a Bonus base class to override its Activate method for the different bonus types.

## What I learned
Developing a video game for online multiplayer is quite a challenge! Especially a game that has so many variables running at the same time. Simple functionality that would require one method in a single player game requires three in a game like this. I also needed quite a lot of scripts for the basic multiplayer functionality, such as network clients, host singletons, client managers and authentication wrappers. The game might look simple on the surface, but is actually quite complex behind the scenes!