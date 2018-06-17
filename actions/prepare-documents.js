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
	    addr: parms.addr,
	    city: parms.city,
	    state: parms.state,
	    zip: parms.zip,
	    dob: parms.dob,
	    hp: parms.hp,
	    email: parms.email,	    
	    SSN: params.SSN,
	    cship: params.cship,
	  }
  };
}
