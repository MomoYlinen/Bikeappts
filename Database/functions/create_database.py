import mysql.connector


def create_database(dbhost,dbuser,dbpassword):
    conn = mysql.connector.connect(host=dbhost, user=dbuser, password=dbpassword)
    print("You're connected to MySQL")
    print('Creating database....')
    cursor = conn.cursor()
    cursor.execute("CREATE DATABASE IF NOT EXISTS bikeappdbtest1")
    print('Database created!')
    conn.commit()
    conn.close()
    