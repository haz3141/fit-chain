import axios from 'axios';

export default {
	// Gets all books
	getActivities: function() {
		const dbActivities = axios.get('/api/return/activity');
		// console.log({ dbActivities })

		return dbActivities;
	},
	// Gets actions done by the current user email
	// TODO: FINISH FILTER by user Email/._id .>action action, description, count
	getUserActions: function() {
		const userActions = axios.get('/api/user/all/actions');
		// console.log({ userActions })
		
		return userActions;
	}
};

// ====
// ,
// Gets the book with the given id
// getBook: function(id) {
//   return axios.get("/api/books/" + id);
// },
// Deletes the book with the given id
// deleteBook: function(id) {
//   return axios.delete("/api/books/" + id);
// },
// Saves a book to the database
// saveBook: function(bookData) {
//   return axios.post("/api/books", bookData);
// }
