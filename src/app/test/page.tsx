import Image from 'next/image';

export default function TestPage() {
  return (
    <div style={{background:'#fff', fontFamily:'"Noto Sans JP", sans-serif'}}>
      {/* ヒーロービジュアル */}
      <section style={{position:'relative', width:'100%', minHeight:'80vh', background:'#00bcd4', overflow:'hidden'}}>
        <Image src="/images/image (2).jpg" alt="ヒーロー" fill style={{objectFit:'cover', opacity:0.85}} />
        <div style={{position:'absolute', left:0, top:0, width:'100%', height:'100%', background:'linear-gradient(180deg,rgba(255,255,255,0.0) 60%,#fff 100%)'}}></div>
        <div style={{position:'absolute', left:0, top:0, width:'100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end', alignItems:'center', paddingBottom:'4vw'}}>
          <h1 style={{fontSize:'4vw', color:'#fff', fontWeight:'bold', letterSpacing:'0.1em', textShadow:'0 4px 16px #000', margin:0, lineHeight:1.1, zIndex:2, mixBlendMode:'overlay'}}>タイトルが入ります</h1>
          <p style={{color:'#fff', fontSize:'1.5vw', marginTop:'1vw', textShadow:'0 2px 8px #000', zIndex:2}}>キャッチコピーや公開日など</p>
        </div>
        {/* 波形SVG装飾 */}
        <svg width="100%" height="60" viewBox="0 0 1440 60" style={{position:'absolute', bottom:0, left:0, zIndex:3}}><path d="M0,40 Q360,60 720,20 T1440,40 V60 H0 Z" fill="#fff"/></svg>
      </section>

      {/* 公開日・イントロ */}
      <section style={{background:'#fff', padding:'2.5rem 0 1.5rem 0', textAlign:'center', position:'relative'}}>
        <div style={{position:'absolute', left:0, top:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0}}>
          {/* 薄い黄色の波・斜めSVG装飾 */}
          <svg width="100%" height="60" viewBox="0 0 1440 60"><path d="M0,40 Q360,60 720,20 T1440,40 V60 H0 Z" fill="#fef9c3" fillOpacity="0.5"/></svg>
        </div>
        <div style={{position:'relative', zIndex:1}}>
          <h2 style={{fontSize:'2.2rem', color:'#eab308', fontWeight:'bold', marginBottom:'1.2rem'}}>6月14日(金) 公開</h2>
          <p style={{color:'#444', fontSize:'1.1rem', maxWidth:'600px', margin:'0 auto'}}>ここに映画のイントロダクションやメインコピーが入ります。テスト用のダミーテキストです。</p>
        </div>
      </section>

      {/* NEWSセクション（イントロ直下に移動） */}
      <section style={{background:'#fff', padding:'0 0 2.5rem 0', maxWidth:'900px', margin:'0 auto', position:'relative'}}>
        <div style={{display:'flex', alignItems:'flex-start', gap:'2rem', justifyContent:'center'}}>
          {/* NEWSサイドバー */}
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', minWidth:'80px', background:'none', marginRight:'2vw', position:'relative'}}>
            <div style={{writingMode:'vertical-rl', textOrientation:'mixed', fontSize:'2rem', color:'#222', fontWeight:'bold', letterSpacing:'0.2em', marginBottom:'1.5rem', marginTop:'2rem', lineHeight:1}}>NEWS
              <span style={{fontSize:'1rem', color:'#eab308', fontWeight:'bold', fontFamily:'cursive', marginLeft:'0.2em'}}>news</span>
            </div>
          </div>
          {/* NEWSリスト */}
          <div style={{flex:1, minWidth:'0'}}>
            <div style={{marginBottom:'1.5rem'}}>
              <div style={{color:'#16a34a', fontWeight:'bold', fontSize:'1.1rem'}}>2025.4.17 ・INFO</div>
              <div style={{color:'#222', fontSize:'1rem', marginBottom:'0.7rem'}}>Animals Pedalコラボエフェクター発売決定!!</div>
              <div style={{color:'#16a34a', fontWeight:'bold', fontSize:'1.1rem'}}>2025.3.19 ・INFO</div>
              <div style={{color:'#222', fontSize:'1rem', marginBottom:'0.7rem'}}>Blu-rayの発売記念を記念して、アニメイトにて場面写パネル展示の開催が決定！</div>
              <div style={{color:'#16a34a', fontWeight:'bold', fontSize:'1.1rem'}}>2025.3.12 ・INFO</div>
              <div style={{color:'#222', fontSize:'1rem', marginBottom:'0.7rem'}}>レンタル配信＆デジタルセル配信3月26日（水）決定!!</div>
            </div>
            <div style={{textAlign:'center', width:'100%'}}>
              <button style={{background:'#0e1623', color:'#fff', fontWeight:'bold', fontSize:'1.1rem', border:'none', borderRadius:'0.5rem', padding:'0.8rem 2.5rem', cursor:'pointer', position:'relative', overflow:'hidden', margin:'0 auto', display:'inline-block'}}>VIEW ALL
                <span style={{position:'absolute', right:0, bottom:0, width:'30px', height:'4px', background:'#eab308', borderRadius:'2px'}}></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRAILER 画像重なり表現（回転なし・右上/左下にずらす） */}
      <section style={{marginBottom:'4rem'}}>
        <div style={{flex:'1 1 0', minWidth:'320px', position:'relative', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <div style={{position:'relative', width:'100%', maxWidth:'900px', margin:'0 auto', marginTop:'2rem', marginBottom:'2rem', background:'none', minHeight:'340px', display:'flex', alignItems:'flex-start'}}>
            {/* 左側の大きな画像（右上にはみ出し） */}
            <div style={{position:'relative', zIndex:2, width:'60%', minWidth:'340px', maxWidth:'520px', marginLeft:'-6%', marginTop:'-4%', boxShadow:'0 8px 24px #0002', borderRadius:'0.7rem', border:'4px solid #eab308', overflow:'hidden'}}>
              <Image src="/images/image (2).jpg" alt="トレーラー1" width={600} height={340} style={{objectFit:'cover', width:'100%', height:'auto'}} />
            </div>
            {/* 右側のTRAILERエリア（左上に重なる） */}
            <div style={{position:'relative', zIndex:1, flex:'1 1 0', background:'linear-gradient(120deg,#0e1623 90%,#1e293b 100%)', borderRadius:'0.7rem', marginLeft:'-5%', minHeight:'340px', padding:'2.5rem 2rem 2rem 7vw', color:'#fff', display:'flex', flexDirection:'column', justifyContent:'center', boxShadow:'0 2px 8px #0001'}}>
              <div style={{fontSize:'2.6rem', fontWeight:'bold', letterSpacing:'0.05em', lineHeight:1.1, marginBottom:'1.2rem', position:'relative'}}>
                TRAILER
                <span style={{fontSize:'1.2rem', color:'#eab308', fontWeight:'bold', marginLeft:'0.7rem', fontFamily:'cursive', position:'absolute', left:'100%', top:'0.7rem'}}>trailer</span>
              </div>
              <div style={{fontSize:'1.1rem', color:'#fff', opacity:0.85, marginBottom:'2rem'}}>Blu-ray＆設定資料集 発売告知PV</div>
              <div style={{display:'flex', gap:'1.5rem', alignItems:'center'}}>
                <button style={{width:'48px', height:'48px', borderRadius:'50%', border:'2px solid #38bdf8', background:'none', color:'#38bdf8', fontSize:'2rem', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'}}>◀</button>
                <button style={{width:'48px', height:'48px', borderRadius:'50%', border:'2px solid #38bdf8', background:'none', color:'#38bdf8', fontSize:'2rem', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'}}>▶</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section style={{background:'#fff', position:'relative', padding:'4rem 0 2rem 0', minHeight:'320px'}}>
        {/* 斜めカットの黄色SVG */}
        <svg width="100%" height="80" viewBox="0 0 1440 80" style={{position:'absolute', top:0, left:0, zIndex:0}}><polygon points="0,80 1440,0 1440,80" fill="#fef9c3"/></svg>
        <div style={{position:'relative', zIndex:1, maxWidth:'900px', margin:'0 auto', textAlign:'left'}}>
          <h2 style={{fontSize:'2.2rem', color:'#eab308', fontWeight:'bold', marginBottom:'1.2rem', letterSpacing:'0.1em'}}>INTRODUCTION</h2>
          <p style={{color:'#444', fontSize:'1.1rem', lineHeight:1.9, marginBottom:'1.5rem'}}>ここにイントロダクションのダミーテキストが入ります。映画や作品の紹介文を想定しています。<br/>複数行のテキストもOKです。</p>
          <div style={{color:'#eab308', fontWeight:'bold', fontSize:'1.1rem'}}>特設会場のご案内</div>
        </div>
      </section>

      {/* STORY */}
      {/* STORYセクションを完全に削除 */}

      {/* CHARACTER */}
      <section style={{background:'#fff', position:'relative', padding:'4rem 0 2rem 0', minHeight:'320px', display:'flex', flexDirection:'row', alignItems:'flex-start', justifyContent:'center'}}>
        {/* サイド縦見出し（左側） */}
        <div style={{writingMode:'vertical-rl', textOrientation:'mixed', fontSize:'1.2rem', color:'#38bdf8', fontWeight:'bold', letterSpacing:'0.2em', marginRight:'2rem', textAlign:'center'}}>CHARACTER</div>
        {/* キャラクター画像リスト（右側） */}
        <div style={{display:'flex', flexWrap:'wrap', gap:'2rem', justifyContent:'center', alignItems:'center'}}>
          <div style={{width:'180px', textAlign:'center'}}>
            <Image src="/images/image (2).jpg" alt="キャラ1" width={180} height={180} style={{objectFit:'cover', borderRadius:'1rem'}} />
            <div style={{marginTop:'0.7rem', color:'#444'}}>キャラクター1</div>
          </div>
          <div style={{width:'180px', textAlign:'center'}}>
            <Image src="/images/image (2).jpg" alt="キャラ2" width={180} height={180} style={{objectFit:'cover', borderRadius:'1rem'}} />
            <div style={{marginTop:'0.7rem', color:'#444'}}>キャラクター2</div>
          </div>
        </div>
      </section>

      {/* STAFF&CAST */}
      <section style={{background:'#f7fafc', position:'relative', padding:'4rem 0 2rem 0', minHeight:'320px'}}>
        {/* 黄色の斜めカット背景 */}
        <svg width="100%" height="80" viewBox="0 0 1440 80" style={{position:'absolute', top:0, left:0, zIndex:0}}><polygon points="0,80 1440,0 1440,80" fill="#fef9c3"/></svg>
        <div style={{position:'relative', zIndex:1, maxWidth:'900px', margin:'0 auto', display:'flex', flexWrap:'wrap', gap:'2rem', alignItems:'stretch'}}>
          <div style={{flex:'1 1 300px', minWidth:'220px', background:'#fff', borderRadius:'1rem', boxShadow:'0 2px 8px #eab30833', padding:'2rem'}}>
            <h3 style={{color:'#eab308', fontWeight:'bold'}}>STAFF</h3>
            <ul style={{listStyle:'none', padding:0, color:'#444', fontSize:'1rem', textAlign:'left'}}>
              <li>監督：テスト監督</li>
              <li>脚本：テスト脚本</li>
              <li>キャラデザ：テストデザイナー</li>
              <li>音楽：テスト音楽</li>
            </ul>
          </div>
          <div style={{flex:'1 1 300px', minWidth:'220px', background:'#fff', borderRadius:'1rem', boxShadow:'0 2px 8px #eab30833', padding:'2rem'}}>
            <h3 style={{color:'#eab308', fontWeight:'bold'}}>CAST</h3>
            <ul style={{listStyle:'none', padding:0, color:'#444', fontSize:'1rem', textAlign:'left'}}>
              <li>キャラ1：テスト声優1</li>
              <li>キャラ2：テスト声優2</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TICKET */}
      <section style={{background:'#fff', position:'relative', padding:'4rem 0 2rem 0', minHeight:'320px'}}>
        <h2 style={{fontSize:'1.5rem', color:'#eab308', fontWeight:'bold', letterSpacing:'0.1em', marginBottom:'1.2rem', textAlign:'center'}}>TICKET</h2>
        <div style={{display:'flex', flexDirection:'column', gap:'2rem', alignItems:'center', maxWidth:'700px', margin:'0 auto'}}>
          {[1,2,3].map(i => (
            <div key={i} style={{width:'100%', background:'#f7fafc', borderRadius:'1rem', boxShadow:'0 2px 8px #eab30833', padding:'1.5rem', display:'flex', alignItems:'center', gap:'2rem'}}>
              <Image src="/images/image (2).jpg" alt={`チケット${i}`} width={120} height={160} style={{objectFit:'cover', borderRadius:'0.7rem'}} />
              <div style={{flex:1, textAlign:'left'}}>
                <div style={{color:'#444', fontWeight:'bold', fontSize:'1.1rem'}}>チケット商品名{i}</div>
                <div style={{color:'#888', fontSize:'0.98rem', marginTop:'0.5rem'}}>ここにチケットの説明文が入ります。サンプルテキストです。</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* フッター */}
      <footer style={{background:'linear-gradient(180deg,#fff 0%,#fde68a 100%)', color:'#444', padding:'3rem 0 2rem 0', textAlign:'center', marginTop:'2rem', position:'relative'}}>
        {/* フッターイラスト（仮） */}
        <div style={{position:'absolute', left:0, bottom:0, width:'100%', height:'120px', zIndex:0, pointerEvents:'none'}}>
          <svg width="100%" height="120" viewBox="0 0 1440 120"><ellipse cx="720" cy="100" rx="600" ry="40" fill="#fde68a" fillOpacity="0.5"/></svg>
        </div>
        <div style={{position:'relative', zIndex:1}}>
          <div style={{fontWeight:'bold', fontSize:'1.1rem'}}>テスト用フッター</div>
          <div style={{marginTop:'0.5rem', fontSize:'0.95rem'}}>© 2024 テストサイト All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
} 