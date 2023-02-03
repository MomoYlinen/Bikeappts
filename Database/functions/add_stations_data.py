import mysql.connector
from mysql.connector import Error

def insert_stations_to_table(insert_data,dbhost,dbuser,dbpassword):
    try:
        conn = mysql.connector.connect(host=dbhost, database='bikeappdbtest1', user=dbuser, password=dbpassword)
        if conn.is_connected():
            cursor = conn.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ", record)
            counter = 0
            for i,row in insert_data.iterrows():
                if row[7] == " ":
                    row[7] = "Helsinki"
                    row[8] = "Helsingfors"
                    row[9] = "CityBike Finland"
                    sql = "INSERT INTO bikeappdb.stations VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
                    cursor.execute(sql, tuple(row))
                    print("Station was fixed and inserted", counter)
                    conn.commit()
                    counter += 1
                else:
                    sql = "INSERT INTO bikeappdb.stations VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
                    cursor.execute(sql, tuple(row))
                    print("Station inserted", counter)
                    conn.commit()
                    counter += 1
            print("Ready!")
            print(f"{counter} records inserted")
            
    except Error as e:
                print("Error while connecting to MySQL", e)