import { openDB } from 'idb';

const dbPromise = openDB('bolaku', 1, {
  upgrade(db) {
    const store = db.createObjectStore('teams', {
      keyPath: 'id',
    });
    store.createIndex('name', 'name', { unique: false });
  },
});

function saveForFavorite(team) {
  dbPromise
    .then((db) => {
      const tx = db.transaction('teams', 'readwrite');
      const store = tx.objectStore('teams');
      store.add(team);
      return tx.complete;
    })
    .then(() => {
      console.log('Team berhasil di simpan.');
    });
}

function getAllFavorite() {
  return new Promise((resolve) =>
    dbPromise
      .then((db) => {
        const tx = db.transaction('teams', 'readonly');
        const store = tx.objectStore('teams');
        return store.getAll();
      })
      .then((teams) => {
        console.log(teams);
        return resolve(teams);
      }),
  );
}

function deteleFavorite(id) {
  dbPromise
    .then((db) => {
      const tx = db.transaction('teams', 'readwrite');
      const store = tx.objectStore('teams');
      store.delete(id);
      return tx.complete;
    })
    .then(() => {
      console.log('Team berhasil dihapus');
    })
    .catch((err) => console.log(err));
}

function getFavoriteById(id) {
  return new Promise((resolve) =>
    dbPromise
      .then((db) => {
        const tx = db.transaction('teams', 'readonly');
        const store = tx.objectStore('teams');
        const data = store.get('id', id);
        return data;
      })
      .then((teams) => {
        console.log(teams);
        return resolve(teams);
      }),
  );
}

// const getdata = {
//   async get(key) {
//     return (await dbPromise).get('id', key);
//   },
// }

export { saveForFavorite, getAllFavorite, deteleFavorite, getFavoriteById };
