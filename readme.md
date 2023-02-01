# Helsinki city bike app (Dev Academy pre-assignment)
This project was created for Solita's Dev Academy as a pre-assignment. The aim of the project is to develop an application that allows users to view data on city bike journeys taken during the summer of 2021 in Helsinki and Espoo. Additionally, users can search for specific city bike stations in these cities and view more detailed information about them.

Three Excel files containing journey data from the summer of 2019 were provided, as well as one Excel file with a list of all city bike stations in Helsinki and Espoo. The task was to use these files to create a UI, back-end, and database. The full details of this pre-assignment can be found on the following [here] (https://github.com/solita/dev-academy-2023-exercise).

The key technologies used in this project include Next.js (TypeScript), Node.js/Express (TypeScript), and MySQL/TypeORM.

## Table of Contents



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



Next, run following commands to install dependencies to the Backend

```
cd Backend
npm install
```
Do the same thing in frontend

```
cd frontend
npm install
```