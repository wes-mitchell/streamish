import { getToken } from "./authManager.js";

const baseUrl = '/api/video';

export const getAllVideos = () => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("An unknown error occurred while trying to get videos.",
        )
      }
    })
  });
}

export const getAllVideosWithComments = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/GetWithComments`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("An unknown error occurred while trying to get videos.",
          )
        }
      })
  });
}

export const searchVideosByTitle = (title, bool = true) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/search/?q=${title}&sortDesc=${bool}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("An unknown error occurred while trying to get videos.",
          )
        }
      })
  })
}

export const getVideo = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("An unknown error occurred while trying to get videos.",
          )
        }
      })
  })
}

export const addVideo = (video) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(video),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new quote.",
        );
      }
    });
  });
};