// TSX = TypeScript + XML

import { Header } from "./components/Header"
import { Post, PostType } from './components/Post'
import { Sidebar } from "./components/Sibebar"

import styles from './App.module.css';

import './global.css'


const posts: PostType[] = [  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DevTechG.png',
      name: 'DevTechG',
      role: 'Full-Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-03-20 11:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50',
      name: 'DeveloperRandom',
      role: 'Front-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Fiz um novo projeto.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })}
        </main>
      </div>
    </div>
  )
}

