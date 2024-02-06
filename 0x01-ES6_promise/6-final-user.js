import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((result) => {
    const array = [];
    for (const i of result) {
      array.push({ status: i.status, value: i.value || i.reason });
    }
    return array;
  });
}
