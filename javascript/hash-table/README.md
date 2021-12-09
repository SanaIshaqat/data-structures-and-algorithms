# Challenge Setup & Execution
## Branch Name: hash-table

### Challenge Type: New Implementation

Hashtable is an array of a list. Each list is known as a bucket. The position of the bucket is identified by calling the hash() method. A Hashtable contains values based on the key.

## Features
Implement a Hashtable Class with the following methods:

- **add**
Arguments: key, value
Returns: nothing
This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- **get**
Arguments: key
Returns: Value associated with that key in the table

- **contains**
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.

- **hash**
Arguments: key
Returns: Index in the collection for that key

### Tests
![](CC30PassedTests.PNG)