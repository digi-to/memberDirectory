var queries = function() {
	return {
		newUser: function(fname, lname, email, desc, projects){
			return "INSERT INTO members (first_name, last_name, id, email, description, projects) VALUES ("
			+ [fname, lname, "NULL",  email, desc, projects.join(', ')].join(', ')
			+ ");";
		}
	};
}

exports.queries = queries;
