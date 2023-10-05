import pymongo
import certifi
from secret_keys import con_str

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
