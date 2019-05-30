const api = 'http://localhost:3001';

let token = localStorage.token;
if(!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)


const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'Authorization': token

}

export const getCategories = () =>
	fetch(`${api}/categories`, { headers })
	.then(res => res.json())
	.then(data => data.categories)

export const getPosts = (category) => {
	const url = category ? `${api}/${category}/posts` : `${api}/posts`
	return fetch(url, { headers })
	.then(res => res.json())
	.then(data => data)
}

export const getPost = (id) => {
	return fetch(`${api}/posts/${id}`, { headers })
	.then(res => res.json())
	.then(data => data)
}







export const addPost = post => {
  const data = {
    ...post,
    timestamp: Date.now()
  }

  fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => data)
}

export const votePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      option: 'upVote'
    })
  }).then(res => res.json())
    .then(data => data)

export const unvotePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      option: 'downVote'
    })
  }).then(res => res.json())
    .then(data => data)

export const updatePost = post => {
  const data = {
    ...post,
    timestamp: Date.now()
  }

  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => data)
}

export const removePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
    .then(data => data)

// Comments
export const fetchComments = id => {
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
}

export const fetchComment = id =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addComment = comment => {
  const data = {
    ...comment,
    timestamp: Date.now()
  }

  fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => data)
}

export const voteComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option })
  }).then(res => res.json())
    .then(data => data)

export const updateComment = comment => {
  const data = {
    ...comment,
    timestamp: Date.now()
  }

  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => data)
}

export const removeComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
    .then(data => data)


