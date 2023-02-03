from functions.create_database import create_database
from functions.create_tables import create_tables
from functions.add_stations_data import insert_stations_to_table
from functions.add_trips_data import insert_tripdata_to_table
from functions.convert_csv_files import convert_csv_for_database


# INSERT DATABASE CREDENTIALS HERE!
host=''
user=''
password=''

# PUT CSV FILES TO Database folder AND INSERT THE NAMES HERE!

stations=''
trips1=''
trips2=''
trips3=''

stations_ready_for_table = convert_csv_for_database(stations)
trips_ready_for_table1 = convert_csv_for_database(trips1)
trips_ready_for_table2 = convert_csv_for_database(trips2)
trips_ready_for_table3 = convert_csv_for_database(trips3)


create_database(host,user,password)
create_tables(host,user,password)

insert_stations_to_table(stations_ready_for_table,host,user,password)
insert_tripdata_to_table(trips_ready_for_table1,host,user,password)
insert_tripdata_to_table(trips_ready_for_table2,host,user,password)
insert_tripdata_to_table(trips_ready_for_table3,host,user,password)
