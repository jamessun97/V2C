import Link from 'next/link' // 步骤 1: 导入 Link 组件
import styles from './page.module.css' // 步骤 1: 导入样式文件


export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>你好，世界！</h1>
      
      {/* 步骤 2: 添加链接，指向 "/about" 页面 */}
      <Link href="/about"  className={styles.link}>
        前往“关于我们”页面
      </Link>
    </main>
  )
}