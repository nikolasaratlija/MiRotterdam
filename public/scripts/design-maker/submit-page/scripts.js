// send user back to /ontwerpen page if user tries to access page before making a design
if (sessionStorage.getItem('designObject') === null)
    window.location.replace('/ontwerpen')
