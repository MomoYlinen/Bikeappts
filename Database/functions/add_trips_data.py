import mysql.connector
from mysql.connector import Error

def insert_tripdata_to_table(insert_data,dbhost,dbuser,dbpassword):
    try:
        conn = mysql.connector.connect(host=dbhost, database='bikeappdb', user=dbuser, password=dbpassword)
        if conn.is_connected():
            cursor = conn.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ", record)
            counter = 0
            counter2 = 0
            for i,row in insert_data.iterrows():
                if row[6] > 10 and row[7] > 10:
                    sql = "INSERT INTO bikeappdb.trips VALUES (%s,%s,%s,%s,%s,%s,%s,%s)"
                    cursor.execute(sql, tuple(row))
                    conn.commit()
                    counter += 1
                    print("Journeys was inserted", counter)
                counter2 +=1
            print("Ready!")
            print(f"{counter} journeys inserted")
            print(f"{counter2-counter} journeys were insufficient")
        
    except Error as e:
            print("Error while connecting to MySQL", e)