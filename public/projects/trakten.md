## Introduction

This started as an interest in exploring how to work more with web maps. I started thinking about ideas, and then came to the conclusion that I would love to use an app that encourages me to explore my local area more. Why should I go there? What can be found there? My conclusion was to make an educational app where every small area in a town, city or else displays which plant and animal species can be found there. The intended future work for this is for people to be able to mark which species they have found, and thus contribute to important taxon observation data that for example Artportalen is a part of.

## Map areas
I use OpenStreetMap areas overlayed on MapLibre. OSM data is lightweight and a new version can be downloaded every day. I have converted this data to PMTiles and uploaded online through HTTP requesting in AWS as the PMTiles file is too big to store locally. This also gives the option to set up GitHub Actions so that the map is updated with new OSM data automatically.

## Species data
This was a bit tricky to work with. First off, to think about the user case, people want species recommended to them that they themselves recognize. There are species in nature that are very common but that the average person doesn't know the name of. I had to compose a master list myself of common species across all types, so species from this list are the only ones to get recommended.

I then had to map OSM areas to the biomes these species can be found in. For the species biomes I used SLU Artfakta API and ran it for all species. I then mapped each biome in the dataset to a set of buckets that I also mapped OSM areas to. The result was a table that lists species for each OSM areas. I uploaded this to Supabase so that it is accessible through the web.

It is sadly not a perfect solution. I could not find a stable dataset that lists for example regionality or seasonality, so the final result lacks proper filtering through where in the country the species can be found, and when. A solution for if this will become an interactive app is to collect observations from users and then run it through machine learning instead.

## What I've learned
This has been very educational to learn more about web maps, as well as how species data is stored and handled in Sweden.