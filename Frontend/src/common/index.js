import db from '@yusuf-yeniceri/easy-storage';

export async function fetchJobs () {
  let result = await fetch ('https://localhost:7086/api/Job', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      // Authorization: 'Bearer ' + db.ref ('jwt_token').get (), fetchjobs herkes erişebilmeli
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

export async function basvur (jobId) {
  let result = await fetch (
    'https://localhost:7086/api/Job/basvur?id=' + jobId.toString (),
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + db.ref ('jwt_token').get (),
      },
    }
  );

  return result.json ();
}
export async function basvurulanlar () {
  let result = await fetch ('https://localhost:7086/api/Job/basvurulanlar', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + db.ref ('jwt_token').get (),
    },
  });

  return result.json ();
}

export async function kaydet (jobId) {
  let result = await fetch (
    'https://localhost:7086/api/Job/kaydet?id=' + jobId.toString (),
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + db.ref ('jwt_token').get (),
      },
    }
  );

  return result.json ();
}
export async function kaydedilenler () {
  let result = await fetch ('https://localhost:7086/api/Job/kaydedilenler', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + db.ref ('jwt_token').get (),
    },
  });

  return result.json ();
}

export async function sil (jobId) {
  let result = await fetch (
    'https://localhost:7086/api/Job/sil?id=' + jobId.toString (),
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + db.ref ('jwt_token').get (),
      },
    }
  );

  return result.json ();
}

//http isteği -> başlıklar - headers
