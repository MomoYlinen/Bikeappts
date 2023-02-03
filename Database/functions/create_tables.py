import mysql.connector

def create_tables(dbhost,dbuser,dbpassword):
    conn = mysql.connector.connect(host=dbhost, database='bikeappdbtest1',user=dbuser, password=dbpassword)
    print("You're connected to MySQL")
    cursor = conn.cursor()
    cursor.execute("SELECT DATABASE();")
    record = cursor.fetchone()
    print("You're connected to database: ", record)
    print('Creating tables....')
    cursor.execute("CREATE TABLE stations (fid int, id int,nimi varchar(255),namn varchar(255),name varchar(255),osoite varchar(255), adress varchar(255), kaupunki varchar(255), stad varchar(255),operaattor varchar(255), kapasiteet varchar(255), x float, y float)")
    cursor.execute("CREATE TABLE trips (departure datetime, arrival datetime,departurestationID INT,departurestation varchar(255),returnstationID INT,returnstation varchar(255), distance INT, duration INT)")
    conn.commit()
    conn.close()
    print('Tables created!')