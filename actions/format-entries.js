/**
 * Format the Cloudant documents to be consumed by the user interface
 */
const md5 = require('spark-md5');

function main(params) {
  // params contain the "rows" coming from Cloudant including the full documents
  return {
    entries: params.rows.map((row) => { return {
      fname: row.doc.fname,
	    sname: row.doc.sname,
	    addr: row.doc.addr,
    	    zip: row.doc.zip,
            dob: row.doc.dob,
            hp: row.doc.hp,
            email: row.doc.email,
            SSN: row.doc.SSN,
            cship: row.doc.cship,
	    createdAt: row.doc.createdAt,
	    icon: (row.doc.SSN ? `https://secure.gravatar.com/avatar/${md5.hash(row.doc.SSN.trim().toLowerCase())}?s=64` : null)
    }})
	};
}
