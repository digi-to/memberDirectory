var queries = function() {
	return {
		newUser: function(fname, lname, email, desc, projects){
			var queryStr = "INSERT INTO members (first_name, last_name, id, email, description, project) VALUES ("
			+ ["'"+fname+"'", "'"+lname+"'", 'NULL',  "'"+email+"'", "'"+desc+"'", "'" + projects.join(', ') + "'"].join(', ')
			+ ");";
			return queryStr;
		}
	};
}

exports.queries = queries;
