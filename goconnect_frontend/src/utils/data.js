export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};
// d;
export const searchQuery = (searchTerm) => {
  const query = `*[_type=="pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
    image{
      asset -> {
        url
      },
    },
      _id,
      destination,
      postedBy->{
        _id,
        username,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
    },
  }`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
        image{
          asset->{
            url
          }
        },
        _id,
        title, 
        about,
        category,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
       save[]{
          postedBy->{
            _id,
            userName,
            image
          },
        },
        comments[]{
          comment,
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        }
      }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
        image{
          asset->{
            url
          }
        },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      }`;
  return query;
};

export const categories = [
  // {
  //   name: "Bakchodi",
  //   image:
  //     "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F768334189875736576%2FlfplEWnJ_400x400.jpg&tbnid=bApIJIxiV2j-JM&vet=12ahUKEwjn6bTkpauDAxWfvmMGHQhBA2gQMygLegQIARBI..i&imgrefurl=https%3A%2F%2Ftwitter.com%2Fdailybakchodi&docid=6dEqr4pj7NykwM&w=400&h=400&q=bakchodi%20photo&ved=2ahUKEwjn6bTkpauDAxWfvmMGHQhBA2gQMygLegQIARBI",
  // },
  {
    name: "peoples",
    image:
      "https://i.pinimg.com/564x/a4/47/03/a447030f8dca5000d436a7da77095d81.jpg",
  },
  {
    name: "cars",
    image:
      "https://i.pinimg.com/750x/eb/47/44/eb4744eaa3b3ccd89749fa3470e2b0de.jpg",
  },
  {
    name: "wallpaper",
    image:
      "https://i.pinimg.com/236x/03/48/b6/0348b65919fcbe1e4f559dc4feb0ee13.jpg",
  },
  {
    name: "food",
    image:
      "https://i.pinimg.com/236x/7d/ef/15/7def15ac734837346dac01fad598fc87.jpg",
  },
  {
    name: "nature",
    image:
      "https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg",
  },
  {
    name: "art",
    image:
      "https://i.pinimg.com/736x/f4/e5/ba/f4e5ba22311039662dd253be33bf5f0e.jpg",
  },
  {
    name: "travel",
    image:
      "https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg",
  },
  {
    name: "animals",
    image:
      "https://i.pinimg.com/236x/6c/3c/52/6c3c529e8dadc7cffc4fddedd4caabe1.jpg",
  },
  {
    name: "just fun",
    image:
      "https://i.pinimg.com/564x/1f/d4/66/1fd46625d7dd290ca06c8509ad4c9aee.jpg",
  },
];
