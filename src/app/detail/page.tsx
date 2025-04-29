export default function DetailPage() {
  return (
    <main style={{maxWidth: '900px', margin: '3rem auto', background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '2.5rem 1.5rem'}}>
      <h2 style={{fontSize: '2rem', color: '#432c7a', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center'}}>お知らせ詳細</h2>
      <ul>
        <li>2024/03/15 新入生歓迎会の詳細を掲載しました。</li>
        <li>2024/03/10 春合宿の参加申込を開始しました。</li>
        <li>2024/03/01 新年度の活動計画を公開しました。</li>
      </ul>
    </main>
  );
} 