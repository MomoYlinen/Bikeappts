# Helsinki city bike app (Dev Academy pre-assignment)
This project was created for Solita's Dev Academy as a pre-assignment. The aim of the project is to develop an application that allows users to view data on city bike journeys taken during the summer of 2021 in Helsinki and Espoo. Additionally, users can search for specific city bike stations in these cities and view more detailed information about them.

Three Excel files containing journey data from the summer of 2019 were provided, as well as one Excel file with a list of all city bike stations in Helsinki and Espoo. The task was to use these files to create a UI, back-end, and database. The full details of this pre-assignment can be found on the following [here](https://github.com/solita/dev-academy-2023-exercise).

The key technologies used in this project include Next.js (TypeScript), Node.js/Express (TypeScript), and MySQL/TypeORM.

## Table of Contents

- [Helsinki city bike app (Dev Academy pre-assignment)](#helsinki-city-bike-app-dev-academy-pre-assignment)
  - [Table of Contents](#table-of-contents)
  - [Pre-prequisites](#pre-prequisites)
  - [Installation](#installation)
    - [Setting up the database](#setting-up-the-database)
    - [Setting up Backend](#setting-up-backend)
    - [Setting up Frontend](#setting-up-frontend)
  - [Features](#features)
      - [Homepage](#homepage)
      - [Stations page](#stations-page)
      - [Station page](#station-page)
  - [Technologies](#technologies)
      - [Database (MySQL/TypeOrm)](#database-mysqltypeorm)
      - [Backend (NodeJS/Express)](#backend-nodejsexpress)
      - [Frontend (NextJS)](#frontend-nextjs)

## Pre-prequisites

In order to run this project locally, it is necessary to have MySQL installed on your computer. Alternatively, you can use a Docker image of MySQL. It is also required to have Node.js installed on your machine.

## Installation

First, run the following command to clone the repository.

```
git clone https://github.com/MomoYlinen/Bikeappts.git
```

### Setting up the database

To be able to run this project, you have to set up the database first. Here are the instructions.

First go to folder `Database` and copy the excel files that are used in this project. You can find them [here](https://github.com/solita/dev-academy-2023-exercise). There should be three files containing journeys and one file containing list of stations.

Go to `create_database_bikeapp.py` and provide crendentials to access your MySQL. Run `create_database_bikeapp.py` to create database for station and trip data.

Next, go to `add_stations_data.py` and provide crendentials to access your MySQL. Run `add_stations_data.py` to create table and add all the stations to database.

Next, go to `add_trips_data.py` and provide crendentials to access your MySQL. Run `add_trips_data.py` to create table and add all the stations to database.

### Setting up Backend

Run following commands to install dependencies to the Backend

```
cd Backend
npm install
```

Go to `src` and provide crendentials to access your MySQL database in `data-source.ts`

You can start the server by running:

```
npm run dev
```

### Setting up Frontend

Run following commands to install dependencies to the Frontend

```
cd frontend
npm install
```

If you want to use google maps, make `.env.local` file and provide your API Key.

You can start the application in development mode by running:

```
npm run dev
```

If you want to run in production mode:

```
npm run start
```

## Features

As it was requested, there are three main features in this application.

#### Homepage

In this page, you will be provided with info about all the journeys made in summer 2021, with some additional information. Here are the features that you have:

- Paginated list of all journeys
- Ability to search journeys by providing station name
- Information about total number of journeys made, total number of distance travelled and total number of time spend cycling.

#### Stations page

In this page, you will be provided with list of all stations. Here are features that you have:

- Paginated list of all stations
- Ability to search stations by providing station name or city

#### Station page

In this page, you can look data about individual station. Here are the features that you have:

- Station name and address
- Total number of journeys started from the station
- Total number of journeys ended from the station
- The average distance of a journey starting from the station
- The average distance of a journey ending at the station
- Top 5 most popular return stations for journeys starting from the station
- Top 5 most popular departure stations for journeys ending at the station
- Location of station provided by Google Maps

## Technologies

There were a lot of new technologies that i haven't use before. This was my first experience using TypeScript as the main language, instead of JavaScript. Additionally, it was also the first time I used Next.js, which is something i've been wanting to do for while. In my opinion, I believe I chose the best technology stack to complete this project. Please find below my breakdown and reasoning for my technology choices.

#### Database (MySQL/TypeOrm)

I believe that a relational database was essential for this project, given that there were over three million journeys with 500 stations provided as data. MySQL was my preferred choice for this, as it is my go-to database for relational databases. This was my first time using an Object-Relational Mapping (ORM) tool to manage my database in the backend, and I utilized TypeOrm, which was straightforward to set up and enabled me to run queries with ease. However, testing proved to be a challenge. I encountered difficulties finding an efficient solution for testing my backend with my database. Although I may have been able to find a solution with further effort, I decided to concentrate on other aspects of my project in order to make progress.


#### Backend (NodeJS/Express)

As the backend, I aimed to develop a REST API that could function as a standalone service for various applications. Given my prior experience with building REST APIs using Node.js with Express, I chose this technology stack for this project as well. I am confident that the REST API I created is capable and efficient, able to deliver results with custom parameters and pagination as necessary.

#### Frontend (NextJS)

The frontend technologies were among the most exciting aspects of this project for me. I had heard many positive things about Next.js, particularly with regards to its features such as static site generation, dynamic routes, and server-side rendering. I was not disappointed in my experience with it, as I had previous experience with React and React Native, so there was no steep learning curve for me. I was able to fully utilize the capabilities of Next.js and believe that it was the ideal choice for this project.

Another noteworthy frontend technology was Material-UI and React Query. I enjoy using Material-UI as it offers a convenient set of components, even if it may not be the most customizable. React Query proved to be extremely useful for pagination and searching purposes. I also experimented with Framer-Motion for some simple animations.

In conclusion, I am satisfied with the frontend technology stack. The frontend appears to be fast and responsive, even with a large amount of data.