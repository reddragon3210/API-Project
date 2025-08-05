import { CircleUser } from 'lucide-react';




export default function Card({ post }) {
  if (!post) return null;
  return (
    <div className="card">
      <div className="card-topbar">
        <h2 className='post-title'>{post.title}</h2>
        <CircleUser className='profile-icon'/>
      </div>
      <p id="body">{post.body}</p>
    </div>
  );
}


