import db from '@yusuf-yeniceri/easy-storage';

export async function fetchJobs () {
  let result = await fetch ('https://localhost:7086/api/Job', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      // Authorization: 'Bearer ' + db.ref ('jwt_token').get (),
    },
  });

  return result.json ();
}

export async function login (data) {
  const formData = new FormData ();

  for (const name in data) {
    formData.append (name, data[name]);
  }

  try {
    const result = await fetch ('https://localhost:7086/api/User/login', {
      method: 'POST',
      body: formData,
    });
    return result.json ();
  } catch (error) {
    alert ('login api hata verdi!');
  }
}

export async function signup (data) {
  const formData = new FormData ();

  for (const name in data) {
    formData.append (name, data[name]);
  }

  try {
    const result = await fetch ('https://localhost:7086/api/User/signup', {
      method: 'POST',
      body: formData,
    });
    return result.status;
  } catch (error) {
    alert ('signup api hata verdi!');
  }
}

export async function basvur (JobId) {
  let result = await fetch ('https://localhost:7086/api/Job', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      // Authorization: 'Bearer ' + db.ref ('jwt_token').get (),
    },
  });

  return result.json ();
}

//http isteği -> başlıklar - headers
