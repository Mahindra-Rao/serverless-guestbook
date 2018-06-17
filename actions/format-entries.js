/**
 * Format the Cloudant documents to be consumed by the user interface
 */
const md5 = require('spark-md5');

function main(params) {
  // params contain the "rows" coming from Cloudant including the full documents
  return {
    entries: params.rows.map((row) => { return {
      name: row.doc.fname,
	    email: row.doc.sname,
	    comment: row.doc.SSN,
	    createdAt: row.doc.createdAt,
	    icon: (row.doc.SSN ? `https://secure.gravatar.com/avatar/${md5.hash(row.doc.SSN.trim().toLowerCase())}?s=64` : null)
    }})
	};
}
