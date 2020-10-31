import { openDB } from 'idb';

const dbPromise = openDB('bolaku', 1, {
  upgrade(db) {
    const store = db.createObjectStore('teams', {
      keyPath: 'id',
    });
    store.createIndex('name', 'name', { unique: false });
  },
});

function saveForFavorit(team) {
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

function getAllFavorit() {
  return new Promise((resolve) => {
    dbPromise
      .then((db) => {
        const tx = db.transaction('teams', 'readonly');
        const store = tx.objectStore('teams');
        return store.getAll();
      })
      .then((teams) => {
        resolve(teams);
      });
  });
}

function deteleFavorit(id) {
  dbPromise
    .then((db) => {
      const tx = db.transaction('teams', 'readwrite');
      const store = tx.objectStore('teams');
      console.log(id);
      store.delete(id);
      return tx.complete;
    })
    .then(() => {
      console.log('Team berhasil dihapus');
    })
    .catch((err) => console.log(err));
}

export { saveForFavorit, getAllFavorit, deteleFavorit };
