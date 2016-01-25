
let login = (username, password) => {
  if(username !== 'admin' || password !== 'radical') {
    console.log('incorrect login');
  } else {
    console.log('Successfully Authenticated.');
  }
};

login('admin', 'radical');
