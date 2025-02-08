```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Link href="/about">Go to About</Link>      
    </div>
  );
}

// app/about/page.js
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```