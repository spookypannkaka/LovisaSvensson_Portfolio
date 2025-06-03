## Introduction

This master’s thesis project was conducted in collaboration with Resolution Games and explores adaptive difficulty systems in virtual reality (VR) racket games. The goal was to develop smarter AI opponents that can automatically adjust their skill level based on how well the player is performing in real time, instead of relying on static difficulty settings like “Easy” or “Hard.”

To do this, I built two machine learning-based bot models using Goal-Conditioned Imitation Learning: one bot that adjusts based on win/loss outcomes, and one based on a continuous skill score. A real-time skill estimation algorithm was also developed, inspired by Elo and TrueSkill, which updates after each point in the game.

## Game and Implementation

The game used was Racket Club, a commercial VR tennis game where players hit the ball inside a walled-in court. I created custom bot behaviors that could be dynamically adjusted. The bots were trained on real gameplay data from the game’s database, and I used Unity’s ML-Agents framework to integrate and evaluate them.

Three difficulty systems were tested:

    Static – Pick one of four difficulty presets.

    Manual – Use a slider to adjust the bot’s difficulty mid-game.

    Automatic – Difficulty adapts automatically based on player performance.

## Real-Time Skill Estimation

The automatic system uses a custom rating algorithm that updates your estimated skill after every rally. This estimate then feeds into the adaptive bot to change how difficult it is to play against. The rating system uses a modified Elo formula and includes a confidence metric to reduce noise and avoid overreaction to single-point outcomes.

## What I learned

Balancing difficulty in real-time, especially in VR where physical performance matters, is extremely complex! It was a big challenge to combine machine learning with traditional game design in a way that feels fair and responsive. I got to work hands-on with real commercial game data, implement machine learning models, and design and run a user study to evaluate different systems.

Even though the adaptive system wasn’t perfect, it was the most preferred by players in terms of engagement and perceived fairness. I think this shows how promising adaptive systems can be in making games more fun for a wide audience.