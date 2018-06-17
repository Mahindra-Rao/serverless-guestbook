/**
 * Prepare the guestbook entry to be persisted
 */
function main(params) {
  if (!params.fname || !params.SSN) {
    return Promise.reject({error: 'no name or comment'});
  }

	return {
    doc: {
      createdAt: new Date(),
	    fname: params.fname,
	    sname: params.sname,
	    SSN: params.SSN,
	  }
  };
}
