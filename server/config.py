import pymongo
import certifi
import os
# from secret_keys import con_str
cons_str = os.getenv('MONGODB_URI')

developer = {
    "first"  : "Irvin",
    "last"   : "Zavala",
    "email"  : "irvin.zavala",
    "hobbies": ["chess", "sleep", "basketball"],
    "address": {
        "num": 741,
        "street" : "evergreen",
        "city" : "springfield"
    }
}

client = pymongo.MongoClient(con_str, tlsCAFile = certifi.where())
db = client.get_database("iotStore")
