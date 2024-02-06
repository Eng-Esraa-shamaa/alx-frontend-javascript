export default function getResponseFromAPI() {
  const state = true;
  return new Promise((resolve, reject) => {
    if (state) {
      resolve();
    } else {
      reject();
    }
  });
}
