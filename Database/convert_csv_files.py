import pandas as pd


def convert_csv_for_database(convert):
    tripdata = pd.read_csv(convert, index_col=False, delimiter = ',')
    tripdata.head()
    return tripdata