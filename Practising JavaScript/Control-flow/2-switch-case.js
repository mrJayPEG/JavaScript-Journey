let role; //Lets imagine that this is the role of the current user and we want to see if this user is a guest or a moderator or admin

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User')
}