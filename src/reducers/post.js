
// {
//   posts: [{
//     _id:
//     title:
//     text:
//   }],
//   selectedPost: {},
//   newPost: {title: text:},
// }
const posts = (state = [], action) => {
  switch (action.type) {

    case 'POSTS_FETCHED':
      return action.posts

    case 'ADD_POST':
      return [...state, {_id: action._id, title: action.title, text: action.text}]

    default:
      return []
  }
}

export default posts;
