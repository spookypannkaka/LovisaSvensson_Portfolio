## Introduction
MyClimbingJournal is a mobile app where climbers can log the indoor climbing routes they complete, follow gyms and discover new routes, and follow friends. It differs from other indoor climbing apps in the fact that the gym pages can be managed by both the users or the gym itself, allowing users to log any climbing route in any climbing gym as long as they add it to the database.

I received a stipend from Norrköpings Polytekniska förening to aid with a release for both iPhone and Android. I plan to finish up and release the app in 2025.

##

## Database and state management
The database uses Supabase, which uses PostgreSQL. I thought SQL would fit the project best as all the data is relational in some form (a gym has climbing routes, and each climbing route is connected to a gym).

I use RTK Query for communication to and from Supabase, and for caching data. This is useful for updating pages automatically when the database is updated, and for less load for both the user and the server as they don't need to fetch information as often.

## What I've learned

Working on a long term app project has made me very good at building frontend code fast and it comes very naturally now. It has also made me a better UX designer, as I always need to think about the logical flow for users in the app as it has a lot of functions condensed on a small screen. It's fun to have your own passion project come to life and I look forward to testing it with real people.