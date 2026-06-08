// import PR29_2 from './PR29_2.jsx';
// import PR29_3 from './PR29_3.jsx';
// import PR29_4 from './PR29_4.jsx';
// import PR29_5 from './PR29_5.jsx';
// import PR29_6 from './PR29_6.jsx';


// import PR30_1 from './PR30_1.jsx';
// import PR30_2 from './PR30_2.jsx';
// import PR30_3 from './PR30_3.jsx';
// import PR30_4 from './PR30_4.jsx';
// import PR30_5 from './PR30_5.jsx';
// import PR30_6 from './PR30_6.jsx';
// import PR30_7 from './PR30_7.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './PR31_1/Home.jsx';
// import CreateTodo from './PR31_1/CreateTodo.jsx';
// import EditTodo from './PR31_1/EditTodo.jsx';
// import DetailTodo from './PR31_1/DetailTodo.jsx';

import Utama from './PR31_2/Utama.jsx';
import ListUser from './PR31_2/ListUser.jsx';
import PostUser from './PR31_2/PostUser.jsx';
import DetailUser from './PR31_2/DetailUser.jsx';
import EditPostUser from './PR31_2/EditPostUser.jsx';
import CommentUser from './PR31_2/CommentUser.jsx';


function App() {
  return (
    // <div>
    //   {/* <PR29_2 /> */}
    //   {/* <PR29_3 /> */}
    //   {/* <PR29_4 /> */}
    //   {/* <PR29_5 /> */}
    //   {/* <PR29_6 /> */}


    //   {/* <PR30_1 /> */}
    //   {/* <PR30_2 /> */}
    //   {/* <PR30_3 /> */}
    //   {/* <PR30_4 /> */}
    //   {/* <PR30_5 /> */}
    //   {/* <PR30_6 /> */}
    //   {/* <PR30_7 /> */}
    // </div>

    <Router>
      <Routes>
        {/* PR 31 bagian 1 */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/buat" element={<CreateTodo />} /> */}
        {/* <Route path="/edit" element={<EditTodo />} /> */}
        {/* <Route path="/detail" element={<DetailTodo />} /> */}

        {/* PR 31 bagian 2 */}
        <Route path="/" element={<Utama />}>
          <Route path="list-user" element={<ListUser />} />
          
          <Route path="detail-user/:user_id" element={<DetailUser />}>
            <Route path="post" element={<PostUser />} />
            <Route path="comment" element={<CommentUser />} />
          </Route>

          <Route path="post-user" element={<PostUser />} />
          <Route path="edit-post/:post_id" element={<EditPostUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;