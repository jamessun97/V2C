// 这是一个异步函数，专门负责获取数据
async function getData() {
    // 我们从一个免费的在线API获取用户数据
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
    // 如果获取失败，就抛出一个错误
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    // 返回获取到的JSON数据
    return res.json();
  }
  
  // 这是我们的页面组件，注意它也是一个异步函数
  export default async function UsersPage() {
    // 等待 getData() 函数取回数据
    const users = await getData();
  
    return (
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>用户列表</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {/* 这里我们使用 .map() 方法遍历用户数组，
            为每个用户创建一个列表项 <li> 
          */}
          {users.map((user: { id: number; name: string; email: string }) => (
            <li key={user.id} style={{ background: '#eee', padding: '1rem', margin: '0.5rem 0', borderRadius: '5px' }}>
              <strong>{user.name}</strong>
              <p style={{ margin: '0.5rem 0 0', color: '#555' }}>{user.email}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }