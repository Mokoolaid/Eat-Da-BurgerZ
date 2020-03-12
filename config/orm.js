var connection = require("../config/connection");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}




var orm ={
    selectAll: function(table, cb){
        var dbQuery = "SELECT * FROM " + TABLE + ";";
        
        connection.query(dbQuery, function(err, res){
          if (err) {
              throw err;
          }  
          cb(res);
        });
    }
    insertOne: function(table,cols,vals,cb) {
      var dbQuery = 
      "INSERT INTO " + 
      ") "+ 
      cols.toString() +
      ")" +
      "VALUES (" + 
      createQmarks(vals.length) +
      ") ";

      console.log(dbQuery);
      connection.query(dbQuery, vals, function(err, res) {
          if (err) {
              throw err;
          }
          cb(res);
      });
    }
    updateOne: function(table, objColVals, condition, cb) {
        var dbQuery = 
        "UPDATE " +
        table +
        " SET " +
        translateSQL(objCOlVals) +
        " WHERE " +
        condition;
        
        console.log(dbQuery);

       connection.query(dbQuery, vals, function(err,res) {
            if (err) {
                throw err;
            }
            cb(res);
    });

},
    deleteOne: function(table, condition, cb) {
    var dbQuery = "DELETE FROM " + table + "WHERE " + condition;
    console.log(dbQuery);

    connection.query(dbQuery, vals, function(err,res) {
         if (err) {
             throw err;
         }
         cb(res);
 });

}

};
